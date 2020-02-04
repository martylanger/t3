'use strict'

// require my gameEvents and authEvents files to gain access to all the event listeners
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
// const t3 = require('./game/t3.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('div.box').on('click', gameEvents.onUpdateGame)
  $('#create-game').on('click', gameEvents.onCreateGame)
})
