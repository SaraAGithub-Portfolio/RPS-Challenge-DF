import express from 'express';
import bodyParser from 'body-parser';
import GameLogic from './src/GameLogic.js';
import Player from './src/Player.js';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import turnRouter from './routes/turn.js';
import winnerRouter from './routes/winner.js';

const app = express();
const port = 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const players = [
    new Player('Player1'),
    new Player('Player2', true)
];

let game = new GameLogic();
game.setup(players);

app.locals.game = game;

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/winner', winnerRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

export default app;
