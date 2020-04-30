'use strict'

const store = require('./../store')
const api = require('./api')
const gameEvents = require('./../game/events')

const signUpSuccess = function (data) {
  $('#auth-notice').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#auth-notice').text('Error on sign up: ' + error)
  $('#auth-notice').show()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#auth-notice').text('Signed in successfully')
  $('form').trigger('reset')
  $('.phase1').hide()
  $('.phase2').show()
  $('.stats').show()
  store.user = data.user

  api.getStats(data)
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const signInFailure = function (error) {
  $('#auth-notice').text('Error on sign in: ' + error)
  $('#auth-notice').show()
  $('form').trigger('reset')
}

const whoWon = function (game) {
  const user = store.user.id
  let winner = 1
  const player = user === game.player_x.id ? 'X' : 'O'
  let outcome = 'loss'

  if (gameEvents.winCheck(game.cells, 'X')) {
    winner = 'X'
  } else if (gameEvents.winCheck(game.cells, 'O')) {
    winner = 'O'
  }

  if (winner === 1) {
    outcome = gameEvents.drawCheck(game.cells) ? 'draw' : 'incomplete'
  } else if (winner === player) {
    outcome = 'win'
  }
  return outcome
}

const getStatsSuccess = function (data) {
  const gameCount = data.games.length
  let winCount = 0
  let lossCount = 0
  let drawCount = 0
  let incompleteCount = 0
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
      case 'incomplete':
        incompleteCount++
    }
  }
  store.stats = {}
  store.stats.games = data.games
  store.stats.gameCount = gameCount
  store.stats.winCount = winCount
  store.stats.lossCount = lossCount
  store.stats.drawCount = drawCount
  store.stats.incompleteCount = incompleteCount

  $('#number-of-games').html(`Games: ${gameCount}`)
  $('#number-of-wins').html(`Wins: ${winCount}`)
  $('#number-of-losses').html(`Losses: ${lossCount}`)
  $('#number-of-draws').html(`Draws: ${drawCount}`)
  $('#number-of-incomplete').html(`Incomplete: ${incompleteCount}`)
}

const getStatsFailure = function (error) {
  console.error('running getStatsFailure. Error is :', error)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#auth-notice').text('Signed out successfully')
  $('form').trigger('reset')
  $('.phase2').hide()
  $('.stats').hide()
  $('.phase3').hide()
  $('.phase1').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('#auth-notice').text('Error on sign out')
  $('form').trigger('reset')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#auth-notice').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#auth-notice').text('Error on change password')
  $('form').trigger('reset')
  console.error('changePasswordFailure ran. Error is :', error)
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
