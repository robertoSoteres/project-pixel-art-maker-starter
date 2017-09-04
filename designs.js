// Select color input
// Select size input
document.getElementById('send').addEventListener('click', function(){
    makeGrid();
    event.preventDefault();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
    document.getElementById('pixel_canvas').innerHTML = '';
    var width = document.getElementById('input_width').value;
    var height = document.getElementById('input_height').value;
    for(var i =0; i<width; i++){
        var row = document.createElement('tr');
        for(var j=0; j<height; j++){
            var col = document.createElement('td');
            row.appendChild(col);
            col.style.borderColor = document.getElementById("colorPicker").value;
        }
        document.getElementById('pixel_canvas').appendChild(row);    
    }
    
}
