const {STATUS_CODE} = require('../../../config/constants');
const tennisPlayers = require('../../../utils/tennisPlayers.json');
const getBestCountry = require('./utils/getBestCountry');
const getBMI = require('./utils/getBMI');
const getMedian = require('./utils/getMedian');

const {SUCCESS, SERVER_ERROR} = STATUS_CODE;

async function getStats(request, response) {
	try {
		const {players} = tennisPlayers;
		const country = getBestCountry(players);
		const bmi = getBMI(players);
		const height = getMedian(players, 'data.height');
		const weight = getMedian(players, 'data.weight');
		const age = getMedian(players, 'data.age');
		return response.status(SUCCESS).send({country, ...bmi, height, weight, age});
	} catch (error) {
		return response.status(SERVER_ERROR).send(error);
	}
}

module.exports = getStats;
