var boardSize = 960;

var body = document.querySelector("body");

var buttonClear = document.createElement("button");
buttonClear.textContent = "Clear board";
buttonClear.addEventListener("click", clearBoard);
body.appendChild(buttonClear);

function createGrid(size = 16) {
	var board = document.createElement("div");
	board.setAttribute("id", "board");
	var size = size;
	if (size == null) {
		size = 16;
	}

	for (var i = 0; i < size; i++) {
		var rowDiv = document.createElement("div");
		rowDiv.classList.add("row");

		for (var j = 0; j < size; j++) {
			var div = document.createElement("div");
			div.style.height = boardSize / size + "px";
			div.style.width = boardSize / size + "px";
			div.addEventListener("mouseover", onMouseOver);
			rowDiv.appendChild(div);
		}
		board.appendChild(rowDiv);
	}
	body.appendChild(board);
}

function clearBoard() {
	document.querySelector("#board").remove();
	createGrid(prompt("Size of the grid?"));
}

function generateColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onMouseOver(e) {
	if (e.target.style.backgroundColor == "") {
		e.target.style.backgroundColor = generateColor();
	}
	else {
		
	}
}

createGrid();