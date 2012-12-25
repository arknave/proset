function init(){
  cvas = document.getElementById('canvas');
  cvas.width = cvas.height = 600;
  ctx = cvas.getContext('2d');
  d = new Deck();
  view = new Array(7),
    set = new Array(7);
  for(var i=0;i<7;i+=1){
    view[i] = d.draw()+1;
    set[i] = false;
  }
  cardw = 100;
  cardh = 150;
  dims = [];
  dims[0] = {'x': cvas.width/2-cardw/2-100, 'y': cvas.height/2-cardh/2-200};
  dims[1] = {'x': cvas.width/2-cardw/2+100, 'y': cvas.height/2-cardh/2-200};
  dims[2] = {'x': cvas.width/2-cardw/2-200, 'y': cvas.height/2-cardh/2};
  dims[3] = {'x': cvas.width/2-cardw/2, 'y': cvas.height/2-cardh/2};
  dims[4] = {'x': cvas.width/2-cardw/2+200, 'y': cvas.height/2-cardh/2};
  dims[5] = {'x': cvas.width/2-cardw/2-100, 'y': cvas.height/2-cardh/2+200};
  dims[6] = {'x': cvas.width/2-cardw/2+100, 'y': cvas.height/2-cardh/2+200};
  draw();
  //drawgrid(50);
}

function draw(){
  ctx.clearRect(0, 0, cvas.width, cvas.height);
  for(var i=0;i<7;i++){
    drawcard(dims[i]['x'], dims[i]['y'], view[i]);
  }
}

function drawcard(x, y, num){
  var map = {};
  map[1] = {'x': x, 'y': y, 'color': "#cc0000"};
  map[2] = {'x': x+cardw/2, 'y': y, 'color': "#f57900"};
  map[4] = {'x': x, 'y': y+cardh/3, 'color': "#edd400"};
  map[8] = {'x': x+cardw/2, 'y': y+cardh/3, 'color': "#73d216"};
  map[16] = {'x': x, 'y': y+2*cardh/3, 'color': "#3465a4"};
  map[32] = {'x': x+cardw/2, 'y': y+2*cardh/3, 'color': "#75507b"};
  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, cardw, cardh);
  for(i=1;i<64;i<<=1){
    if((num & i)!==0){
      drawcolor(map[i]['x'], map[i]['y'], map[i]['color']); 
    }
  }
}

function drawcolor(x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cardw/2, cardh/3);
}

function drawgrid(gap){
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for(i=0;i<cvas.width;i+=gap){
    ctx.moveTo(0, i);
    ctx.lineTo(cvas.width, i);
    ctx.moveTo(i, 0);
    ctx.lineTo(i, cvas.height);
  }
  ctx.stroke();
}

window.onmousedown = function(e) {
  var xin = e.clientX;
  var yin = e.clientY;
  for(var i=0;i<7;i++){
    if(xin>dims[i]['x']&&xin<dims[i]['x']+cardw&&yin>dims[i]['y']+50&&yin<dims[i]['y']+cardh+50){
      set[i] = !set[i];
    }
  }
}

$("#submit").click(function(){
  var res = 0;
  for(var i=0;i<7;i++){
    if(set[i]) { res = res ^ view[i]; }
  }
  if(res==0){
    alert("You win!");
  }
  else{
    alert("Sorry, you still have "+res+" left");
  }
});

init();
