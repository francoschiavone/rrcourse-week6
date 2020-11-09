var canvas = null,
    ctx = null,
    x = 50,
    y = 50;

function paint(ctx) {
  ctx.fillStyle = '#09232f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.fillRect(x, y, 10, 10);
}

function act() {
  x += 2;
  if (x > canvas.width) {
    x = 0;
  }
}

function run() {
  window.requestAnimationFrame(run);
  act();
  paint(ctx);
}

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  run();
}

window.addEventListener('load', init, false);
