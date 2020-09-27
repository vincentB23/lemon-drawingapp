var container = document.getElementById("container");
var colorpicker = document.getElementById("colorpicker");

document.addEventListener('contextmenu', event => event.preventDefault());
colorpicker.addEventListener("mouseleave", hideColorPicker);
container.addEventListener("mousedown", event => {
    if (event.button == 2) {
        showColorPicker(event);
    }
})

var currentColor = "red";
var cellWidthWithBorder = (container.offsetWidth/100);
var cellWidthWithoutBorder = cellWidthWithBorder - 2;
var numberOfRows = Math.floor(container.offsetHeight/cellWidthWithBorder);
var activeDraw = false;

for(i=1; i<=100; i++) {
    for(j=1; j<=numberOfRows; j++) {
        var element = document.createElement("DIV");
        let id = (i * 100) + j - 100;
        element.addEventListener("mousedown", event => {
            if(event.button == 0) {
                onCellClickLeftMouse(id);
            }
        });
        element.addEventListener("mouseover", function(){ onCellMouseOver(id);});
        element.addEventListener("mouseup", function(){ onCellMouseUp(id);});
        element.id = id;
        element.style.cssText = `-webkit-user-drag:none;-webkit-user-select:none;-webkit-app-region:no-dragwidth:${cellWidthWithoutBorder}px;height:${cellWidthWithoutBorder}px;background-color:white;border-style:solid;border-color:lightgrey;border-width:1px;grid-column:${i};grid-row:${j}`
        container.appendChild(element);
    }
}

function onCellMouseUp(id) {
    activeDraw = false;
}

function onCellMouseOver(id) {
    if (activeDraw) {
        let element = document.getElementById(id);
        draw(element);
    }
}

function onCellClickLeftMouse(id) {
    let element = document.getElementById(id);
    if (element.style.backgroundColor == "white") {
        activeDraw = true;
        draw(element);
    } else {
        element.style.backgroundColor = "white";
    }
}

function draw(element) {
    if (element.style.backgroundColor == "white") {
        element.style.backgroundColor = currentColor;
    }
}

function changeActiveColor(element) {
    oldSelected = document.getElementById(currentColor);
    oldSelected.classList.remove("selected");
    let id = element.id;
    currentColor = id;
    element.className += " selected";
    hideColorPicker();
}

function hideColorPicker() {
    colorpicker.classList.remove("colorpickerloaded");
}

function showColorPicker(event) {
    colorpicker.classList.add('notransition');
    colorpicker.style.left = `${event.clientX}px`;
    colorpicker.style.top = `${event.clientY}px`;
    colorpicker.offsetHeight;
    colorpicker.classList.remove('notransition');

    colorpicker.className += " colorpickerloaded";
}