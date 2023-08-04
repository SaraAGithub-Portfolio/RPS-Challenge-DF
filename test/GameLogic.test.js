import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import GameLogic from '../src/GameLogic.js';
import Player from '../src/player.js';

chai.use(chaiHttp);

describe('GameLogic class tests', () => {
    const gameLogic = new GameLogic();

    it('should return the correct round outcome', async () => {
        const players = [new Player('Player1', new Player('Player2'))];
        gameLogic.setup(players);
        expect(gameLogic.roundOutcome('rock', 'rock')).to.equal('tie');
        expect(gameLogic.roundOutcome('rock', 'scissors')).to.equal('player1');
        expect(gameLogic.roundOutcome('scissors', 'rock')).to.equal; ('player2');
    });
});