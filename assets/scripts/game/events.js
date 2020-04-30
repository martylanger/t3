'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const authApi = require('./../auth/api.js')
// const t3 = require('./t3.js')
const store = require('./../store')

require('./../app.js')

{
// collapse me! I'm vestigial!

// const gameApi = require('./api.js')
// const gameEvents = require('./events.js')
// const gameUi = require('./ui.js')
// const store = require('./../store')
}

const stats = store.stats
let xo = 'J'
let position = 9
let gameOn = false

{
// collpase me! I'm vestigial!

// const isEmptyString = function (cell) {
//   return cell === ""
// }
// const whosTurn = function (response) {
//   response.cells.filter(isEmptyString).length % 2 === 1 ? 'X' : 'O'
// }
// const turnSwitch = function () {
//   xo === 'X' ? xo = 'O' : xo = 'X'
// }

// Is there an odd number of cells empty? If yes, it's X's turn, otherwise it's O's turn
// const whichTurn = function (response) {
//   xo = response.cells.filter(cell => cell === "").length % 2 === 1 ? 'X' : 'O'
// }
}

let winLine = []

const winCheck = function (board, xoxo) {
  console.log('running winCheck')
  // enumerate the win conditions
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // check all the win conditions to see if any has been met
  let boolean = false
  for (let i = 0; i < wins.length; i++) {
    boolean =
    board[wins[i][0]] === xoxo &&
    board[wins[i][1]] === xoxo &&
    board[wins[i][2]] === xoxo
    if (boolean) {
      if (gameOn) {
        winLine.push(wins[i][0])
        winLine.push(wins[i][1])
        winLine.push(wins[i][2])
        boolean = false
      } else {
        return true
      }
    }
  }
  return winLine.length > 0
}

{
// collapse me! I'm vestigial!

// for (let i = 0; i < wins.length; i++) {
//   const a = wins[i][0]
//   const b = wins[i][1]
//   const c = wins[i][2]
//   if (
//     board[a] === xoxo &&
//     board[b] === xoxo &&
//     board[c] === xoxo
//   ) {
//     winBoxes.push(a)
//     winBoxes.push(b)
//     winBoxes.push(c)
//   }
// }
// return winBoxes.length > 0
// }
}

const drawCheck = function (board) {
  const draw = !board.includes('')
  return draw
}

const isOver = function (board) {
  if (winCheck(board, xo)) {
    return true
  } else if (drawCheck(board)) {
    return true
  } else {
    return false
  }
}

const clickCell = function (event) {
  // if user clicked an empty cell:
  if (!$(event.target).text() && !store.game.over) {
    // whose turn is it?
    xo = store.game.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'
    // get position of click, 0-8
    position = event.target.id
    // insert xo into the chosen cell
    $(event.target).text(xo)
    // update game state locally
    store.game.cells[position] = xo
    // check if the game is over
    if (isOver(store.game.cells)) {
      // if it's over, set the local game.over value to true
      store.game.over = true
      // and update the stats totals, display "game over" message, and change color of the appropriate stat box
      stats.gameCount++
      if (winCheck(store.game.cells)) {
        // Is user playing X or O?
        const player = store.user.id === store.game.player_x.id ? 'X' : 'O'
        // xo made the last move, so if winCheck is true, xo won
        if (player === xo) {
          stats.winCount++
          $('#number-of-wins').addClass('win-line')
        } else {
          stats.lossCount++
          $('#number-of-losses').addClass('win-line')
        }
        $('#notice').text('Game over. ' + xo + ' wins!')
      } else {
        stats.drawCount++
        $('#notice').text('Game over. Nobody wins!')
        $('#number-of-draws').addClass('win-line')
      }
      // mark the winning boxes with class 'win-line'
      for (let i = 0; i < 6; i++) {
        $(`#${winLine[i]}`).addClass('win-line')
      }

      // return phase2 features and stats to the ui with updated stats
      $('#number-of-games').text(`Games: ${stats.gameCount}`)
      $('#number-of-wins').text(`Wins: ${stats.winCount}`)
      $('#number-of-losses').text(`Losses: ${stats.lossCount}`)
      $('#number-of-draws').text(`Draws: ${stats.drawCount}`)
      $('#number-of-unfinished').text(`Unfinished: ${stats.unfinishedCount}`)
      $('#auth-notice').text('')
      $('.phase2').show()
      $('.stats').show()
    }
  }
}

const onUpdateGame = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  clickCell(event)
  // create a javascript object from clickCell info
  const thisGame = {
    'game': {
      'cell': {
        'index': position,
        'value': xo
      },
      'over': store.game.over
    }
  }
  api.update(thisGame)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  // If you create a new game while there's already a game going, add to unfinishedCount
  if (gameOn === true) {
    stats.unfinishedCount++
  }

  gameOn = true
  winLine.push('number-of-wins', 'number-of-losses', 'number-of-draws')
  for (let i = 0; i < 9; i++) {
    $(`#${winLine[i]}`).removeClass('win-line')
  }
  // $(`#${winLine[0]}`).removeClass('win-line')
  // $(`#${winLine[1]}`).removeClass('win-line')
  // $(`#${winLine[2]}`).removeClass('win-line')
  // $(`#${winLine[3]}`).removeClass('win-line')
  // $(`#${winLine[4]}`).removeClass('win-line')
  // $(`#${winLine[5]}`).removeClass('win-line')
  // $('#number-of-wins').removeClass('win-line')
  // $('#number-of-losses').removeClass('win-line')
  // $('#number-of-draws').removeClass('win-line')

  winLine = []

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

module.exports = {
  onUpdateGame,
  onCreateGame,
  xo,
  isOver,
  winCheck,
  drawCheck
}
