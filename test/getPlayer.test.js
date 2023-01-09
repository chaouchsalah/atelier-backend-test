const app = require('../web/server');
const request = require('supertest')(app);
const {expect} = require('chai');

describe('get player', () => {
	it('it should return a player', async () => {
		const {status, body} = await request.get('/api/v1/players/52');

		expect(status).to.eql(200);
		expect(body).to.have.property('id', 52);
	});
	it('it should return a not found if there is no user with that id', async () => {
		const {status} = await request.get('/api/v1/players/999999');

		expect(status).to.eql(404);
	});
});
