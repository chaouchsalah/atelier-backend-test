const {STATUS_CODE} = require('../../../config/constants');
const tennisPlayers = require('../../../utils/tennisPlayers.json');

const {SUCCESS, SERVER_ERROR, NOT_FOUND} = STATUS_CODE;

async function getPlayer(request, response) {
	try {
		const {players} = tennisPlayers;
		const {params: {id}} = request;
		const player = players.find(({id: playerId}) => playerId.toString() === id.toString());

		if (!player) {
			return response.status(NOT_FOUND).send({message: `There is not player with the id: ${id}`});
		}

		return response.status(SUCCESS).send(player);
	} catch (error) {
		return response.status(SERVER_ERROR).send(error);
	}
}

module.exports = getPlayer;
