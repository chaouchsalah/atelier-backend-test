# Tennis player API

## Project

An API that returns stats about tennis players

## Libaries used

* ExpressJS: Web Framework for NodeJs
* Dotenv: For loading config env
* Mocha/Chai/Supertest: For testing
* Eslint: Linter
* AWS (EC2/ECR): For stocking the docker image and for hosting the backend
* Caddy: The webserver
* [Webhook](https://github.com/adnanh/webhook): To run actions to pull the Docker image when the CI finishes building

### Locally

To run it locally, you need to first clone the project and then run these commands:

```bash
pnpm | npm | yarn install

pnpm | npm | yarn dev
```

To run the tests:

```bash
pnpm | npm | yarn install

pnpm | npm | yarn test
```

## Endpoints

All endpoints are preceded with `/api/v1`

* `/players`:
  * Returns: list of players order by default using rank ascending
  * Takes: as url queries `field` (one of the players field) and `order` (asc or desc)
  * Example: /players?field=data.height&order=desc
* `/players/:id`:
  * Returns: The player with the id provided
  * Takes: id as a param
* `/stats`:
  * Returns: Best country, bmi, median for age, height and weight for each gender
