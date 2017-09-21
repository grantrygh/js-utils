'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = downloadFile;
function downloadFile(url, filename) {
    var el = document.createElement('a');
    el.style.display = 'none';
    el.href = url;
    el.download = filename || url;
    el.target = '_self';
    document.body.appendChild(el);
    el.click();
}