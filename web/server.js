const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const playersRouter = require('../components/players/router');

const {STATUS_CODE} = require('../config/constants');

const app = express();

app.use(cors());
app.use(helmet());

const server = http.createServer(app);

const router = new express.Router();

// Define routes
app.use('/api/v1', router);
playersRouter(router);

const port = process.env.PORT || 3000;

server.listen(port, async () => {
	console.log(`Listening on port ${port}`);
});

app.get('/health', (request, response) => response
	.status(STATUS_CODE.SUCCESS)
	.json({
		success: true,
	}));

app.use((err, request, response, next) => {
	console.error(err);
	response.status(STATUS_CODE.SERVER_ERROR).send(err);
	next();
});

module.exports = app;
