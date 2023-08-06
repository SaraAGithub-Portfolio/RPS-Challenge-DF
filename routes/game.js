import express from 'express';
const router = express.Router();
import Players from '../src/Players.js';

router.route('/')
    .post((req, res) => {
        const playerName = new Players();
        req.app.locals.name = req.body.playerName;
        res.redirect('/game');
    })
    .get((req, res) => {
        res.render('game', {
            name: req.app.locals.name,
        });
    });

export default router;

