$(document).ready(function () {
  $('#testButton').on('click', function () {
    $('#testResult').hide().text('It works! jQuery is in action!').slideDown(1000);
    $(this).prop('disabled', true);
  });
});


// Theme switcher and menu toggle functionality
function initThemeSwitcher() {
  // Menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  // Theme switcher
  const toggle = document.getElementById('theme-switch');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme', toggle.checked);
      localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
    });

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      toggle.checked = true;
    }
  }
}
