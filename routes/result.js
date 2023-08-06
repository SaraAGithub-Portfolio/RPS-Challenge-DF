import express from 'express';
const router = express.Router();
import GameLogic from '../src/GameLogic.js';
import CompPlayer from '../src/CompPlayer.js';

router.post('/', (req, res) => {
    const gameLogic = new GameLogic();

    const playerName = req.body.player;

    const playerChoice = req.body.playerChoice;
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











