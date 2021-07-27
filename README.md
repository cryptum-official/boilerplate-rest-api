## Table of contents
- [Blockforce REST API Boilerplate](#blockforce-rest-api-boilerplate)
  - [Getting started](#getting-started)
    - [Donwload and installation](#donwload-and-installation)
    - [Setup env file](#setup-env-file)
    - [Running application from Docker](#running-application-from-docker)
    - [Running application locally](#running-application-locally)
    - [Debugging](#debugging)
  - [Contributing](#contributing)
  - [License](#license)
# Blockforce REST API Boilerplate

REST API boilerplate for new projetcts. This boilerplate includes:

- Typescript;
- DDD architecture;
- Tests environment (Jest);
- Knex to make/run migrations;
- TypeORM as ORM;
- Docker containers (application and mysql database). ***Check out `Dockerfile` and `docker-compose.yml` files***;
- Codestyle with ESLint and Prettier;
## Getting started
### Donwload and installation

Clone this repo:

```bash
$ git clone git@github.com:blockforce-official/boilerplate-rest-api.git
```
Get inside the folder:
```bash
$ cd boilerplate-rest-api
```
Install dependencies:
```bash
$ npm install
```
### Setup env file
Make a copy of `.env.example`, rename it as `.env` and fill it as bellow:

Running app with docker:
```
DATABASE_NAME = <your MySQL database>           # replace it without <>
DATABASE_TYPEORM_HOST = database
DATABASE_KNEX_HOST = localhost
DATABASE_PASSWORD = <your MySQL user password>  # replace it without <>
DATABASE_USER = <your MySQL user>               # replace it without <>
DATABASE_POOL_SIZE_MAX = 20
DATABASE_POOL_SIZE_MIN = 2
```
Check `docker-compose.yaml` file to match MySQL database, user and password envs correctly 

Running app locally:
```
DATABASE_NAME = <your MySQL database>           # replace it without <>
DATABASE_TYPEORM_HOST = localhost
DATABASE_KNEX_HOST = localhost
DATABASE_PASSWORD = <your MySQL user password>  # replace it without <>
DATABASE_USER = <your MySQL user>               # replace it without <>
DATABASE_POOL_SIZE_MAX = 20
DATABASE_POOL_SIZE_MIN = 2
```

### Running application from Docker
> In order to run these docker containers you need to install [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/install/)

Inside application directory run the command bellow to get application and MySQL database started:
```bash
$ docker-compose up -d
```
### Running application locally
> First you'll need to run a MySQL instance in a docker container or locally and fill `.env` accordingly

Inside application directory run the command bellow to get application started:
```bash
$ npm run dev:local
```
### Debugging
Inside a `.vscode` folder in the project's root directory create a `launch.json` file with the configuration bellow:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Debug (attach)",
      "restart": true,
      "skipFiles": [
        "<node_internals>/**"
      ],
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```
After all of this you're good to go and access application at `localhost:8080`

## Contributing

Feel free to submit issues and PR's to make this boilerplate more and more awesome. To do so, you will need the following:

- Fork this project
- Create a branch for your feature (`git checkout -b feature/amazing-feature`)
- Add your changes (`git add .`)
- Commit your changes (`git commit -m 'feat: New amazing feature!`)
- Push to remote repository (`git push origin feature/amazing-feature`)
- Open a PR

## License

Distributed under the MIT license. See `LICENSE` for more information.

<sub>Made by Blockforce - [SITE](https://blockforce.in/) - **hello@blockforce.in**</sub>
