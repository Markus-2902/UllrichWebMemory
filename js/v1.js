/**let flippedCards = 0;

if (flippedcard == 2) {
    (document.getElementsByClassName("flipped")).classList.toggle("flipped");
}**/
let HowMuchCards = 16;

let classen = [];
let c = HowMuchCards/2;
for (let index = 0; index < c; index++) {
    let vorlage = 'flipped';
    let classenname = vorlage+index;
    classen.push(classenname);
    classen.push(classenname);
}
console.log(Math.floor(Math.random() * 6) + 1  );
for (let index = 0; index < HowMuchCards; index++) {
    let verteilungsnummer = Math.floor(Math.random() * 6) + 1;
      
}

for (let index = 0; index < HowMuchCards; index++) {
    const div = document.createElement('div');
    div.className = 'card';

    for (let index = 0; index < HowMuchCards; index++) {
        
        
    }
    //div.innerHTML = index%2 + 1;
    //div.innerHTML = index + 1;
    div.innerHTML = index+1;
    div.addEventListener("click",change);
    document.getElementById('card-deck').appendChild(div);
}

let c = document.querySelectorAll(".card");



function change() {
    this.classList.toggle('flipped')
    if (this.classList.contains('flipped')) {
        this.innerHTML = this.type;
    }
    else{
    }
} 
/**function change(event){
    if (!this.classList.contains('found')) {
        openCard(this);
    }
}**/

function openCard(c){
    alert(c.innerHTML);
}
