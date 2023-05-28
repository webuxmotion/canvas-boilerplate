const tick = ({ draw, calculate }) => {
  requestAnimationFrame(tick);
  draw();
  calculate();
}

export default tick;