function GameLogic() {
    this.checkNeighbors = function(row, col, cell, side) {
        var redCount = 0, blueCount = 0;
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if ((i > 0 && j > 0) && (i <= side && j <= side) && !(i == row & j == col)) {
                    var neighbor = document.getElementById('row-' + i + '-col-' + j);
                    if (neighbor.classList[1] == 'blue') {
                        blueCount++;
                    }
                    if (neighbor.classList[1] == 'red') {
                        redCount++;
                    }
                }
            }
        }
        return [blueCount, redCount];
    }

    
}

//nested for loop for each cell to analyze its neighbors according to the ids.  
//Analyzes each cell's neighbors to set title of cell div.  
//include a rule for how color of new cells should be determined.
//Then use a switch function to change the classes of each cell which CSS can use to alter colors. (maybe goes into gameplay file)
