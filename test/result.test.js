import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

class MockPlayer {
    randomChoice() {
        return 'rock';
    }
}

chai.use(chaiHttp);

describe('Result route tests', () => {
    it('should return status OK when /result is called with valid data', async () => {
        let testData = { playerChoice: 'rock', name: 'Han solo' };
        const res = await chai
            .request(app)
            .post('/result')
            .send(testData)
        expect(res).to.have.status(200);
    });
    it('should display the player choice on the result page', async () => {
        let testData = { playerChoice: "rock", };
        const res = await chai
            .request(app)
            .post('/result')
            .send(testData)
        expect(res.text).to.include(testData.playerChoice);
    });

    it('should display an error message if the user does not make a choice', async () => {
        const errorData = {
            playerChoice: ""
        };
        const res = await chai
            .request(app)
            .post('/result')
            .send(errorData);
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('You must make a choice');
    });
    it('should display the computer choice on the result page', async () => {
        let testData = { playerChoice: "rock" };
        const res = await chai
            .request(app)
            .post('/result')
            .send(testData);

        const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        let computerChoiceFound = validChoices.some(choice => res.text.includes(choice));
        expect(computerChoiceFound).to.be.true;
    });

    it('should display the game outcome on the result page', async () => {
        app.request.computerPlayer = new MockPlayer();

        let testData = { playerChoice: "paper" };
        const res = await chai
            .request(app)
            .post('/result')
            .send(testData);

        expect(res.text).to.include("You Won!");
    });
});

