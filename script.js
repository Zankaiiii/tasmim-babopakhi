// Animate intro text
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro-text');
  setTimeout(()=>{intro.style.opacity=1; intro.style.transform='translateY(0)';}, 500);
});

// Scroll reveal for reasons, timeline, hates with bounce
const revealElements = document.querySelectorAll('.reason-card, .timeline-event, .hate-card');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger && !el.classList.contains('active-reveal')) {
      el.classList.add('active-reveal');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Floating hearts randomization with wobble
const hearts = document.querySelectorAll('.glass-heart');
hearts.forEach(h=>{
  const size = Math.random()*30 + 30;
  const duration = Math.random()*8 + 6;
  const xPos = Math.random()*90;
  const yStart = Math.random()*100;
  h.style.width = `${size}px`;
  h.style.height = `${size}px`;
  h.style.left = `${xPos}%`;
  h.style.setProperty('--y', `${yStart}vh`);
  h.style.animationDuration = `${duration}s, 3s`; // floatGlass + wobble
});
