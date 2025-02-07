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