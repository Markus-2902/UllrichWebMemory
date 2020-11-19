for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

let c = document.querySelectorAll(".card");

for (const i of c) {
    i.addEventListener("click",change)
}


function change() {
    this.classList.toggle('flipped')
}