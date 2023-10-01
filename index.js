// Code your solutions in this file
for (let age = 30; age <40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
  }

  return gifts;
}

wrapGifts(gifts);


const nam = ["Ada", "Brendan", "Ali"];

function writeCards(dom, evName) {
    for (i=0; i<dom.length; i++) {
        
        dom[i] = `Thank you, ${dom[i]}, for the wonderful birthday gift!`;
        dom[i++];
    }

    return (dom, evName);
}
writeCards(nam,"Birthday");



function countDown(dad) {
    while (dad>0){
        console.log(dad);
        dad--;
    }
}
countDown(10);
