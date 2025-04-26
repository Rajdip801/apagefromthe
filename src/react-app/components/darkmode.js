document.addEventListener('DOMContentLoaded', function () {
    const htmlEl = document.documentElement;
    const toggleSwitch = document.getElementById('darkModeSwitch');
    const navbar = document.getElementById('mainNavbar');

    // Retrieve theme from local storage (default: light) and update the global theme and navbar classes
    const currentTheme = localStorage.getItem('bsTheme') || 'light';
    htmlEl.setAttribute('data-bs-theme', currentTheme);
    toggleSwitch.checked = (currentTheme === 'dark');

    if (currentTheme === 'dark') {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
    } else {
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
    }

    // Listen for toggle switch changes and update both the global theme and navbar classes accordingly
    toggleSwitch.addEventListener('change', function () {
      if (this.checked) {
        htmlEl.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('bsTheme', 'dark');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
      } else {
        htmlEl.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('bsTheme', 'light');
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
      }
    });
  });
