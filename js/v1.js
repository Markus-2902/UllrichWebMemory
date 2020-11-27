/*
1) Leeres Array zum Speichern der aufgedeckten Karten
2) Karten richtig erzeugen (type) [1,1,2,2,3,3,4,4....8,8]
3) Karten mischen (shuffle)
4) Karten zum Deck hinzugüfügen
5) Klick Eventhandler
6) Kartenlogik:
    6.1) prüfen wie viele Karten bereits aufgedeckt sind? (0,1,2)
    6.2) wenn weniger als 2 -> aufdecken
    6.3) Erkenne ob zwei gleiche Karten
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken



*) Erkennen ob zwei gleiche Karten aufgedeckt wurden
*/


/**let flippedCards = 0;

if (flippedcard == 2) {
    (document.getElementsByClassName("flipped")).classList.toggle("flipped");
}**/

/*let FlippedClassen = [];
let InhaltClassen = [];
let c = HowMuchCards/2;*/
/**for (let index = 0; index < c; index++) {
    let vorlage = 'flipped';
    let vorlage2 = 'Type'
    let classenname = vorlage+index;
    let classenname2 = vorlage+index;
    FlippedClassen.push(classenname);
    FlippedClassen.push(classenname);
    InhaltClassen.push(classenname2);
    InhaltClassen.push(classenname2);
}**/
/*console.log(Math.floor(Math.random() * 8) + 1  );
for (let index = 0; index < HowMuchCards; index++) {
    let verteilungsnummer = Math.floor(Math.random() * 8) + 1;
      
}*/
let HowMuchCards = 16;
let openCards = [];
let cardTypes=[];
for (let index = 0; index < HowMuchCards/2; index++) {
    cardTypes.push(index+1);
    cardTypes.push(index+1);
}
cardTypes = shuffle(cardTypes);
//Todo1: Array erzeugen mit durgemischent Karten (16 Karten, 8 typen(1-8))
//[1,8,4,2,3,4,5,5......8,1]
/**let nichtdurchgemischteKarten = [];
for (let index = 1; index < (HowMuchCards/2)+1; index++) {
    nichtdurchgemischteKarten.push(index);

    nichtdurchgemischteKarten.push(index);
}
let durchgemischteKarten = []
for (let index = 0; index < nichtdurchgemischteKarten.length; index++) {
    let cards = Math.floor(Math.random() * HowMuchCards);
    //durchgemischteKarten.push(nichtdurchgemischteKarten[card])
    console.log(cards);
}**/

for (let index = 0; index < HowMuchCards; index++) {
    const div = document.createElement('div');
    div.className = 'card';
    div.type = cardTypes[index];
    div.innerHTML = cardTypes[index];
    div.addEventListener("click",flipp);
    document.getElementById('card-deck').appendChild(div);
}

let c = document.querySelectorAll(".card");



/**function change() {
    this.classList.toggle('flipped')
    if (this.classList.contains('flipped')) {
        this.innerHTML = this.type;
    }
    else{
    }
}**/
function flipp(event){
    //TODO
    openCard(this);
}

function openCard(c){
    if(openCards.length<2){
        c.classList.toggle('flipped');
        openCards.push(c);
        if (openCards.length == 2) {
            if (openCards[0].type == openCards[1].type) {
                alert("gleich");
                setTimeout(()=>{
                    openCards.pop().classList.toggle('found')
                    openCards.pop().classList.toggle('found')
                },1000);
                
            }
            else{
                alert("nicht gleich")
                setTimeout(()=>{
                    openCards.pop().classList.toggle('flipped')
                    openCards.pop().classList.toggle('flipped')
                },1000);
            }
        }
    }
}


function shuffle(arra1){
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random()*ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp
    }
    return arra1;
}