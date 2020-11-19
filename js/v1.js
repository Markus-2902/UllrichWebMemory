/**let flippedCards = 0;

if (flippedcard == 2) {
    (document.getElementsByClassName("flipped")).classList.toggle("flipped");
}**/

for (let index = 0; index < 16; index++) {
    const div = document.createElement('div');
    div.className = 'card';

    //div.innerHTML = index%2 + 1;
    div.innerHTML = index + 1;
    div.addEventListener("click",change)
    document.getElementById('card-deck').appendChild(div);
}

let c = document.querySelectorAll(".card");



function change() {
    this.classList.toggle('flipped')
}