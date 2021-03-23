import gsap from 'gsap';
import moment from 'moment';
import { config, allParameters } from '../config/parameterConfig';
import { downloadObjectAsJson, loadFile } from '../storage';
import { Parameter, SourceState, SourceType, SourceTypeValues, State } from '../types';
import { LFO } from './LFO';
import run, { runAudio, runSource } from './runHydra';
import streams from './streams';
import { setupMidi } from './setupMidi';
import { generateDefaultSourceState } from './state/defaultSourceState';
import { KeyState } from '../types/Keys';

export class Engine {
  state: State;
  screenRatio: number = 1;
  lfos = [new LFO(1000), new LFO(2002)];
  ranAudio = false;
  keyState: KeyState = {
    lfo1: false,
    lfo2: false,
    shift: false,
    audio: false,
  };

  constructor() {
    this.state = {
      sources: [generateDefaultSourceState(SourceType.osc), generateDefaultSourceState(SourceType.osc, false)],
      presets: [],
    };
    this.savePreset = this.savePreset.bind(this);
    this.loadPreset = this.loadPreset.bind(this);
  }
  init(): Promise<any> {
    return setupMidi((i) => this.state.sources[i].sourceType, this.keyState).then(() => {
      // subscriptions
      streams.savePreset$.subscribe((i) => this.savePreset(i));
      streams.loadPreset$.subscribe((i) => this.loadPreset(i));
      streams.sourceTypeChange$.subscribe((index) => {
        const ss = this.state.sources[index];
        ss.sourceType = ((Number(ss.sourceType) + 1) % SourceTypeValues.length) as SourceType;

        const defaultParams = generateDefaultSourceState(ss.sourceType).parameters;
        allParameters
          .filter((p) => !['blend', 'diff'].includes(p))
          .forEach((p) => (ss.parameters[p as Parameter] = defaultParams[p as Parameter]));
        runSource(this.state, index, this.screenRatio, this.lfos);
      });
      streams.keyDown$.subscribe((e) => (this.keyState[e] = true));
      streams.keyUp$.subscribe((e) => (this.keyState[e] = false));
      streams.parameterValueChange$.subscribe(
        (e) => (this.state.sources[e.sourceIndex].parameters[e.parameter] = e.value)
      );
      streams.lfoDestinationValueChange$.subscribe(
        (e) => (this.state.sources[e.sourceIndex].lfos[e.lfoIndex][e.parameter] = e.value)
      );
      streams.audioDestinationValueChange$.subscribe(
        (e) => (this.state.sources[e.sourceIndex].audio[e.parameter] = e.value)
      );
      streams.resetSource$.subscribe((index) => {
        const ss = this.state.sources[index];
        const defaultState = generateDefaultSourceState(ss.sourceType);
        // copy parameters default state
        allParameters.forEach((p) => {
          ss.parameters[p] = defaultState.parameters[p];
          ss.lfos.forEach((lfo) => (lfo[p] = 0));
        });
      });
      streams.clearParameter$.subscribe((e) => {
        const ss = this.state.sources[e.sourceIndex];
        if (e.destination === 'lfo1') {
          ss.lfos[0][e.parameter] = 0;
        } else if (e.destination === 'lfo2') {
          ss.lfos[1][e.parameter] = 0;
        } else if (e.destination === 'audio') {
          ss.audio[e.parameter] = 0;
        } else {
          ss.parameters[e.parameter] = generateDefaultSourceState(ss.sourceType).parameters[e.parameter];
        }
      });

      streams.selectAudioBin$.subscribe((e) => {
        if (!this.ranAudio) {
          this.ranAudio = true;
          runAudio();
        }
      });
    });

    // debug
    // merge(
    //   engine.scopeSubjects.sourceTypeChange,
    //   engine.scopeSubjects.parameterChange,

    //   engine.scopeSubjects.loadPreset,
    //   engine.scopeSubjects.savePreset
    // ).subscribe((e) => console.log(e));
  }
  run(screenRatio?: number) {
    if (screenRatio) {
      this.screenRatio = screenRatio;
    }
    run(this.state, this.screenRatio, this.lfos);
  }
  randomize() {
    allParameters.forEach((k) => {
      if (k.startsWith('modulate')) {
        return;
      }
      if (Math.random() < 0.5) {
        const key = k as Parameter;
        this.state.sources[0].parameters[key] =
          Math.random() * (config.parameters[key].max - config.parameters[key].min + 1) + config.parameters[key].min;
        this.state.sources[1].parameters[key] =
          Math.random() * (config.parameters[key].max - config.parameters[key].min + 1) + config.parameters[key].min;
      }
    });
  }

  savePreset(index: number) {
    this.state.presets[index] = [
      this.cloneSourceState(this.state.sources[0]),
      this.cloneSourceState(this.state.sources[1]),
    ];
  }

  loadPreset(index: number) {
    if (!this.state.presets[index] || this.state.presets[index].length !== this.state.sources.length) {
      return;
    }
    const rerun = this.state.presets[index].some((p, i) => p.sourceType !== this.state.sources[i].sourceType);
    this.state.sources.forEach((s, i) => {
      const preset = this.state.presets[index][i];
      s.sourceType = preset.sourceType;
      gsap.to(s.parameters, {
        ...preset.parameters,
        duration: 0.001,
        repeat: 0,
      });
    });
    if (rerun) {
      run(this.state, this.screenRatio, this.lfos);
    }
  }

  saveProject() {
    downloadObjectAsJson(JSON.stringify(this.state, null, 2), moment().format('YYYY-MM-DD_hh-mm-ss'));
  }

  loadProject(file: File) {
    loadFile(file)
      .then((str) => {
        try {
          const state = JSON.parse(str) as State;
          this.state = state;
          run(this.state, this.screenRatio, this.lfos);
        } catch (err) {
          console.error('failed to parse file', err);
        }
      })
      .catch((err) => {
        console.error('failed to read file', err);
      });
  }

  private cloneSourceState(s: SourceState): SourceState {
    return new SourceState({ ...s.parameters }, s.sourceType);
  }
}

export const engine = new Engine();
