
# T3

T3 allows users on the same physical device to play tic-tac-toe against one another, or a single player to play against themself. The primary user has an account - with a user name and password - that keeps track of their total number of games played, games won, games lost, games drawn, and unfinished games.

My primary aim for this project was to make as solid a product as I could rather than to be overly ambitious with the addition of features. After meeting the basic requirements, I generally added styles and functionalities where they most naturally seemed called-for, always with the idea of adding to the basic product rather than overhauling my existing code.

## Links

- [Deployed T3](https://martylanger.github.io/t3/)
- [T3 GitHub Repository](https://github.com/martylanger/t3/)

## Planning Story

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ornare magna. Curabitur leo arcu, elementum in posuere vitae, rutrum eu urna. Quisque tincidunt nulla sed mi cursus, nec tristique est fermentum. Etiam lacinia id neque ut egestas. Sed consequat convallis felis nec posuere. Sed non eros sed velit viverra tincidunt. Etiam et tortor sit amet lacus volutpat dignissim. Vestibulum convallis, felis a posuere pretium, turpis enim sollicitudin neque, pretium finibus leo metus sed sapien. Praesent iaculis pharetra nunc ac rhoncus. Duis eu risus in est porttitor egestas sit amet eget metus. Maecenas iaculis auctor ullamcorper. Donec pretium dolor non nisl egestas bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper pulvinar orci interdum mattis. Ut gravida volutpat mauris, a semper risus maximus ut.

All of which is to say, I set out intending basically to follow the schedule suggested by the program instructors, and I pretty much did. This entailed starting with UI and the game engine, then handling authentication, then the game API, then README, debugging and style.

I started with a 3x3 bootstrap board in my HTML. Since I already knew that the API would be handling the game state as an array with nine strings, I had all the elements I needed to make my game engine. My usual style is to keep pulling on a thread once I have a good grip on it, so I wrote a full game engine at this point, neglecting to do any testing whatsoever because I had yet to set up communication with the game API, and I didn't think much about trying to simulate it. When I finally reached the point of building in communication with the game API, I debugged madly with console.logs and grunt serve as my primary tools. Overall, the lack of testing didn't turn out as catastrophically as I imagined it would; there was a lot of debugging to do, but it wasn't overwhelming. However, I did learn that I would understand my own code much better if I built it starting with the basic pieces, rather than writing some big parts before the other separate parts that they depended on.

Much of my game engine was built with a full-featured application in mind, so there are a handful of instances in the code where things may look needlessly complicated or have extraneous parts that I was imagining would be necessary for this or that functionality. The code should be relatively amenable to stopping and restarting games, multiplayer games, and perhaps an AI should I decide to build those on at a later date.

For authentication and the game API, I leaned heavily on the pertinent GA lessons and their examples, going so far as to start with the examples as my templates. For authentication I tested with curl scripts, but for the game API I went straight to the AJAX.

I left README and style for last, and both are works in progress, as of these keystrokes.

### Technologies Used

- JavaScript
- jQuery
- HTML/SCSS
- AJAX
- Bootstrap

### Unsolved Problems

- For organization and learning's sake, I still need to refactor several pieces of my code. In order to ensure the proper communication between my various functions and variables, much of the code that I originally wanted to put in a separate game engine file (t3.js) ended up dispersed around my game/events and game/ui files.
- I still need to put more and better notes/comments in my code to make it more readable.
- I still need to fix the sizing and alignment of the elements on my page, and before and after games I would like to have the auth actions on one side of the page and the "quick play" button (before sign-in) or stats (when signed in), as planned in my wireframe.
- In addition to overhauling my layout, I need to add many other style elements to my game, which currently has a very barebones interface. At the least, I would like to restyle the board, the X's and O's, and the messages to the user.
- I would like to add a "quick play" capability, which would use dummy credentials to communicate with the API and wouldn't display stats.
- I would like to add the ability to restart an unfinished game - this is a feature that I didn't have time to implement, but that I designed my game to support. (In particular, I chose to determine whose turn it is not by having a variable switch between X and O from the start of the game, but rather by deducing it from the game state.)
- I would like to change my "New Game" and "Sign Out" elements in the HTML to "button" inputs instead of "submit" inputs.
- I would like to randomize whether the primary user is X or O each game - or else to let the primary user choose whether they play as X or O.
- I still would like to add the ability to play with another user remotely, as I designed some parts of my code to support that functionality.
- I would like to come up with a new storyline to underpin tic-tac-toe and design my game around that storyline.
- Inspired by the projects of others, I would like to add the ability to view previous games.

#### Wireframe:
![wireframe](https://imgur.com/rHdwwyB)

### User Stories

- As a user I want to make a new account
- As a user I want to sign in and sign out of my account
- As a user I want to change my password
- As a user I want to start a new game of tic-tac-toe
- As a player I want to play the game without issues
- As a user I want to keep track of my stats
-
