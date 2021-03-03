import gsap from 'gsap';
import moment from 'moment';
import { config } from '../config/parameterConfig';
import { downloadObjectAsJson, loadFile } from '../storage';
import { Parameter, SourceState, SourceType, State } from '../types';
import run from './run';
import ScopeSubjects from './ScopeSubjects';
import { setupSources, setupPresets } from './setupMidi';
import { generateDefaultSourceState } from './state/defaultSourceState';
import { merge } from 'rxjs';

export class Engine {
  state: State;
  scopeSubjects = new ScopeSubjects();
  screenRatio: number = 1;
  constructor() {
    this.state = {
      sources: [generateDefaultSourceState(SourceType.osc), generateDefaultSourceState(SourceType.osc, false)],
      presets: [],
      shift: false,
    };
    this.savePreset = this.savePreset.bind(this);
    this.loadPreset = this.loadPreset.bind(this);
  }
  init() {
    setupSources(this.state, () => run(this.state, this.screenRatio), this.scopeSubjects);
    setupPresets(this.state, this.savePreset, this.loadPreset, this.scopeSubjects);

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
    run(this.state, this.screenRatio);
  }
  randomize() {
    Object.keys(this.state.sources[0].parameters).forEach((k) => {
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
        duration: 10,
        repeat: 0,
      });
    });
    if (rerun) {
      run(this.state, this.screenRatio);
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
          setupSources(this.state, () => run(this.state, this.screenRatio), this.scopeSubjects);
          run(this.state, this.screenRatio);
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
