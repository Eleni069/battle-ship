var rows = 10
var cols = 10
var board1 = document.getElementById('board1')
var board2 = document.getElementById('board2')
var q = 'A'
for (var i = 1; i <= cols; i++) {
    var letter1 = document.createElement('spam')

    letter1.classList.add('div1')
    letter1.innerText= q
    console.log(letter1)
    board1.appendChild(letter1)
    q = String.fromCharCode(q.charCodeAt() + 1)
}
board1.appendChild(document.createElement('br'))
for (var i = 1; i <= cols; i++) {
    var letter = document.createElement('span')
        letter.innerText = i
        console.log(letter)
        board1.appendChild(letter)
	for (j = 1; j <= rows; j++) {
        var square = document.createElement('div')
        board1.appendChild(square)

        // board2.appendChild(square)
    }
        board1.appendChild(document.createElement('br'))
}

var box = document.getElementsByClassName(' battleship cruiser destroyer submarine')

function allowDrop(ev) {
    ev.preventDefault()
  }

  function drag(ev) {
    ev.dataTransfer.setData('div', ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('div');
    ev.target.appendChild(document.getElementById(data));
  }
