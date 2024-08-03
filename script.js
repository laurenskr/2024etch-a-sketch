const gridSize = prompt("How big should the grid be?");

let container = document.querySelector("#container");

for (let i = 1; i <= (gridSize ** 2); i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", `${i}`);
    cell.classList.add("cell");
    // cell.style.width = "100px";
    cell.style.color = "pink";
    cell.style.width = `${100/gridSize}%`;
    container.appendChild(cell);
}