'use strict'

const config = require('./../config')
const store = require('./../store')

const vestigial = {
// const index = function () {
//   // make GET request to /books
//   return $.ajax({
//     url: config.apiUrl + '/books',
//     method: 'GET'
//   })
// }
//
// const show = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + formData.book.id,
//     method: 'GET'
//   })
// }
//
// const destroy = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + formData.book.id,
//     method: 'DELETE'
//   })
// }
//
}

const update = function (thisGame) {
  // console.log('running update')
  // // console.log(store.game.id)
  // // console.log(config.apiUrl + '/games/' + store.game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: thisGame
  })
}

const create = function () {
  // console.log('running create')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  update,
  create
}
