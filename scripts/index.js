import { formatText } from './format-text.js';
import { readClipboard } from './clipboard.js';

const formatTextBtn = document.getElementById('format-text-btn');

formatTextBtn.addEventListener('click', async () => {
    let str = await readClipboard();
    str = formatText(str);
    console.log(str);
});