const getPlayersByGender = require('./getPlayersByGender');
const getProp = require('./getProp');

function calculcateMedian(players, field) {
	players = players.map(player => getProp(player, field));
	players = players.sort((a, b) => a - b);
	const middle = parseInt(players.length / 2, 10);
	if (players.length % 2 === 0) {
		return (players[middle - 1] + players[middle]) / 2;
	}

	return players[middle];
}

function getMedian(players, field) {
	const median = calculcateMedian(players, field);
	const medianF = calculcateMedian(getPlayersByGender(players, 'F'), field);
	const medianM = calculcateMedian(getPlayersByGender(players, 'M'), field);
	return {
		median,
		medianF,
		medianM,
	};
}

module.exports = getMedian;
