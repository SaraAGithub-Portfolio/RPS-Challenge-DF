import express from 'express';
import bodyParser from 'body-parser';
import GameLogic from './src/GameLogic.js';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import turnRouter from './routes/turn.js';
import winnerRouter from './routes/winner.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let game = new GameLogic();
game.setup(["Player1", "Player2"]);

app.locals.game = game;

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/results', winnerRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
export default app;