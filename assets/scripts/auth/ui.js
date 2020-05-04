'use strict'

const store = require('./../store')
const api = require('./api')
const gameEvents = require('./../game/events')

const signUpSuccess = function (data) {
  $('#auth-notice').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#auth-notice').text('Error on sign up')
  $('#auth-notice').css('display', 'flex')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#auth-notice').text('Signed in successfully')
  $('form').trigger('reset')
  $('.phase1').hide()
  $('.phase2').css('display', 'flex')
  $('.stats').css('display', 'flex')
  store.user = data.user

  api.getStats(data)
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const signInFailure = function () {
  $('#auth-notice').text('Error on sign in')
  $('#auth-notice').css('display', 'flex')
  $('form').trigger('reset')
}

const whoWon = function (game) {
  const user = store.user.id
  let winner = 1
  let player = ''
  let outcome = ''

  // Was the user X or O?
  if (user === game.player_x.id) {
    player = 'X'
  } else {
    player = 'O'
  }
  // const player = user === game.player_x.id ? 'X' : 'O'

  // Who won?
  if (gameEvents.winCheck(game.cells, 'X')) {
    winner = 'X'
  } else if (gameEvents.winCheck(game.cells, 'O')) {
    winner = 'O'
  }

  if (winner === 1) {
    outcome = gameEvents.drawCheck(game.cells) ? 'draw' : 'unfinished'
  } else if (winner === player) {
    outcome = 'win'
  } else {
    outcome = 'loss'
  }
  return outcome
}

const getStatsSuccess = function (data) {
  const gameCount = data.games.length
  let winCount = 0
  let lossCount = 0
  let drawCount = 0
  let unfinishedCount = 0

  // Tally the stats
  for (let i = 0; i < data.games.length; i++) {
    const game = data.games[i]
    switch (whoWon(game)) {
      case 'win':
        winCount++
        break
      case 'loss':
        lossCount++
        break
      case 'draw':
        drawCount++
        break
      case 'unfinished':
        unfinishedCount++
    }
  }

  // Store the stats for fast updates
  store.stats = {}
  store.stats.games = data.games
  store.stats.gameCount = gameCount
  store.stats.winCount = winCount
  store.stats.lossCount = lossCount
  store.stats.drawCount = drawCount
  store.stats.unfinishedCount = unfinishedCount

  // Display the stats
  $('#number-of-games').html(`Games: ${gameCount}`)
  $('#number-of-wins').html(`Wins: ${winCount}`)
  $('#number-of-losses').html(`Losses: ${lossCount}`)
  $('#number-of-draws').html(`Draws: ${drawCount}`)
  $('#number-of-unfinished').html(`Unfinished: ${unfinishedCount}`)
}

const getStatsFailure = function () {
  $('#auth-notice').text('Error on stats retrieval')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#auth-notice').text('Signed out successfully')
  $('form').trigger('reset')
  $('.phase2').hide()
  $('.stats').hide()
  $('.box').removeClass('win-line')
  $('.phase3').hide()
  $('.phase1').css('display', 'flex')

  store.user = null
  store.stats = null
}

const signOutFailure = function () {
  $('#auth-notice').text('Error on sign out')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#auth-notice').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#auth-notice').text('Error on change password')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getStatsSuccess,
  getStatsFailure
}
