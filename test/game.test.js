import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
//error handling

describe('Game route tests', () => {
    it('should return status OK when /game is called with valid data', async () => {
        const testPlayer = { playerOption: 'rock' };
        const res = await chai
            .request(app)
            .post('/game')
            .send(testPlayer);

        expect(res).to.have.status(200);
    });
});
