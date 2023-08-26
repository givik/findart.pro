let perspective = 500;
let scale = 1.1;

window.addEventListener('load', () => {
  let elementTo3dHover = document.querySelectorAll('.hover-3d');
  console.log('elementTo3dHover', elementTo3dHover);

  elementTo3dHover.forEach((el) => {
    addEvents(el);
  });
});

function addEvents(element) {
  const elHeight = element.clientHeight;
  const elWidth = element.clientWidth;

  element.addEventListener('mousemove', (e) => mouseMove(e, element, elWidth, elHeight));

  element.addEventListener('mouseout', function () {
    element.style.transform = `perspective(${perspective}px) scale(1) rotateX(0) rotateY(0)`;
  });

  element.addEventListener('mousedown', function () {
    element.style.transform = `perspective(${perspective}px) scale(0.97) rotateX(0) rotateY(0)`;
  });

  element.addEventListener('mouseup', function () {
    element.style.transform = `perspective(${perspective}px) scale(${scale}) rotateX(0) rotateY(0)`;
  });
}

function mouseMove(event, element, elWidth, elHeight) {
  const xVal = event.layerX;
  const yVal = event.layerY;

  const yRotation = ((xVal - elWidth / 2) / elWidth) * 10;
  const xRotation = -((yVal - elHeight / 2) / elHeight) * 10;

  const string = `perspective(${perspective}px) scale(${scale}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  element.style.transform = string;
}
