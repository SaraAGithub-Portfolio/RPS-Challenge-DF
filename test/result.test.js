import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Result route tests', () => {
    it('should display the player choice on the result page', async () => {
        let testData = {
            player: "Leia",
            playerChoice: "scissors",
        };
        const res = await chai
            .request(app)
            .post('/result')
            .send(testData)
        expect(res).to.have.status(200);
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
    });
});