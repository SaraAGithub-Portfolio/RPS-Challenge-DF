import { expect } from 'chai';
import GameLogic from '../src/GameLogic.js';
import Player from '../src/CompPlayer.js';

describe('GameLogic class tests', () => {
    let playerChoice;
    let computerChoice;
    let gameLogic;

    beforeEach(() => {
        playerChoice = new Player('Player');
        computerChoice = new Player('Computer');
        gameLogic = new GameLogic(playerChoice, computerChoice);
    });

    it('should return tie when both choices are the same', () => {
        let playerChoiceIndex = gameLogic.option.indexOf('rock');
        let computerChoiceIndex = gameLogic.option.indexOf('rock');
        expect(gameLogic.determineOutcome(playerChoiceIndex, computerChoiceIndex)).to.equal('tie');
    });

    it('should return player name when player wins', () => {
        let playerChoiceIndex = gameLogic.option.indexOf('rock');
        let computerChoiceIndex = gameLogic.option.indexOf('scissors');
        expect(gameLogic.determineOutcome(playerChoiceIndex, computerChoiceIndex)).to.equal('Player won!');
    });

    it('should return computer name when computer wins', () => {
        let playerChoiceIndex = gameLogic.option.indexOf('rock');
        let computerChoiceIndex = gameLogic.option.indexOf('paper');
        expect(gameLogic.determineOutcome(playerChoiceIndex, computerChoiceIndex)).to.equal('Computer won!');
    });

});



