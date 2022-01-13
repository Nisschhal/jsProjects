let countEl = document.querySelector("#count-el")
let saveEl = document.querySelector("#btn-save")
let infoEl = document.querySelector("#count-info")

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    infoEl.textContent += count + "-"
    countZero();

}


function reset() {
    countZero();
    infoEl.textContent = "Today's Count:"
}

function countZero() {
    count = 0;
    countEl.textContent = 0;
}