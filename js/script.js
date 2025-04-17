$(document).ready(function () {
  $('#testButton').on('click', function () {
    $('#testResult').hide().text('It works! jQuery is in action!').slideDown(1000);
    $(this).prop('disabled', true);
  });
});

// Vanilla JavaScript for the menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {

  // Menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


  // Theme toggle
  const toggle = document.getElementById('theme-switch');
  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme', toggle.checked);
      localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
    });

    // Dark Theme Initialization
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      toggle.checked = true;
    }
  }

});

