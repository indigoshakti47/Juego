const cards = document.querySelectorAll('div.memory-card1, div.memory-card2, div.memory-card3, div.memory-card4, div.memory-card5, div.memory-card6, div.memory-card7,div.memory-card8,div.memory-card9,div.memory-card10,div.memory-card11, div.memory-card12, div.memory-card13, div.memory-card14, div.memory-card15, div.memory-card16, div.memory-card17');
var cardM;
var actual = 0;
$('#btn').click(clickA);//Genera un click a la casilla que va a estar la ficha


function flipCard() {
  this.classList.toggle('flip'); //agrega flip al html haciendo actuar al css
}





function clickA() {
  var nuevo=0;
  var a = Math.floor((Math.random() * 6) + 1);

  
  actual += a;//fiehifh
  
  console.log(a);
  if(cardM){
    cardM.click();
  }
  
  if(actual>=17){
    actual = 17;
  }
  cards[actual-1].click();
  cardM = cards[actual-1];
  console.log(cardM);

  if(actual<17){
    document.getElementById("d").innerHTML=a;
  }else{
    document.getElementById("d").innerHTML="Ganó";
  }
  
}

cards.forEach(card => card.addEventListener('click', flipCard));

