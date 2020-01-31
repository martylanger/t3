'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const index = require('../../../index.js')
//
// const onGetBooks = function () {
//   // make API call to get all of the books
//   api.index()
//
//   // if API call is successful then pass the data to the onIndexSuccess function
//     .then(ui.onIndexSuccess)
//
//   // if API call fails then run our onError function
//     .catch(ui.onError)
// }
//
// const onGetBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book id
//   const formData = getFormFields(event.target)
//
//   // make API call for getting one book with the data we grabbed from the form
//   api.show(formData)
//
//     // if the API call is successful then pass the data to the onShowSuccess
//     // functiongame
//     .then(ui.onShowSuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
//
// const onDeleteBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book id
//   const formData = getFormFields(event.target)
//
//   // make API call for deleting one book with the data we grabbed from the form
//   api.destroy(formData)
//
//     // if the API call is successful then invoke the onDetroySuccess function
//     .then(ui.onDestroySuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
//
const onUpdateGame = function (event) {
//   // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from clickCell info
  const thisGame =
  {
    "game": {
      "cell": {
        "index": index.position,
        "value": index.xo
      },
      "over": index.isOver
    }
  }
  // make API call to update one book with the data we grabbed from the form
  api.update(thisGame)

    // if the API call is successful then invoke the onUpdateSuccess function
    .then(ui.onUpdateSuccess)
//
//     // if the API call fails then run our onError function
    .catch(ui.onError)
}
//
// const onCreateBook = function (event) {
//   // prevent default submit action to stop the page from refreshing
//   event.preventDefault()
//
//   // create a javascript object from the form where the user entered the book
//   // information
//   const formData = getFormFields(event.target)
//
//   // make API call to create one book with the data we grabbed from the form
//   api.create(formData)
//
//     // if the API call is successful then invoke the onCreateSuccess function
//     .then(ui.onCreateSuccess)
//
//     // if the API call fails then run our onError function
//     .catch(ui.onError)
// }
//
module.exports = {
//   onGetBooks,
//   onGetBook,
//   onDeleteBook,
  onUpdateGame
//   onCreateBook
}
