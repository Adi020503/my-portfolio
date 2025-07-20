// Toggle navbar menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.home-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.about-content, .contact-form, .contact-info', { origin: 'left' });
ScrollReveal().reveal('.about-image, .project-card', { origin: 'right', interval: 200 });
ScrollReveal().reveal('.btn, .contact-link', { origin: 'bottom', interval: 100 });
