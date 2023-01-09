function getBestCountry(players) {
	const countries = Array.from(new Set(players.map(({country: {code}}) => code)));
	const winRatios = countries.map(country => {
		const countryPlayers = players.filter(({country: {code}}) => code === country);
		const winRatio = countryPlayers.reduce((accumulator, player) => {
			const {data: {last}} = player;
			const currentRatios = last.filter(val => val === 1).length / last.length;
			if (accumulator) {
				return (currentRatios + accumulator) / 2;
			}

			return currentRatios;
		}, 0);
		return {country, value: winRatio};
	});
	const maxRatio = Math.max(...winRatios.map(({value}) => value));
	return winRatios.find(({value}) => value === maxRatio).country;
}

module.exports = getBestCountry;
