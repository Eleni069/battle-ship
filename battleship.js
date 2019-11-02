/*var board1, board2, board1s, board2s;

board1 = board2 = board1s = board2s = new Array(10);
function fillBoard(board){
  for(var i = 0; i < 10; i++){
    board[i] = new Array(10);

    for(var j = 0; j < 10; j++){
      board[i][j] = false;
    }
  }
}

var boards = [board1, board2, board1s, board2s];

for(var i = 0; i < 4; i++){
  fillBoard(boards[i]);
}*/

var players = {
  "human":{
    "ships":{
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 3,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 2,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  },
  "cpu":{
    "ships": {
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 2,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 1,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  }
}


 /* var rotation;
  var location;
  var board;

  function detectClick(x, y){
    rotation = window.confirm("Ship: " + ship.name + ". Vertical (OK) or Horizontal (Cancel)?");
    board = board1;

    console.log(x + " AND " + y);

    var isTaken = false;
    // check if the spot is already there
    for(var i = y; i < (ship.length + y); i++){
      if(board[i][x] === true){
        isTaken = true;
      }
    }

    if(isTaken === true){
      window.alert("This spot is already taken. Please Try Again");
      placeShip(ship, player);
    }else if(isTaken === false){
      if(rotation === true){
        for(var i = y; i < (ship.length + y); i++){
          board[i][x] = true;
        }
      }else if(rotation === false){
        for(var i = x; i < (ship.length + x); i++){
          board[y][i] = true;
        }
      }
    }

    ship.isPlaced = true;
  }

  if(player === 'h'){
    // LOGIC TO MAKE HTML GRID clickable
    var css = '#board1 td:hover{ background-color: grey }';
    var style = document.createElement('style');
    style.innerHTML = css;
    document.getElementById('body').appendChild(style);

    for(var i = 0; i < htmlX.length; i++){
      for(var j = 0; j < 10; j++){
        htmlX[i].children[j].onclick = function(){
          detectClick(i, j);
        }
      }
    }

    // LOGIC TO FIND CLICK
  }else if(player === 'c'){


    board = board2;
  }


}

function placeAllShips(player){
  var playerIs;

  if(player === players.human.ships){
    playerIs = 'h';
  }else{
    playerIs = 'c';
  }

  placeShip(player.carrier, playerIs);
  placeShip(player.battleship, playerIs);
  placeShip(player.submarine, playerIs);
  placeShip(player.cruiser, playerIs);
  placeShip(player.destroyer, playerIs);

}
// Make the boards clickable!!!!!!!!!!!!!!!!!!!
var htmlX = new Array(10);

for(var i = 0; i < htmlX.length; i++){
  htmlX[i] = document.getElementById('board1').childNodes[1].children[i];
}
// TODO x locations are defined, but y locations are dervied from htmlX.
// for example, htmlX[0].chilren[0] is the first column in the first box, AKA (1,1);






// place the ships!!!
var hS = players.human.ships;
var cS = players.cpu.ships;*/

var battleship = document.getElementById('Battleship')
var submarine = document.getElementById('Submarine')
var cruiser = document.getElementById('Cruiser')
var destroyer = document.getElementById('Destroyer')

battleship.onclick = function() {
  var length = players.human.ships.battleship.length
  vend(length)
}

submarine.onclick = function() {
  var length = players.human.ships.submarine.length
  vend(length)
}
cruiser.onclick = function() {
  var length = players.human.ships.cruiser.length
  vend(length)
}
destroyer.onclick = function() {
  var length = players.human.ships.destroyer.length
  vend(length)
}



 function vend (c) {
    var css = '#board1 td:hover{ background-color: grey }'
    var style = document.createElement('style')
    style.innerHTML = css
    document.getElementById('body').appendChild(style)


  //body.appendChild(battleshipArray)
  var a =  document.querySelectorAll('td')


   Array
    .from(a)
    .forEach(addEvent)

    function addEvent(element) {
      k = 0
      element.addEventListener('click', () => {
      k++

        console.log(element.className)
        if ( k === c) {
         console.log('finish')
         return
        }
        else {
          console.log(k)
      if (element.classList.contains('color') === true) {
        alert("occupied!")
        k--
      }
      else {
        element.classList.add('color')

      }
    }
      })
    }
 }







