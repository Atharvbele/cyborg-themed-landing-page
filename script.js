const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  document.addEventListener('pointermove', (e) => {
    const x = (e.clientX / innerWidth - .5) * 8;
    const y = (e.clientY / innerHeight - .5) * 8;
    document.querySelector('.hero-visual')?.style.setProperty('transform', `translate(${x}px,${y}px)`);
  });
}
