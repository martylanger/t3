'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// require my gameEvents file to gain access to all the event listeners
const gameEvents = require('./game/events')
const index = require('./../../index.js')

$(() => {
  // mount all of our event handlers to the correct DOM elements when the page
  // has finished loading
  $('div.box').on('click', index.clickCell)
//   $('#books-index').on('click', bookEvents.onGetBooks)
//   $('#books-show').on('submit', bookEvents.onGetBook)
//   $('#books-delete').on('submit', bookEvents.onDeleteBook)
  $('div.box').on('click', gameEvents.onUpdateGame)
//   $('#books-create').on('submit', bookEvents.onCreateBook)
})
