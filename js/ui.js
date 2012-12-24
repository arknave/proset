function init(){
  canvw = canvh = 600;
  cvas = document.getElementById('canvas');
  ctx = cvas.getContext('2d');
  d = new Deck();
  draw();
  //drawgrid(50);
}

function draw(){
  cardw = 100;
  cardh = 150;
  ctx.clearRect(0, 0, canvw, canvh)
  drawcard(canvw/2-cardw/2, canvh/2-cardh/2);
  drawcard(canvw/2-cardw/2-200, canvh/2-cardh/2);
  drawcard(canvw/2-cardw/2+200, canvh/2-cardh/2);
  drawcard(canvw/2-cardw/2-100, canvh/2-cardh/2-200);
  drawcard(canvw/2-cardw/2+100, canvh/2-cardh/2-200);
  drawcard(canvw/2-cardw/2-100, canvh/2-cardh/2+200);
  drawcard(canvw/2-cardw/2+100, canvh/2-cardh/2+200);
}

function drawcard(x, y){
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, cardw, cardh);
}

function drawgrid(gap){
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for(i=0;i<canvw;i+=gap){
    ctx.moveTo(0, i);
    ctx.lineTo(canvw, i);
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvh);
  }
  ctx.stroke();
}

init();