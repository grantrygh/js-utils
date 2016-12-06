export default function downloadFile(url, filename) {
    const el = document.createElement('a');
    el.style.display = 'none';
    el.href = url;
    el.download = filename || url;
    el.click();
}
