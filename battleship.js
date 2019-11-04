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


var css = '#board1 td:hover{  background-color: grey }'
    var style = document.createElement('style')
    style.innerHTML = css
    document.getElementById('body').appendChild(style)


  var battleship = document.getElementById('Battleship')
  var submarine = document.getElementById('Submarine')
  var cruiser = document.getElementById('Cruiser')
  var destroyer = document.getElementById('Destroyer')

var battleshipnr = 0
var submarinenr = 0
var cruisernr = 0
var destroyernr = 0
var ke

battleship.onclick = function() {

  if (battleshipnr === 1 ) {
    alert('you can not put more than one battleship')
  }
  else {
  var length = players.human.ships.battleship.length
  vend(length)
  battleshipnr++
  }
}


submarine.onclick = function() {

  if ( submarinenr === 2) {
    alert('you can not put more than two submarine')
  }
  else {
  var length = players.human.ships.submarine.length
  vend(length)
  submarinenr++
  }
}


cruiser.onclick = function() {
  var ke
  if ( cruisernr === 3) {
    alert('you can not put more than three cruiser')
  }
  else {
  var length = players.human.ships.cruiser.length
  vend(length)
  cruisernr++
  }
}


destroyer.onclick = function() {
  var ke
  if ( destroyernr === 3) {
    alert('you can not put more than four destroyer')
  }
  else {
  var length = players.human.ships.destroyer.length
  vend(length)
  destroyernr++
  }
}




 function vend(c, k = 0, nr = 0 ) {
console.log(nr)
  var approve
  //body.appendChild(battleshipArray)
  var a =  document.querySelectorAll('td')
   Array
    .from(a)
    .forEach(addEvent)

    function addEvent(element) {

     // ke = element
      element.addEventListener('click', () => {
          if ( nr === 0) {
            ke = element
            if ( confirm( " Vertical (OK) or Horizontal (Cancel)?")) {
              approve = 'vertical'
              if (ke.classList[0] === element.classList[0]) {

          k++
          console.log(k)
          if ( k > c) {
           console.log('finish')
           alert('finish with this ship')
          }
         /* else {
            if (element.classList.contains('color') === true) {
              k--
              alert('ocupied')
        }*/
        else {
          element.classList.add('color')
          ke = element
          nr++
           }

        }
      }
        else { approve = 'horizontal'

          if (ke.classList[1] === element.classList[1]) {
            k++
            if ( k > c) {
             console.log('finish')
            }
           /* else {
              if (element.classList.contains('color') === true) {
                k--
                alert('ocupied')
          }*/
          else {

            element.classList.add('color')
            ke = element
            nr++

        }
      }
    }
  }
        else {
          if ( approve === 'vertical') {
            if (ke.classList[0] === element.classList[0]) {
              k++
              if ( k > c) {
               console.log('finish')
              alert('finish with this ship')


              }
              else {
                if (element.classList.contains('color') === true) {
                  k--
                  alert('ocupied')
            }
            else {

              element.classList.add('color')

              ke = element
              nr++
            }

              }

            }
            else { alert ('Wrong square! Put it vertically.')}
          }
          else {
            if (ke.classList[1] === element.classList[1]) {
              k++
              if ( k > c) {
               console.log('finish')
               alert('finish with this ship')
              }
              else {
                if (element.classList.contains('color') === true) {
                  k--
                  alert('ocupied')
            }
            else {

              element.classList.add('color')

              ke = element
              nr++
            }

              }

            }
            else { alert ('Wrong square! Put it horizontaly.')
                event.stopPropagation()}

          }
        }
      })


    }
    }










