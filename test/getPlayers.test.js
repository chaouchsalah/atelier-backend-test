const app = require('../web/server');
const request = require('supertest')(app);
const {expect} = require('chai');
const data = require('../utils/tennisPlayers.json');

describe('get players', () => {
	it('it should return a list of 5 tennis players', async () => {
		const {status, body} = await request.get('/api/v1/players');

		expect(status).to.eql(200);
		expect(body.length).to.eql(5);
	});
	it('it should return a list of tennis players sorted by rank', async () => {
		const {status, body} = await request.get('/api/v1/players');

		const sortedList = data.players.sort((a, b) => a.data.rank - b.data.rank);
		expect(status).to.eql(200);
		expect(body).to.eql(sortedList);
	});
	it('it should return a list of tennis players sorted by last name', async () => {
		const {status, body} = await request.get('/api/v1/players?sort_by=lastname');

		const sortedList = data.players.sort((a, b) => a.data.last_name - b.data.last_name);
		expect(status).to.eql(200);
		expect(body).to.eql(sortedList);
	});
	it('it should return a list of tennis players sorted by lowest rank', async () => {
		const {status, body} = await request.get('/api/v1/players?order=desc');

		const sortedList = data.players.sort((a, b) => b.data.first_name - a.data.first_name);
		expect(status).to.eql(200);
		expect(body).to.eql(sortedList);
	});
	it('it should return a list of tennis players sorted by lowest first name', async () => {
		const {status, body} = await request.get('/api/v1/players?sort_by=firstname&order=desc');

		const sortedList = data.players.sort((a, b) => b.data.first_name - a.data.first_name);
		expect(status).to.eql(200);
		expect(body).to.eql(sortedList);
	});
	it('it should return an error if the field doesn\'t exist', async () => {
		const {status} = await request.get('/api/v1/players?sort_by=idm');

		expect(status).to.eql(400);
	});
});
