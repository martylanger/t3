// 'use strict'
//
// const config = require('./../config')
//
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
// const update = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + formData.book.id,
//     method: 'PATCH',
//     data: formData
//   })
// }
//
// const create = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/books',
//     method: 'POST',
//     data: formData
//   })
// }
//
// module.exports = {
//   index,
//   show,
//   destroy,
//   update,
//   create
// }
