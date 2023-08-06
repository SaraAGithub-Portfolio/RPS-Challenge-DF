import express from 'express';
import indexRouter from './routes/index.js';
import gameRouter from './routes/game.js';
import resultRouter from './routes/result.js';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/result', resultRouter);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

export default app;

