'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// require my gameEvents file to gain access to all the event listeners
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const index = require('./../../index.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up').on('submit', console.log('submit clicked'))
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('div.box').on('click', index.clickCell)
  $('div.box').on('click', gameEvents.onUpdateGame)
})
