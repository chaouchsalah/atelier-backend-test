const {STATUS_CODE} = require('../../../config/constants');
const tennisPlayers = require('../../../utils/tennisPlayers.json');
const getProp = require('./utils/getProp');

const {SUCCESS, SERVER_ERROR, BAD_REQUEST} = STATUS_CODE;

async function getPlayers(request, response) {
	try {
		let {players} = tennisPlayers;
		let {query: {sort_by: sortBy, order}} = request;
		if (sortBy) {
			if (!getProp(players[0], sortBy)) {
				return response.status(BAD_REQUEST).send({message: 'The key provided doesn\'t exist'});
			}
		} else {
			sortBy = 'data.rank';
		}

		players = players.sort((a, b) => {
			if (order === 'desc') {
				return getProp(b, sortBy) - getProp(a, sortBy);
			}

			return getProp(a, sortBy) - getProp(b, sortBy);
		});

		return response.status(SUCCESS).send(players);
	} catch (error) {
		return response.status(SERVER_ERROR).send(error);
	}
}

module.exports = getPlayers;
