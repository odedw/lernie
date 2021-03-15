export function loadFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      resolve(event.target?.result as string);
    });
    reader.readAsText(file);
  });
}

export function downloadObjectAsJson(data: string, name: string) {
  var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', name + '.json');
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
