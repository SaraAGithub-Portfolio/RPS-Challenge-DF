import { expect } from 'chai';
import GameLogic from '../src/GameLogic.js';

describe('GameLogic class tests', () => {
    let gameLogic;

    beforeEach(() => {
        gameLogic = new GameLogic();
    });

    it('should return tie when both choices are the same', () => {
        expect(gameLogic.results('rock', 'rock')).to.equal("It's a Tie!");
        expect(gameLogic.results('lizard', 'lizard')).to.equal("It's a Tie!");
    });

    it('should return "You Won!" when player wins', () => {
        expect(gameLogic.results('rock', 'lizard')).to.equal('You Won!');
        expect(gameLogic.results('spock', 'scissors')).to.equal('You Won!');
    });

    it('should return "You Lost!" when computer wins', () => {
        expect(gameLogic.results('rock', 'paper')).to.equal('You Lost!');
        expect(gameLogic.results('lizard', 'rock')).to.equal('You Lost!');
    });

});
