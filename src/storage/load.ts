import run from '../engine/run';
import setup from '../engine/setup';
import { setState, State } from '../engine/state';

function loadFile(file: File): Promise<string> {
  // Check if the file is an image.
  //   if (file.type && file.type.indexOf('json') === -1) {
  // console.log('File is not a project file.', file.type, file);
  // return;
  //   }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      resolve(event.target?.result as string);
    });
    reader.readAsText(file);
  });
}
export function loadProject(file: File) {
  loadFile(file)
    .then((str) => {
      try {
        const state = JSON.parse(str) as State;
        setState(state);
        setup();
        run();
      } catch (err) {
        console.error('failed to parse file', err);
      }
    })
    .catch((err) => {
      console.error('failed to read file', err);
    });
}
