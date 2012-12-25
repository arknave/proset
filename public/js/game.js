Game = function(){
  this.d = new Deck();
  this.view = new Array(7);
  this.set = new Array(7);
  for(var i=0;i<7;i++){
    this.view[i] = {'card': new VisCard($("#card"+i)[0]), 'num': d.draw()};
    this.view[i]['card'].draw();
    this.set[i] = false;
  }
}

g = new Game();

