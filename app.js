// GLOBAL VARIABLES & FUNCTIONS
const boardGrid = document.querySelector('.grid')
let squares = []
let totalMoves = 0

const score = document.querySelector('.score-container')
const resetButton = document.querySelector('.new-game')
const undoButton = document.querySelector('.undo')
const moveCounter = document.querySelector('.moves')

const drawBoard = () => {
  for (let i = 0; i < 16; i++) {
    square = document.createElement('div')
    square.innerHTML = ''
    boardGrid.appendChild(square)
    squares.push(square)
  }
}
drawBoard()

const FirstPopulateBoard = () => {
  let randomPosition = Math.floor(Math.random() * 16)
  squares[randomPosition].innerHTML = 2
}
FirstPopulateBoard()
FirstPopulateBoard()

const populateBoard = () => {
  let randomPosition = Math.floor(Math.random() * 16)
  if (squares[randomPosition].innerHTML === '') {
    squares[randomPosition].innerHTML = 2
  } else {
    populateBoard()
  }
}

//GAME CONTROL
const shiftUp = () => {
  populateBoard()
  totalMoves += 1
  increaseScore = totalMoves * 2
  document.querySelector('.moves').innerHTML = `Moves: ${totalMoves}`
  document.querySelector(
    '.score-container'
  ).innerHTML = `Score: ${increaseScore}`
  const checkLosingCondition = () => {
    window.onerror = () => {
      alert('Sorry, you have lost!')
    }
  }
  checkLosingCondition()
  for (let i = 0; i < 16; i++) {
    if (i % 48 === 0) {
      let squareOne = Number(squares[i].innerHTML)
      let squareTwo = Number(squares[i + 4].innerHTML)
      let squareThree = Number(squares[i + 8].innerHTML)
      let squareFour = Number(squares[i + 12].innerHTML)
      let squareFive = Number(squares[i + 1].innerHTML)
      let squareSix = Number(squares[i + 5].innerHTML)
      let squareSeven = Number(squares[i + 9].innerHTML)
      let squareEight = Number(squares[i + 13].innerHTML)
      let squareNine = Number(squares[i + 2].innerHTML)
      let squareTen = Number(squares[i + 6].innerHTML)
      let squareEleven = Number(squares[i + 10].innerHTML)
      let squareTwelve = Number(squares[i + 14].innerHTML)
      let squareThirteen = Number(squares[i + 3].innerHTML)
      let squareFourteen = Number(squares[i + 7].innerHTML)
      let squareFifteen = Number(squares[i + 11].innerHTML)
      let squareSixteen = Number(squares[i + 15].innerHTML)
      let columnOne = [squareOne, squareTwo, squareThree, squareFour]
      let columnTwo = [squareFive, squareSix, squareSeven, squareEight]
      let columnThree = [squareNine, squareTen, squareEleven, squareTwelve]
      let columnFour = [
        squareThirteen,
        squareFourteen,
        squareFifteen,
        squareSixteen
      ]
      let allColumns = [columnOne, columnTwo, columnThree, columnFour]
      allColumns.forEach((elemnt) => {
        let filledSquares = elemnt.filter((digit) => {
          return digit >= 1
        })
        let empty = 4 - filledSquares.length
        let emptyArray = Array(empty).fill('')
        let newArray = emptyArray.concat(filledSquares)
        const checkWinningCondition = () => {
          if (newArray.includes(2048, 0)) {
            alert('Congratulations! You win!')
          }
        }
        checkWinningCondition()
      })
    }
  }
}

const shiftDown = () => {
  populateBoard()
  totalMoves += 1
  increaseScore = totalMoves * 2
  document.querySelector('.moves').innerHTML = `Moves: ${totalMoves}`
  document.querySelector(
    '.score-container'
  ).innerHTML = `Score: ${increaseScore}`
  const checkLosingCondition = () => {
    window.onerror = () => {
      alert('Sorry, you have lost!')
    }
  }
  checkLosingCondition()
  for (let i = 0; i < 16; i++) {
    if (i % 48 === 0) {
      let squareOne = Number(squares[i].innerHTML)
      let squareTwo = Number(squares[i + 4].innerHTML)
      let squareThree = Number(squares[i + 8].innerHTML)
      let squareFour = Number(squares[i + 12].innerHTML)
      let squareFive = Number(squares[i + 1].innerHTML)
      let squareSix = Number(squares[i + 5].innerHTML)
      let squareSeven = Number(squares[i + 9].innerHTML)
      let squareEight = Number(squares[i + 13].innerHTML)
      let squareNine = Number(squares[i + 2].innerHTML)
      let squareTen = Number(squares[i + 6].innerHTML)
      let squareEleven = Number(squares[i + 10].innerHTML)
      let squareTwelve = Number(squares[i + 14].innerHTML)
      let squareThirteen = Number(squares[i + 3].innerHTML)
      let squareFourteen = Number(squares[i + 7].innerHTML)
      let squareFifteen = Number(squares[i + 11].innerHTML)
      let squareSixteen = Number(squares[i + 15].innerHTML)
      let columnOne = [squareOne, squareTwo, squareThree, squareFour]
      let columnTwo = [squareFive, squareSix, squareSeven, squareEight]
      let columnThree = [squareNine, squareTen, squareEleven, squareTwelve]
      let columnFour = [
        squareThirteen,
        squareFourteen,
        squareFifteen,
        squareSixteen
      ]
      let allColumns = [columnOne, columnTwo, columnThree, columnFour]
      allColumns.forEach((elemnt) => {
        let filledSquares = elemnt.filter((digit) => {
          return digit >= 1
        })
        let empty = 4 - filledSquares.length
        let emptyArray = Array(empty).fill('')
        let newArray = filledSquares.concat(emptyArray)
        const checkWinningCondition = () => {
          if (newArray.includes(2048, 0)) {
            alert('Congratulations! You win!')
          }
        }
        checkWinningCondition()
      })
    }
  }
}

const shiftLeft = () => {
  populateBoard()
  totalMoves += 1
  increaseScore = totalMoves * 2
  document.querySelector('.moves').innerHTML = `Moves: ${totalMoves}`
  document.querySelector(
    '.score-container'
  ).innerHTML = `Score: ${increaseScore}`
  const checkLosingCondition = () => {
    window.onerror = () => {
      alert('Sorry, you have lost!')
    }
  }
  checkLosingCondition()
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let squareOne = Number(squares[i].innerHTML)
      let squareTwo = Number(squares[i + 1].innerHTML)
      let squareThree = Number(squares[i + 2].innerHTML)
      let squareFour = Number(squares[i + 3].innerHTML)
      let rows = [squareOne, squareTwo, squareThree, squareFour]
      const filledSquares = rows.filter((digit) => {
        return digit >= 1
      })
      let empty = 4 - filledSquares.length
      let emptyArray = Array(empty).fill('')
      let newArray = filledSquares.concat(emptyArray)
      squares[i].innerHTML = newArray[0]
      squares[i + 1].innerHTML = newArray[1]
      squares[i + 2].innerHTML = newArray[2]
      squares[i + 3].innerHTML = newArray[3]
      const checkWinningCondition = () => {
        if (newArray.includes(2048, 0)) {
          alert('Congratulations! You win!')
        }
      }
      checkWinningCondition()
    }
  }
}

const shiftRight = () => {
  populateBoard()
  totalMoves += 1
  increaseScore = totalMoves * 2
  document.querySelector('.moves').innerHTML = `Moves: ${totalMoves}`
  document.querySelector(
    '.score-container'
  ).innerHTML = `Score: ${increaseScore}`
  const checkLosingCondition = () => {
    window.onerror = () => {
      alert('Sorry, you have lost!')
    }
  }
  checkLosingCondition()
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let squareOne = Number(squares[i].innerHTML)
      let squareTwo = Number(squares[i + 1].innerHTML)
      let squareThree = Number(squares[i + 2].innerHTML)
      let squareFour = Number(squares[i + 3].innerHTML)
      let rows = [squareOne, squareTwo, squareThree, squareFour]
      const filledSquares = rows.filter((digit) => {
        return digit >= 2
      })
      let empty = 4 - filledSquares.length
      let emptyArray = Array(empty).fill('')
      let newArray = emptyArray.concat(filledSquares)
      squares[i].innerHTML = newArray[0]
      squares[i + 1].innerHTML = newArray[1]
      squares[i + 2].innerHTML = newArray[2]
      squares[i + 3].innerHTML = newArray[3]
      const checkWinningCondition = () => {
        if (newArray.includes(2048, 0)) {
          alert('Congratulations! You win!')
        }
      }
      checkWinningCondition()
    }
  }
}

// EVENT LISTENERS

document.addEventListener('keydown', (up) => {
  if (up.key == 'i') {
    shiftUp()
  }
})

document.addEventListener('keydown', (down) => {
  if (down.key == 'm') {
    shiftDown()
  }
})

document.addEventListener('keydown', (left) => {
  if (left.key == 'j') {
    shiftLeft()
  }
})

document.addEventListener('keydown', (right) => {
  if (right.key == 'k') {
    shiftRight()
  }
})

resetButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to reset your game?') === true) {
    location.reload()
  }
})
