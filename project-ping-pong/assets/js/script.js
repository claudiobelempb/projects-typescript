const el = document.querySelector("canvas");
const ctx = el.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const lineWidth = 15;
const gapX = 10;

const mouse = {
  x: 0,
  y: 0
}

const field = {
  w: w,
  h: h,
  draw: function (){
  ctx.fillStyle = "#286047";
  ctx.fillRect(0, 0, this.w, this.h);
  }
}

const line = {
  w: lineWidth,
  h: h,
  draw: function(){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(w / 2 - this.w / 2, 0, lineWidth, this.h);
  }
}

const leftPaddle = {
  x: gapX,
  y: 0,
  w: lineWidth,
  h: 200,
  _move: function() {
    this.y = mouse.y - this.h / 2
  },
  draw: function(){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this._move();
  }
}

const rightPaddle = {
  x: w - lineWidth - gapX,
  y: 100,
  w: lineWidth,
  h: 200,
  speed: 5,
  _move: function() {
    if(this.y + this.h / 2 < boll.y + boll.r){
      this.y += this.speed;
    }else{
      this.y -= this.speed;
    }
  },
  speedUp: function(){
    this.speed += 2;
  },
  draw: function(){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this._move();
  }
}

const score= {
  human: 0,
  computer: 0,
  increaseHuman: function(){
    this.human++;
  },
  increaseComputer: function(){
    this.computer++;
  },
  draw: function(){
    // desenhando o placar
   ctx.font = "bold 72px Arial";
   ctx.textAlign = "center";
   ctx.textBaseline = "top";
   ctx.fillStyle = "#01341D";
   ctx.fillText(this.human, w / 4, 50);
   ctx.fillText(this.computer, w / 4 + w / 2, 50);
  }
}

const boll = {
  x: 0,
  y:200,
  r: 20,
  speed: 5,
  directionX: 1,
  directionY: 1,
  _calcPosition: function(){

    if(this.x > w - this.r - rightPaddle.w - gapX){
      if(this.y + this.r > rightPaddle.y && this.y - this.r < rightPaddle.y + rightPaddle.h){
        this._reverseX();
      }else{
        score.increaseHuman();
        this._pointUp();
      }
    }

    if(this.x < this.r + leftPaddle.w + gapX){
      if(this.y + this.r > leftPaddle.y && this.y - this.r < leftPaddle.y + leftPaddle.h){
        this._reverseX();
      }else{
        score.increaseComputer();
        this._pointUp();
      }
    }

    if(
      (this.y - this.r < 0 && this.directionY < 0) ||
      (this.y > h - this.r && this.directionY > 0)
      ){
      this._reverseY();
    }
  },
  _reverseX: function(){
    this.directionX *= -1;
  },
  _reverseY: function(){
    this.directionY *= -1;
  },
  _speedUp: function(){
    this.speed += 3;
  },
  _pointUp: function(){
    // this._speedUp();
    // rightPaddle.speedUp();

    this.x = w / 2;
    this.h = h / 2;
  },
  _move: function(){
    this.x += this.directionX * this.speed,
    this.y += this.directionY * this.speed
  },
  draw: function(){
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fill();

    this._calcPosition();
    this._move();
  }
}

function setup(){
  el.width = field.w;
  el.height = field.h;
  ctx.canvas.width = innerWidth;
  ctx.canvas.height = innerHeight;
}

function draw(){
  field.draw();
  line.draw();
  leftPaddle.draw();
  rightPaddle.draw();
  score.draw();
  boll.draw();
}

window.animateFrame = (function(){
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
    function(){
      return window.setInterval(draw, 1000 / 60);
    }
    )
  })();

function main(){
  animateFrame(main);
  draw();
}

setup();
main();

el.addEventListener("mousemove", function(e) {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
})
