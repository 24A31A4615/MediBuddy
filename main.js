// MediBuddy — Main JS

// Mobile menu toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const actions = document.querySelector('.nav-actions');
  if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  if (actions) actions.style.display = actions.style.display === 'flex' ? 'none' : 'flex';
}

// Filter pills / tabs interactivity
document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    pill.closest('.filter-bar')?.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    if (window.scrollY > 30) {
      nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }
});

// Animate stats on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .doctor-card, .tip-card, .dash-stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
