//Hinzufügen der Karten
let HowMuchCards = 16;
let openCards = [];
let cardTypes=[];
for (let index = 0; index < HowMuchCards/2; index++) {
    cardTypes.push(index+1);
    cardTypes.push(index+1);
}
cardTypes = shuffle(cardTypes);

for (let index = 0; index < HowMuchCards; index++) {
    const div1 = document.createElement('div');
    div1.className = 'card';
    div1.type = cardTypes[index];
    div1.addEventListener("click",flipp);
    document.getElementById('card-deck').appendChild(div);
}
let c = document.querySelectorAll(".card");

//Karten Umdrehen
function flipp(event){
    openCard(this);
}
let foundCard = [];
let score = 0;
function openCard(c){
    if(openCards.length<2){
        c.classList.toggle('flipped');
        c.innerHTML = c.type;
        openCards.push(c);
        if (openCards.length == 2) {
            if (openCards[0].type == openCards[1].type) {
                //alert("gleich");
                foundCard.push(openCards[0]);
                foundCard.push(openCards[1]);
                setTimeout(()=>{
                    
                    openCards.pop().classList.toggle('found')
                    openCards.pop().classList.toggle('found')
                    document.getElementById("cardscore").innerHTML = `Score: ${foundCard.length/2}`;
                },1000);
                
            }
            else{
                //alert("nicht gleich")
                setTimeout(()=>{
                    openCards[0].innerHTML= "";
                    openCards[1].innerHTML= "";
                    openCards.pop().classList.toggle('flipped');
                    openCards.pop().classList.toggle('flipped');
                },1000);
            }
        }
    }
    
    
}

//Kartenindex Mischen
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

//karten


//stopuhr
/**
let counterrunning = false;
let counter = 0;
let hours = 0;
let minutes = 0;
let seconds = 00;
function myCounter() {
    if (hours == 23 && minutes == 59 && seconds==59){
        seconds = 0;
        minutes = 0;
        hours = 0;
    }
    else if (seconds < 60) {
        seconds = ++counter;
    }
    if (seconds == 59) {
        minutes = ++counter;
        seconds = 0;
    }
    if (minutes == 59 && seconds == 59) {
        hours = ++counter;
        minutes = 0;
        seconds = 0;
    }
    
    document.getElementById("demo").innerHTML = `${hours}:${minutes}:${seconds}`;

}

function stopCounter(){
    clearInterval(myTimer);
    document.getElementById("demo").innerHTML = 0;
    counter = 0;
    counterrunning = false;
}**/
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
}
**/
