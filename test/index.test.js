import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('Index route tests', () => {
    const testServer = chai.request(app).keepOpen();

    it('should render homepage', async () => {
        const res = await testServer
            .post('/game')
            .type('form')
            .send({ playerName: 'name' });
        expect(res).to.have.status(200);
    });

});