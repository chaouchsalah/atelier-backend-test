const app = require('../web/server');
const request = require('supertest')(app);
const {expect} = require('chai');

describe('get Stats', () => {
	it('it should 3 stat objects', async () => {
		const {status, body} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(body).to.have.all.keys('country', 'bmi', 'bmiF', 'bmiM', 'height', 'weight', 'age');
	});
	it('it should return the country with the biggest win ratio', async () => {
		const {status, body} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(body).to.have.property('country', 'SRB');
	});
	it('it should return the average bmi', async () => {
		const {status, body} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(body).to.have.property('bmi', 42);
	});
	it('it should return the average bmi by sex', async () => {
		const {status, body} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(body).to.have.property('bmiF', 40);
		expect(body).to.have.property('bmiM', 44);
	});
	it('it should return the height median', async () => {
		const {status, body: {height}} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(height).to.have.property('median', 185);
		expect(height).to.have.property('medianF', 180);
		expect(height).to.have.property('medianM', 185);
	});
	it('it should return the age median', async () => {
		const {status, body: {age}} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(age).to.have.property('median', 33);
		expect(age).to.have.property('medianF', 37.5);
		expect(age).to.have.property('medianM', 33);
	});
	it('it should return the weight median', async () => {
		const {status, body: {weight}} = await request.get('/api/v1/stats');

		expect(status).to.eql(200);
		expect(weight).to.have.property('median', 80000);
		expect(weight).to.have.property('medianF', 73000);
		expect(weight).to.have.property('medianM', 81000);
	});
});
