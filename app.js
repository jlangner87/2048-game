// game variables
const boardGrid = document.querySelector('.grid')
let squares = []

const score = document.querySelector('.score-container')
const resetButton = document.querySelector('.new-game')
const undoButton = document.querySelector('.undo')

// game logic
const drawBoard = () => {
  for (let i = 0; i < 16; i++) {
    square = document.createElement('div')
    square.innerHTML = ''
    boardGrid.appendChild(square)
    squares.push(square)
  }
}
drawBoard()

const populateBoard = () => {
  let randomPosition = Math.floor(Math.random() * squares.length)
  if (squares[randomPosition].innerHTML == '') {
    squares[randomPosition].innerHTML = 2
  } else {
    populateBoard()
  }
}
populateBoard()
populateBoard()

//Game Control & Board Change
const shiftRight = () => {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let squareOne = Number(squares[i].innerHTML)
      let squareTwo = Number(squares[i + 1].innerHTML)
      let squareThree = Number(squares[i + 2].innerHTML)
      let squareFour = Number(squares[i + 3].innerHTML)

      // console.log(squareOne)
      // console.log(squareTwo)
      // console.log(squareThree)
      // console.log(squareFour)

      let rows = [squareOne, squareTwo, squareThree, squareFour]

      console.log(rows)

      // let filledSquares = rows.filter(filterNums)
      // let emptySquares = 4 - filterNums.length
      // let fillEmpty = Array(emptySquares).fill('')
      // let newArray = fillEmpty.concat(filledSquares)

      // squares[i].innerHTML = newArray[0]
      // squares[i + 1].innerHTML = newArray[1]
      // squares[i + 2].innerHTML = newArray[2]
      // squares[i + 3].innerHTML = newArray[3]

      // console.log(newArray)
    }
  }
}
shiftRight()

// const shiftLeft = () => {}
// const shiftDown = () => {}
// const shiftUp = () => {}

// event listeners
resetButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to reset your game?') === true) {
    location.reload()
  }
})
