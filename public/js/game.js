Game = function(){
  this.d = new Deck();
  this.view = new Array(7);
  this.set = new Array(7);
  for(var i=0;i<7;i++){
    this.view[i] = {'card': new VisCard($("#card"+i)[0]), 'num': this.d.draw()};
    this.view[i]['card'].draw(this.view[i]['num']);
    this.set[i] = false;
  }
}

g = new Game();

window.onmousedown = function(e){
  var card = parseInt(e.target.id.charAt(4)); 
  if(!isNaN(card)){ 
    $("#card"+card).toggleClass('select');
    console.log(card); 
    g.set[card] = !g.set[card]; 
  }
}


