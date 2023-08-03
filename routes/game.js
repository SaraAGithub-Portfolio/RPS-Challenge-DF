import express from 'express';
const router = express.Router();
import GameLogic from '../src/GameLogic.js';


router.post('/', (req, res) => {
    const gameLogic = new GameLogic();
    const player1 = { name: req.body.player1, isComputer: false };
    let player2 = { name: req.body.player2, isComputer: false };

    if (req.body.playerType === 'Computer') {
        player2.isComputer = true;
    }

    gameLogic.setup([player1, player2]);
    req.app.locals.GameLogic = gameLogic;
    const currentPlayer = gameLogic.currentPlayer();
    currentPlayer.isComputer ? currentPlayer.chooseOption() : currentPlayer.chooseOption(req.body.option);

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const player = req.app.locals.GameLogic.currentPlayer();

    res.render('game', {
        name: player.name,
        option: player.option
    });
})
export default router;