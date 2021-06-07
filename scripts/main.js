const container = document.querySelector("#container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => createGrid(askUser()))

function askUser() {
    
    numberOfCells = parseInt(prompt("How much squares do you want per side? Max: 100"))
    
    while (numberOfCells > 100) {
        alert("That's a lot. Try again.")
        numberOfCells = parseInt(prompt("How much squares do you want per side? Max: 100"))
    }

    return numberOfCells;
}

function createGrid(numberOfCells = 16) {
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${numberOfCells}, 1fr)`
    for (let i = 1; i <= numberOfCells**2 ; i++) {
        const div = document.createElement("div");
        div.classList.add("cells");
        div.setAttribute("id", `cell-${i}`);
        container.appendChild(div);
    }
    let cells = document.querySelectorAll(".cells");
    cells.forEach(cell => cell.addEventListener("mouseover", changeColor));

}

function changeColor (e) {
    this.classList.add("mouse-over");
}

createGrid();
