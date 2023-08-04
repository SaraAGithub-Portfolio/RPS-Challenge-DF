import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    const game = req.app.locals.GameLogic;
    const [winnerPlayer, loserPlayer] = game.players.sort((a, b) => b.score - a.score);

    res.render('winner', {
        winnerPlayer: winnerPlayer,
        loserPlayer: loserPlayer,
        results: { winnerPlayer: winnerPlayer.score, loserPlayer: loserPlayer.score }
    });
});

export default router;


