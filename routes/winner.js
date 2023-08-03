const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const game = req.app.locals.game;
    const scores = game.scoreTracker.getScores();


    let [winnerPlayer, loserPlayer] = scores[game.players[0].name] > scores[game.players[1].name]
        ? [game.players[0], game.players[1]]
        : [game.players[1], game.players[0]];

    res.render('winner', {
        winnerPlayer: winnerPlayer,
        loserPlayer: loserPlayer,
        results: scores
    });
});


module.exports = router;