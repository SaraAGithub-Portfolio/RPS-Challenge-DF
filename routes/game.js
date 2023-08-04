import express from 'express';
const router = express.Router();
import GameLogic from '../src/GameLogic.js';
import Player from '../src/Player.js';


router.post('/', (req, res) => {
    if (!req.body.player1) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const gameLogic = new GameLogic();
    const player1 = new Player(req.body.player1, false);

    const player2 = req.body.vsComputer === 'on'
        ? new Player('Computer', true)
        : req.body.player2
            ? new Player(req.body.player2, false)
            : null;

    if (!(player2 instanceof Player)) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    gameLogic.setup([player1, player2]);
    req.app.locals.GameLogic = gameLogic;
    const currentPlayer = gameLogic.currentPlayer();
    currentPlayer.isComputer ? currentPlayer.chooseOption() : currentPlayer.chooseOption(req.body.option);

    res.redirect('/game');
})

router.get('/', (req, res) => {
    const player = req.app.locals.GameLogic.currentPlayer();

    console.log(player);

    res.render('game', {
        name: player.name,
        option: player.option
    });
})
export default router;