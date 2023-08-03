const express = require('express');
const bodyParser = require('body-parser');
const GameLogic = require('.src/GameLogic.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let game = new GameLogic();
game.setup(["Player1", "Player2"]);

app.locals.game = game;

app.get('/', (req, res) => {
    res.render('index');
});


const indexRouter = require('./routes/index.js')
const gameRouter = require('./routes/game.js')
const turnRouter = require('./routes/turn.js')
const winnerRouter = require('./routes/winner.js')

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/results', winnerRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
module.exports = app;