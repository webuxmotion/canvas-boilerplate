export default function resizeCanvas({
  canvas,
  c,
  fullscreen,
  baseCanvasHeight,
  baseCanvasWidth,
}) {
  if (fullscreen) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    canvas.width = Math.floor(windowWidth * window.devicePixelRatio);
    canvas.height = Math.floor(windowHeight * window.devicePixelRatio);

    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowHeight + "px";
  } else {
    canvas.width = Math.floor(baseCanvasWidth * window.devicePixelRatio);
    canvas.height = Math.floor(baseCanvasHeight * window.devicePixelRatio);

    canvas.style.width = baseCanvasWidth + "px";
    canvas.style.height = baseCanvasHeight + "px";
  }

  c.scale(window.devicePixelRatio, window.devicePixelRatio);
}
