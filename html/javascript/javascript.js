// HERO SLIDER
const slides = document.querySelectorAll('.hero-img');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentSlide = 0;
let slideInterval = setInterval(showNextSlide, 5000);

// Generate dots
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(index);
    slideInterval = setInterval(showNextSlide, 5000);
  });
  dotsContainer?.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dots .dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
}

nextBtn?.addEventListener('click', () => {
  clearInterval(slideInterval);
  showNextSlide();
  slideInterval = setInterval(showNextSlide, 5000);
});

prevBtn?.addEventListener('click', () => {
  clearInterval(slideInterval);
  showPrevSlide();
  slideInterval = setInterval(showNextSlide, 5000);
});

// ALL DOM INTERACTIONS AFTER PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.overlay');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  // Mobile nav toggle
  toggleBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('show');
    overlay?.classList.toggle('show');
  });

  // Click outside to close nav
  overlay?.addEventListener('click', () => {
    navLinks?.classList.remove('show');
    overlay?.classList.remove('show');
  });

  // Dropdown toggle
  dropdownToggle?.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling
    dropdown?.classList.toggle('active');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!dropdown?.contains(e.target)) {
      dropdown?.classList.remove('active');
    }
  });
});
