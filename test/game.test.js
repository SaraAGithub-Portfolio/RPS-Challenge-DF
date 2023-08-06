import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Game route tests', () => {
    it('should return status OK when /game is called with valid data', async () => {
        const testData = { playerOption: 'rock' };
        const res = await chai
            .request(app)
            .post('/game')
            .send(testData);

        expect(res).to.have.status(200);
    });
});
