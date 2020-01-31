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

require('.assets/scripts/')



let xo = 'X'
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

const clickCell = function (event) {
  // console.log('clickCell called, ' + which())
  let xo = response.cells.filter(cell => cell === "").length % 2 === 1 ? 'X' : 'O'
  // get position in board 0-8
const position = event.target.id

  // if cell is empty
  if (!$(event.target).text()) {
    $(event.target).text(xo)
    // turnSwitch()

  }
}

$(() => {
  // console.log('pre-click')
  $('div.box').on('click', clickCell)
  // $('div').on('click', function (){
    // console.log('also click')
  // })
  // console.log('post-click')
})
