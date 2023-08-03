import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Game route tests', () => {
    it('should return status OK when /game is called', async () => {
        const testData = { player: 'testName' };
        const req = await chai
            .request(app)
            .post('/game')
            .type('form')
            .send(testData);
        expect(req).to.have.status(200);
    });
});