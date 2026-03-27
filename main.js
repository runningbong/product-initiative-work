document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const btnText = toggleBtn.querySelector('.btn-text');

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    updateButtonContent(true);
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateButtonContent(isDark);
  });

  function updateButtonContent(isDark) {
    if (isDark) {
      btnText.textContent = 'Switch to White Mode';
    } else {
      btnText.textContent = 'Switch to Dark Mode';
    }
  }
});
