import moment from 'moment';
import { State, state } from '../engine/state';

function downloadObjectAsJson(state: State, name: string) {
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', name + '.json');
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function saveProject() {
  downloadObjectAsJson(state, moment().format('YYYY-MM-DD_hh-mm-ss'));
}
