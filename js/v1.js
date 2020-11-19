for (let index = 1; index < 17; index++) {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = index;
    div.addEventListener("click",change)
    document.getElementById('card-deck').appendChild(div);
}

let c = document.querySelectorAll(".card");



function change() {
    this.classList.toggle('flipped')
}