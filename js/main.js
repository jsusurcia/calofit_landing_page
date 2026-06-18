// Header scroll shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
const mobileOverlay = document.getElementById('mobileOverlay');
function closeMenu(){
  menuToggle.classList.remove('open');
  mobilePanel.classList.remove('open');
  mobileOverlay.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mobilePanel.classList.toggle('open');
  mobileOverlay.classList.toggle('open');
});
mobileOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-panel a').forEach(a => a.addEventListener('click', closeMenu));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
