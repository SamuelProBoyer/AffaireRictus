const background = document.getElementById('background');
const container = document.getElementById('container');

container.addEventListener('mousemove', e => {
  const x = e.clientX / container.offsetWidth;
  const y = e.clientY / container.offsetHeight;
  const moveX = -(x - 1) * 80; /* Ajoute mouvement en X */
  const moveY = -(y - 0.5) * 80; /* Ajoute mouvement en Y */
  const translate = `translate(${moveX}px, ${moveY}px)`; // Interpol entre 

  background.style.transform = `${translate} scale(1.30)`; // Ajoute le style
});

container.addEventListener('mouseleave', () => {
  background.style.transform = ''; /* Si la souris nhover plus alors le transform devient comme avant */
});
