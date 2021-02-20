const container = document.createElement("div");
container.classList.add("grid-container");
const cont = document.getElementById("cont");
console.log(cont);

cont.appendChild(container);

for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
     
    div.classList.add("grid-item");
    container.appendChild(div);
}

const grid_items = document.querySelectorAll('.grid-item');
grid_items.forEach(item => item.addEventListener('mouseover', changeBackground));

const button = document.querySelector('#btn');
button.addEventListener('click', refresh);

function changeBackground(e) {
    this.classList.add('hovered');
}

function refresh() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }
    
    let input = prompt('Choose your grid size.');
    while (input > 100) {
        input = prompt("choose a number 100 or less.")
    }
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    for (let i = 0; i < (input * input); i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover', changeBackground);
        div.classList.add("grid-item");
        container.appendChild(div);
    }
}