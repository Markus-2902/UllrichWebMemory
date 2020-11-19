for (let index = 1; index < 17; index++) {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = index;

    document.getElementById('card-deck').appendChild(div);
}

let c = document.querySelectorAll(".card");

for (const i of c) {
    i.addEventListener("click",change)
}


function change() {
    this.classList.toggle('flipped')
}