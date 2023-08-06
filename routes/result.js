import express from 'express';
const router = express.Router();
import GameLogic from '../src/GameLogic.js';
import Players from '../src/Players.js';

router.post('/', (req, res) => {
    console.log(req.app.locals.name)
    const gameLogic = new GameLogic();

    const playerName = req.app.locals.name;
    const playerChoice = req.body.playerChoice;

    if (!playerChoice) {
        return res.status(400).send({ message: 'You must make a choice.' });
    }

    const computerPlayer = new Players();
    const compPlayerChoice = computerPlayer.compOption();

    const result = gameLogic.results(playerChoice, compPlayerChoice);

    res.render('result', {
        playerName: playerName,
        playerChoice: playerChoice,
        computerChoice: compPlayerChoice,
        result: result,
    });
});

export default router;











