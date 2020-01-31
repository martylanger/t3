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

const clickCell = function (event) {
  // console.log('clickCell called, ' + which())
  xo = response.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'
  // if cell is empty
  if (!$(event.target).text()) {
    // get position in board 0-8
    position = event.target.id
    // insert xo
    $(event.target).text(xo)
    // turnSwitch()
    // update API
    gameEvents.onUpdateGame(event)
  }
}

let response =
const isOver = function (response) {
  response.cells
}

$(() => {
  $('div.box').on('click', clickCell)
})

module.exports = {
  xo,
  position,
  isOver,
  clickCell
}
