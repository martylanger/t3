'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

const gameApi = require('./assets/scripts/game/api.js')
const gameEvents = require('./assets/scripts/game/events.js')
const gameUi = require('./assets/scripts/game/ui.js')

let xo = 'X'
let position = 9
const comments = {
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
  return !board.includes('')
}

const isOver = function (board) {
  if (winCheck(board)) {
    return true
  } else if (drawCheck(board)) {
    return true
  } else {
    return false
  }
}

$(() => {
  $('div.box').on('click', clickCell)
})

const clickCell = function (event) {
  xo = response.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'
  if (!$(event.target).text()) {
    // get position in board 0-8
    position = event.target.id
    // insert xo
    $(event.target).text(xo)
    // turnSwitch()
    // update API
    gameEvents.onUpdateGame(event)
    // check if the game is over
    if (isOver(response.cells)) {

    }
  }
}

module.exports = {
  xo,
  position,
  isOver,
  clickCell
}
