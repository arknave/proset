VisCard = function(canv){
  this.cvas = canv;
  this.ch = canv.height;
  this.cw = canv.width;
  this.ctx = canv.getContext('2d');
  this.map = {};
  this.map[1] = {'x': 0, 'y': 0, 'color': "#cc0000"};
  this.map[2] = {'x': this.cw/2, 'y': 0, 'color': "#f57900"};
  this.map[4] = {'x': 0, 'y': this.ch/3, 'color': "#edd400"};
  this.map[8] = {'x': this.cw/2, 'y': this.ch/3, 'color': "#73d216"};
  this.map[16] = {'x': 0, 'y': 2*this.ch/3, 'color': "#3465a4"};
  this.map[32] = {'x': this.cw/2, 'y': 2*this.ch/3, 'color': "#75507b"};
}

VisCard.prototype.draw = function(num){
  this.ctx.strokeStyle = "black";
  this.ctx.strokeRect(0, 0, this.cw, this.ch);
  for(var i=1;i<64;i<<=1){
    if((num & i)!==0){
      this.drawcolor(this.map[i]['x'], this.map[i]['y'], this.map[i]['color']); 
    }
  }
}

VisCard.prototype.drawcolor = function(x, y, color){
  this.ctx.fillStyle = color;
  this.ctx.fillRect(x, y, this.cw/2, this.ch/3);
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

$("#submit").click(function(){
  var res = 0;
  var has = false;
  for(var i=0;i<7;i++){
    if(g.set[i]) { has = true; res = res ^ g.view[i]['num']; }
  }
  if(has&&res===0){
    alert("You win!");
  }
  else{
    alert("Sorry, you still have "+res+" left");
  }
});

$('#newgame').click(function(){
  window.location.reload();
});
