Deck = function(){
  this.deck = [];
  for(i=0;i<63;i++){
    this.deck[i] = i;   
  }
  //shuffle the deck
  var tmp, c, top = 63;

  if(top) while(--top){
    c = Math.floor(Math.random() * (top+1));
    tmp = this.deck[c];
    this.deck[c] = this.deck[top];
    this.deck[top] = tmp;
  }
}

Deck.prototype.draw = function(){
  return this.deck.shift();
}
