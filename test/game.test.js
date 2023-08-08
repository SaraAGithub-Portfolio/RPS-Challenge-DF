import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Game route tests', () => {
    it('should redirect to /game successfully and set playerName', async () => {
        const testData = { playerName: 'Luke SkyWalker' };
        const res = await chai
            .request(app)
            .post('/game')
            .send(testData)
            .redirects(1);
        expect(res).to.have.status(200);
    });
    it('should return status OK when /game is accessed with a GET request', async () => {
        const res = await chai
            .request(app)
            .get('/game')
        expect(res).to.have.status(200);
    });
});
