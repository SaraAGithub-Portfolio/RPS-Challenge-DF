# RPS Challenge

About
-------
This is a simple rock, paper, scissors project that uses Javascript, Node, Express and Mocha & Chai for testing.
A player should be able to enter his or her name, click the start button, be directed to a choice of : rock, paper and scissors, choose an option and then their choice and the computer's choice will be displayed along with who won. Player can choose to play again or end the game, which will redirect them to the main page.

Approach
----
Project is set up with folders for routes, src, test and views. Ejs was used to generate HTML. Mocha & Chai were used to test features of the project. I tested that valid data was rendered from the game route, that the game logic was correct and would generate the correct outcome and that the results page would demonstrate the player's choice and that if the there was an issue with the player's choice that an error would occur. 

Styling used: Bootstrap was used to apply styling and the link for it can be found in the head tag of the ejs files. Did some custom styling too, within the ejs files. The "wiggle" of the "Play Again" button is meant to urge the player to play again.

GameLogic Class: Meant to show the simple logic behind the RPS game.
Players Class: Meant to show the computer's "random" choice(non-human player) and to hold the player's name.

Testing:
GameLogic.test.js: that the RPS game logic is correct and returns desired outcome
Result.test.js: tested result route that player's choice and computer's choice is displayed. The options to end game or play again are available.
Game.test.js: tests that game options are accessed and redirects to game page. 

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared and an option to play again

## How to Use:

```
To run tests: open an integrated terminal from the 'test' folder. Type: 'npm test'. Should see passing tests.

To view webpage: open an integrated terminal in the root of the directory. Type: 'npm start' this will generate the localhost link. Click on that link. Webpage will open.

In the result.js route, there is a commented out console.log to check in the console that the user's name is being recorded and persisted throughout the game. This can be uncommented if verification is needed.
```

## Reference:

I used Canva.com for images for this project. This project is for learning purposes only. 