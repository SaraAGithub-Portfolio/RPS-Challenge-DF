import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.game;
    const currentPlayer = game.currentPlayer();

    currentPlayer.chooseOption(req.body.option);
    const message = game.playRound();

    res.render('results', { message });
})
export default router;