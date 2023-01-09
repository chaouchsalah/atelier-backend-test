const getPlayersByGender = require('./getPlayersByGender');

function calculateBMI({data: {height, weight}}) {
	return weight / 1000 / height;
}

function averageBMI(players) {
	const bmi = players.map(calculateBMI);
	const sumBMI = bmi.reduce((accumulator, value) => accumulator + value, 0);
	return parseInt((sumBMI / players.length) * 100, 10);
}

function getBMI(players) {
	const bmi = averageBMI(players);
	const bmiF = averageBMI(getPlayersByGender(players, 'F'));
	const bmiM = averageBMI(getPlayersByGender(players, 'M'));
	return {bmi, bmiF, bmiM};
}

module.exports = getBMI;
