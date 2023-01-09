const getPlayer = require('./actions/getPlayer');
const getPlayers = require('./actions/getPlayers');
const getStats = require('./actions/getStats');

module.exports = router => {
	router.get('/players', getPlayers);
	router.get('/players/:id', getPlayer);
	router.get('/stats', getStats);
};
