const blockSize = 30;
const rows = 20;
const columns = 20;
let board;
let context;
let active = false;

// snake
let sl = 1;
const sc = '#3bb300';
let vx = 0;
let vy = 0;

// body
let sb = [];
const sbc = '#2a8000'

// fruit
let fx, fy, fl = [];
const fc = '#cd2100';

window.onload = function () {
  board = document.getElementById('board');
  board.width = columns * blockSize;
  board.height = rows * blockSize;
  context = board.getContext('2d');
  active = true;


  update();


}

function update() {
  context.fillStyle = '#1a1a1a';
  context.fillRect(0, 0, board.width, board.height);

  draw_fruit();
  draw_new_snake()

}

function reset() {
  context.fillStyle = '#1a1a1a';
  context.fillRect(0, 0, board.width, board.height);
  sl = 1;
  sb = [];
  fl = [];

  draw_new_snake();
  draw_fruit();

  console.log(sb)
  console.log(fl)

}

function draw_new_snake() {
  let x;
  let y;
  x = Math.round(Math.random() * 10)
  if (x > 7) {
    x += Math.round(Math.random() * 10)
  }
  y = Math.round(Math.random() * 10)
  if (y > 7) {
    y += Math.round(Math.random() * 10)
  }
  x *= blockSize;
  y *= blockSize;


  sb[0] = [x, y];
  context.fillStyle = sc;
  context.fillRect(x, y, blockSize, blockSize);
}

function draw_fruit(collided) {
  if (collided === true) {
    fl = [];
  }

  if (fl.length === 0) {
    fx = Math.round(Math.random() * 10)
    if (fx > 7) {
      fx += Math.round(Math.random() * 10)
    }
    fy = Math.round(Math.random() * 10)
    if (fy > 7) {
      fy += Math.round(Math.random() * 10)
    }
    fx *= blockSize;
    fy *= blockSize;
    fl = [fx, fy]
  }

  context.fillStyle = fc;
  context.fillRect(fx, fy, blockSize, blockSize);
}