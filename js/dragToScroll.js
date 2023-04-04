let isDown = false;
let startX, scrollLeft;

document.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = document.documentElement.scrollLeft;
  scrollRight = document.documentElement.scrollRight;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walkX = (x - startX) * 1.5; // vitesse du scrolling pas trop toucher ca bug sinon
  document.documentElement.scrollLeft = scrollLeft - walkX;
});

document.addEventListener('wheel', (e) => {
    const scrollAmount = e.deltaY;
    document.documentElement.scrollLeft += scrollAmount;
  });


