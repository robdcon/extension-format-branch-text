export function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
        () => {
            alert('Copied to clipboard');
        },
        () => {
            alert('Failed to copy to clipboard');
        },
    );
}

export function readClipboard() {
    return navigator.clipboard.readText().then(
        (clipText) => {
            console.log('Clipboard text: ' + clipText);
            return clipText;
        },
        () => {
            alert('Failed to read clipboard');
        },
    );
}