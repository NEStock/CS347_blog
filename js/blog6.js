const jsEditorMap = document.getElementById('js-editor-map');
const goMap = document.getElementById('go-button-map');
const previewMap = document.getElementById('preview-map');

const jsEditorFilter = document.getElementById('js-editor-filter');
const goFilter = document.getElementById('go-button-filter');
const previewFilter = document.getElementById('preview-filter');

const jsEditorReduce = document.getElementById('js-editor-reduce');
const goReduce = document.getElementById('go-button-reduce');
const previewReduce = document.getElementById('preview-reduce');

function executeMap() {
    previewMap.innerHTML = `${eval(jsEditorMap.value)}`;
}

function executeFilter() {
    previewFilter.innerHTML = `${eval(jsEditorFilter.value)}`;
}

function executeReduce() {
    previewReduce.innerHTML = `${eval(jsEditorReduce.value)}`;
}

goMap.addEventListener('click', executeMap);
goFilter.addEventListener('click', executeFilter);
goReduce.addEventListener('click', executeReduce);