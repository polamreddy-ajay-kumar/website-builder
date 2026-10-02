document.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.querySelector('.download-btn');
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      downloadButton.textContent = 'Opening download...';
      setTimeout(() => {
        downloadButton.textContent = 'Download APK';
      }, 1500);
    });
  }
});

