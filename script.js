document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim();
      if (text.toLowerCase().includes('start') || text.toLowerCase().includes('launch')) {
        button.textContent = 'Launching...';
        setTimeout(() => {
          button.textContent = text;
        }, 1200);
      }
    });
  });
});

