import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Game route tests', () => {
    it('should return status OK when /game is called with valid data', async () => {
        const testData = { player1: 'testName1', player2: 'testName2' };
        const req = await chai
            .request(app)
            .post('/game')
            .type('form')
            .send(testData);
        expect(req).to.have.status(200);
    });
    it('should return status 400 when called with invalid data', async () => {
        const testData = { player: '' };
        const res = await chai
            .request(app)
            .post('/game')
            .type('form')
            .send(testData);
        expect(res).to.have.status(400);
    });

});