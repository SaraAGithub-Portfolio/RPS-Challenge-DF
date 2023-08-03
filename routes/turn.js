const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.game;
    const currentPlayer = game.currentPlayer();

    currentPlayer.chooseOption(req.body.option);
    const message = game.playRound();

    res.render('results', { message });
})
module.exports = router;