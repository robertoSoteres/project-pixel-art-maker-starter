const sizePicker = document.querySelector('#sizePicker');
const table = document.getElementById("pixel_canvas");
sizePicker.addEventListener('submit', function () {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    deleteTable();
    var width = document.getElementById('input_width').value;
    var height = document.getElementById('input_height').value;
    for (let i = 0; i < width; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < height; j++) {
            const cell = row.insertCell(j);
        }
    }
    associateCellEvents();
}
const associateCellEvents = function () {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].addEventListener('click', function () {
                changeColor(this);
            });
        }
    }
};
const changeColor = function (cell) {
    const colour = document.getElementById("colorPicker").value;
    cell.style.backgroundColor = colour;
};
const deleteTable = function () {
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}