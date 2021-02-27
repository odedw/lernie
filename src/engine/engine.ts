import moment from 'moment';
import { config } from '../config/parameterConfig';
import { downloadObjectAsJson, loadFile } from '../storage';
import { Parameter, SourceState, SourceType, State } from '../types';
import run from './run';
import { setupSources, setupPresets } from './setup';
import { generateDefaultSourceState } from './state/defaultSourceState';

export class Engine {
  state: State;
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
    setupSources(this.state, () => run(this.state));
    setupPresets(this.state, this.savePreset, this.loadPreset);
  }
  run() {
    run(this.state);
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
    if (this.state.presets[index] && this.state.presets[index].length === 2) {
      this.state.sources[0] = this.cloneSourceState(this.state.presets[index][0]);
      this.state.sources[1] = this.cloneSourceState(this.state.presets[index][1]);
    }
    setupSources(this.state, () => run(this.state));
    run(this.state);
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
          setupSources(this.state, () => run(this.state));
          run(this.state);
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
