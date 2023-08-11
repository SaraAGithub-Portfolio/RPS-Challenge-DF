# RPS Challenge

About
------
This is a simple rock, paper, scissors project that uses Javascript, Node, Express and Mocha & Chai for testing.
A player should be able to enter his or her name, click the start button, be directed to a choice of : rock, paper, scissors, lizard, spock, choose an option and then their choice and the computer's choice will be displayed along with who won. Player can choose to play again which will redirect them to the game page or end the game, which will redirect them to the  homepage.

Approach
--------
This project is set up with folders for routes, src, test and views. Ejs was used to generate HTML. Mocha & Chai were used to test features of the project. 

Styling
-------
Bootstrap was used to apply styling and the link for it can be found in the head tag of the ejs files. Did some custom styling too, within the ejs files. The "wiggle" of the "Play Again" button is meant to urge the player to play again.

GameLogic Class
--------------
 Meant to show the simple logic behind the RPS game.

Player Class
------------
 Meant to show the computer's "random" choice(non-human player) and to hold the player's name.

Note on views folder
-------------------
In the Index.ejs file, entering a name is a "requirement" and the game won't start unless you do so.

Testing
-------
GameLogic.test.js: that the RPS game logic is correct and returns desired outcome.

Result.test.js: tested result route that player's choice and computer's choice is displayed.  The options to end game or play again are available. Minor error handling test to ensure the player makes a choice. Needed to add dependency injection in the test to control the behavior of the computer player during testing, making the test deterministic and predictable. Since this project is set and won't undergo further modifications, this approach will suffice--for now.

Game.test.js: tests that game options are accessed and redirects to game page. 

Index.test.js: tests that game starts after player enters name.

Coverage testing with C8.

Public Folder
------------
This folder holds images for the game, explanation for the routes in my project and how I used them, and also images of the game/webpage itself(finished product).


### Acceptance Criteria :white_check_mark: 
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
Make sure to run npm install first to ensure you've installed all dependencies indicated in the package.json file.

To run tests and code coverage: open an integrated terminal from the 'test' folder. Type: 'npm test'. Should see passing tests and code coverage chart.

To view webpage: open an integrated terminal in the root of the directory(you can just go to 'Terminal' at the top and click 'New terminal' as well). Type: 'npm start' this will generate the localhost link. Click on that link. Webpage will open.


In the result.js route, there is a commented out console.log to check in the console that the user's name is being recorded and persisted throughout the game. This can be uncommented if verification is needed.
```

## Reference:

I used Canva.com for images for this project. This project is for learning purposes only. 