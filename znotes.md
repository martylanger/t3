create a new game by sending a POST request with no body. ie no data

to-hide:
stats during game
signin during game
changePassword during game


stats before signin
signout before signin
changePassword before signin


signin after signIn
signup after signIn




game ends - gameEvents.clickCell
          - authApi.getStats(data)
          - authUi.signInSuccess(data)
          - authUi.getStatsSuccess


config.js - done ?

click -> app.js
app.js -> gameEvents.onUpdateGame
gameEvents.onUpdateGame -> index.clickCell
