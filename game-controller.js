function gameController() {
    var gameLogic = new GameLogic();
    var computer = new Computer();

    var iterate = function () {
        var side = 5;

        var template = '';
        for (var row = 1; row <= side; row++) {
            for (var col = 1; col <= side; col++) {
                debugger;
                var id = 'row-' + row + '-col-' + col;
                var cell = document.getElementById(id);
                var neighborColors = gameLogic.checkNeighbors(row, col, cell, side);
                console.log(id + ": " + neighborColors[0] + " cells");
                var blue = neighborColors[0];
                var red = neighborColors[1];
                var oldClass = cell.className.split(' ').join('-');
                console.log(oldClass + " " + typeof(oldClass));
                var newClass = 'square';
                switch (blue + red) {
                    case 0:
                    case 1:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        break;
                    case 2:
                        newClass = oldClass.split('-').join(' ');
                        break;
                    case 3:
                        if (oldClass === 'square-blue') {
                            newClass = 'square blue';
                        } else if (oldClass === 'square-red') {
                            newClass = 'square red';
                        } else if (oldClass === 'square') {
                            if (blue > red) {
                                newClass = 'square blue';
                            } else {
                                newClass = 'square red';
                            }
                        }
                        break;
                }

                template += `
                    <div class="${newClass}" id="${id}"></div>
                `
            }
        }
        $('.game-grid').html(template)
    }



    $(".game-grid").on("mousedown", ".square", function () {
        if (event.which == 1) {
            $(this).removeClass('red');
            $(this).toggleClass('blue');
        } else if (event.which == 3) {
            $(this).removeClass('blue');
            $(this).toggleClass('red');
        }
    })

    $('.iterate').on('click', function () {
        iterate();
    })



}

gameController();


//event listeners: first click to make cell grow, second click to delete opponent's cell

//for 1 player: use setTimeout() to slow down and animate computer's actions.