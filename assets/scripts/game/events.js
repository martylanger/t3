'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const index = require('./../../../index.js')
// const t3 = require('./t3.js')
const store = require('./../store')

const comments = {
// const onGetBooks = function () {
//   // make API call to get all of the books
//   api.index()
//
//   // if API call is successful then pass the data to the onIndexSuccess function
//     .then(ui.onIndexSuccess)
//
//   // if API call fails then run our onError function
//     .catch(ui.onError)
// }
//
// const onGetBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book id
//   const formData = getFormFields(event.target)
//
//   // make API call for getting one book with the data we grabbed from the form
//   api.show(formData)
//
//     // if the API call is successful then pass the data to the onShowSuccess
//     // functiongame
//     .then(ui.onShowSuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }

// const onDeleteBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book id
//   const formData = getFormFields(event.target)
//
//   // make API call for deleting one book with the data we grabbed from the form
//   api.destroy(formData)
//
//     // if the API call is successful then invoke the onDetroySuccess function
//     .then(ui.onDestroySuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
}
require('./../app.js')

// const gameApi = require('./api.js')
// const gameEvents = require('./events.js')
// const gameUi = require('./ui.js')
// const store = require('./../store')

let xo = 'X'
let position = 9

const comments2 = {
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

  // id
  // cells []
  // over
  // player_x

  // const which = function (){
  //   return 'whichCell = ' + whichCell
  // }
  // const xoIs = function (){
  //   return 'xo = ' + xo
  // }
}

const winCheck = function (board) {
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
  let boolean = false
  let i = 0
  // check all the win conditions to see if any has been met
  while (!boolean && i < wins.length) {
    boolean =
    board[wins[i][0]] === xo &&
    board[wins[i][1]] === xo &&
    board[wins[i][2]] === xo
    i++
  }
  return boolean
}

const drawCheck = function (board) {
  console.log('running drawCheck')
  return !board.includes('')
}

const isOver = function (board) {
  console.log('running isOver')
  if (winCheck(board)) {
    return true
  } else if (drawCheck(board)) {
    return true
  } else {
    return false
  }
}

const clickCell = function (event) {
  console.log('running clickCell')
  // whose turn is it?
  xo = store.game.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'
  // if user clicked an empty cell:
  if (!$(event.target).text() && !store.game.over) {
    // get position of click 0-8
    position = event.target.id
    // insert xo into the chosen cell
    $(event.target).text(xo)
    // update game state locally
    store.game.cells[position] = xo
    // check if the game is over
    if (isOver(store.game.cells)) {
      $('#message2').text('Game over. ' + xo + ' wins!')
      store.game.over = true
      // update the api

    }
    // gameEvents.onUpdateGame(event)
    // check if the game is over
    // if (isOver(response.cells)) {
    // }
  }
}

const onUpdateGame = function (event) {
  // prevent default submit action to stop the page from refreshingCreate
  event.preventDefault()
  console.log('running onUpdateGame')
  clickCell(event)
  // create a javascript object from clickCell info
  const thisGame = {
    "game": {
      "cell": {
        "index": position,
        "value": xo
      },
      "over": store.game.over
    }
  }
  // make API call to update the game
  api.update(thisGame)

    // if the API call is successful then invoke the onUpdateSuccess function
    .then(ui.onUpdateSuccess)

    // if the API call fails then run our onError function
    .catch(ui.onError)
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('running onCreateGame')
  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
//
// const onCreateBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book
//   // information
//   const formData = getFormFields(event.target)
//
//   // make API call to create one book with the data we grabbed from the form
//   api.create(formData)
//
//     // if the API call is successful then invoke the onCreateSuccess function
//     .then(ui.onCreateSuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
//
module.exports = {
  onUpdateGame,
  onCreateGame,
  xo,
  isOver
}
