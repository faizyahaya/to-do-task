// Sidebar toggle on mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
}

// Hide sidebar if you tap outside (only on small screens)
document.addEventListener('click', (e) => {
  const isSmallScreen = window.innerWidth <= 768;

  if (
    isSmallScreen &&
    sidebar.classList.contains('show') &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove('show');
  }
});

// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = toggle.closest('.dropdown');
    dropdown.classList.toggle('open');
  });
});

document.addEventListener('click', (e) => {
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.closest('.dropdown');
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

document.getElementById("switchRole").addEventListener("click", function() {
  // Check current page (provider or client)
  if (window.location.href.includes("provider")) {
    // Redirect to client dashboard
    window.location.href = "dashboard-client.html";
  } else {
    // Redirect to provider dashboard
    window.location.href = "dashboard-provider.html";
  }
});
