let isDown = false;
let startX, startY, scrollLeft, scrollTop;

document.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    startY = e.pageY;
    scrollLeft = document.documentElement.scrollLeft;
    scrollTop = document.documentElement.scrollTop;
});

document.addEventListener('mouseup', () => {
    isDown = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    const walkX = (x - startX) * 1; // vitesse du scrolling
    const walkY = (y - startY) * 1;
    document.documentElement.scrollLeft = scrollLeft - walkX;
    document.documentElement.scrollTop = scrollTop - walkY;
});