function getPlayersByGender(players, gender) {
	return players.filter(({sex}) => sex === gender);
}

module.exports = getPlayersByGender;
