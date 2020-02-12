const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
let parentRow, newRow, newCol, cells;

sizePicker.addEventListener('submit', makeGrid);

function makeGrid(){
    event.preventDefault();             // to prevent the table to disappear

    if (table.hasChildNodes()){         /* checks if table has childs, 
                                        and if so sets the innerHTML of table to blank.*/
        table.innerHTML = '';
    }

    let rows =  inputHeight.value;// gets value of input height (rows)
    let cols = inputWidth.value;  // gets value of input width (colums)
    
    for (let i = 0; i < rows; i++){        // nested for-loops to create table (rows and cols)
        newRow = document.createElement('tr');
        table.appendChild(newRow);
        
        for (let k = 0; k < cols; k++){
            newCol = document.createElement('td');
            parentRow = table.lastChild;
            parentRow.appendChild(newCol);
        }
    }

    cells = document.getElementsByTagName('td'); // get all cells ('td')
    
    for (let m = 0; m < cells.length; m++){     // for loop to change cell's color based on chosen color
        cells[m].addEventListener('click', function paintCells(event){
            let color = colorPicker.value;
            event.target.style.backgroundColor = color;
        });
    }
}