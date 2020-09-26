var container = document.getElementById("container");
var cellWidthWithBorder = (container.offsetWidth/100);
var cellWidthWithoutBorder = cellWidthWithBorder - 2;
console.log(cellWidthWithBorder);
console.log(cellWidthWithoutBorder);

var numberOfRows = Math.floor(container.offsetHeight/cellWidthWithBorder);
console.log(numberOfRows)

for(i=1; i<=100; i++) {
    for(j=1; j<=numberOfRows; j++) {
        var element = document.createElement("DIV");
        let id = (i * 100) + j - 100;
        element.addEventListener("click", function(){ onCellClickLeftMouse(id);});
        element.id = id;
        element.style.cssText = `width:${cellWidthWithoutBorder}px;height:${cellWidthWithoutBorder}px;border-style:solid;border-color:lightgrey;border-width:1px;grid-column:${i};grid-row:${j}`
        container.appendChild(element);
    }
}

function onCellClickLeftMouse(id) {
    let element = document.getElementById(id);
    if (element.style.backgroundColor == "red") {
        element.style.backgroundColor = "white";
    } else {
        element.style.backgroundColor = "red";
    }
}