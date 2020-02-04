'use strict'

const store = require('./../store')
const api = require('./api')
const gameEvents = require('./../game/events')

const signUpSuccess = function (data) {
  $('#message3').text('Signed up successfully')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message3').text('Error on sign up')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  $('form').trigger('reset')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message3').text('Signed in successfully')
  $('form').trigger('reset')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user

  api.getStats(data)
    .then(getStatsSuccess)
    .catch(getStatsFailure)
}

const signInFailure = function (error) {
  $('#message3').text('Error on sign up')
  $('form').trigger('reset')
  console.error('signInFailure ran. Error is :', error)
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
    outcome = gameEvents.drawCheck(game.cells) ? 'draw' : 'unfinished'
  } else if (winner === player) {
    outcome = 'win'
  }
  return outcome
}

const getStatsSuccess = function (data) {
  const numGames = data.games.length
  let winCount = 0
  let lossCount = 0
  let drawCount = 0
  let unfinishedCount = 0
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

  $('#stats').text(
    `Games: ${numGames}
    Wins: ${winCount}
    Losses: ${lossCount}
    Draws: ${drawCount}
    Unfinished: ${unfinishedCount}`)
}

const getStatsFailure = function (error) {
  $('#message3').text('Error on get stats')
  console.error('running getStatsFailure. Error is :', error)
}

const signOutSuccess = function () {
  $('#message3').text('Signed out successfully')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message3').text('Error on sign out')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
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
