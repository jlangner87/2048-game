document.addEventListener('DOMContentLoaded', () => {
  // game variables
  const boardGrid = document.querySelector('.grid')
  let squares = []

  const score = document.querySelector('.score-container')
  const resetButton = document.querySelector('.new-game')
  const undoButton = document.querySelector('.undo')

  const timer = document.querySelector('.time')
  const moveCounter = document.querySelector('.moves')

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

  const shiftRight = () => {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let squareOne = squares[i].innerHTML
        let squareTwo = squares[i + 1].innerHTML
        let squareThree = squares[i + 2].innerHTML
        let squareFour = squares[i + 3].innerHTML
        let rows = [
          parseInt(squareOne),
          parseInt(squareTwo),
          parseInt(squareThree),
          parseInt(squareFour)
        ]
        // let filterNums = (num) => {
        //   if (typeof num === 'number') {
        //     return num
        //   }
        // }
        // let filledSquares = rows.filter(filterNums)

        // let emptySquares = 4 - filterNums.length
        // let fillEmpty = Array(emptySquares).fill(filledSquares)
        // let newArray = fillEmpty.concat(filledSquares)

        let filteredRow = rows.filter((num) => num)
        let missing = 4 - filteredRow.length
        let zeros = Array(missing).fill('')
        let newRow = zeros.concat(filteredRow)

        console.log(newRow)
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
})
