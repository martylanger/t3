'use strict'

// const t3 = require('./t3.js')
const events = require('./events.js')
const store = require('./../store.js')

const onUpdateSuccess = function (responseData) {
  if (!responseData.game.over) {
    store.game = responseData.game
    $('#notice').html(`It's ${store.game.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'}'s turn`)
  }
}

const onUpdateFailure = function (responseData) {
  $('#auth-notice').html("Your turn didn't work.")
}

const onCreateSuccess = function (responseData) {
  store.game = responseData.game
  $('#notice').html(`It's ${store.game.cells.filter(cell => cell === '').length % 2 === 1 ? 'X' : 'O'}'s turn`)
  $('#auth-notice').html('You started a new game!')
  $('.phase2').hide()
  $('.stats').hide()
  $('.phase3').show()
  $('div.box').text('')
}

const onCreateFailure = function (responseData) {
  $('#auth-notice').html('You failed to create a game')
}

module.exports = {
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
