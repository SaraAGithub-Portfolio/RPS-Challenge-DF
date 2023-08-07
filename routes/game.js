import express from 'express';
const router = express.Router();

router.route('/')
    .post((req, res) => {
        req.app.locals.name = req.body.playerName;
        res.redirect('/game');
    })
    .get((req, res) => {
        res.render('game', {
            name: req.app.locals.name,
        });
    });

export default router;

