document.addEventListener('DOMContentLoaded', () => {
  const hoverElements = document.querySelectorAll('.hover-flip');

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('animate__animated', 'animate__headShake');
    });

    el.addEventListener('animationend', () => {
      el.classList.remove('animate__animated', 'animate__headShake');
    });
  });
});
