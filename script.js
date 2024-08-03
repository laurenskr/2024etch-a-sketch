const gridSize = prompt("How big should the grid be?");
let container = document.querySelector("#container");

buildGrid(gridSize);

function buildGrid(gridSize, color="blue") {
    container.innerHTML="";
    for (let i = 1; i <= (gridSize ** 2); i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", `${i}`);
        cell.classList.add("cell");
        // cell.style.width = "100px";
        cell.style.color = "pink";
        cell.style.width = `${100/gridSize}%`;
        container.appendChild(cell);
        let cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseover", () => {cell.style.backgroundColor = color;})
        })
    }
}



// cells.forEach((cell) => {
//     cell.addEventListener("mouseover", () => {cell.style.backgroundColor = "blue";})
// });
const resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", function() {buildGrid(gridSize)})
const randbtn = document.querySelector("#random")
randbtn.addEventListener("click", function() {buildGrid(gridSize, `#${Math.floor(Math.random()*16777215).toString(16)}`)})

