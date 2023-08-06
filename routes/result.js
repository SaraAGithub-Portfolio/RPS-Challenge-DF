import express from 'express';
const router = express.Router();
import GameLogic from '../src/GameLogic.js';
import CompPlayer from '../src/CompPlayer.js';

router.post('/', (req, res) => {
    const gameLogic = new GameLogic();

    const playerName = req.body.playerName;
    const playerChoice = req.body.playerChoice;

    if (!playerChoice) {
        return res.status(400).send({ message: 'You must make a choice.' });
    }

    const computerPlayer = new CompPlayer();
    const compPlayerChoice = computerPlayer.chooseOption();

    const result = gameLogic.results(playerChoice, compPlayerChoice);

    res.render('result', {
        playerName: playerName,
        playerChoice: playerChoice,
        computerChoice: compPlayerChoice,
        result: result,
    });
});

export default router;











