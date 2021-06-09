# Blockforce REST API Boilerplate

REST API boilerplate for new projetcts. This boilerplate includes:

- Typescript;
- DDD architecture;
- Tests environment (Jest);
- Knex to make/run migrations;
- Sequelize as ORM;
- Docker containers (application and mysql database). Check out <code>Dockerfile</code> and <code>docker-compose.yml</code> files;
- Codestyle with ESLint and Prettier;

## Getting started
### Donwload and installation

Clone this repo:

```sh
$ git clone git@github.com:blockforce-official/boilerplate-rest-api.git
```
Get inside the folder:
```sh
$ cd boilerplate-rest-api
```
Install dependencies:
```sh
$ npm install
```
### Setup env file
Make a copy of <code>.env.example</code>, rename it as <code>.env</code> and fill it as bellow:

Running app with docker:
```
DATABASE_NAME = <your MySQL database>           # replace it without <>
DATABASE_SEQUELIZE_HOST = database
DATABASE_KNEX_HOST = localhost
DATABASE_PASSWORD = <your MySQL user password>  # replace it without <>
DATABASE_USER = <your MySQL user>               # replace it without <>
DATABASE_POOL_SIZE_MAX = 20
DATABASE_POOL_SIZE_MIN = 2
```
Check <code>docker-compose.yaml</code> file to match MySQL database, user and password envs correctly 

Running app locally:
```
DATABASE_NAME = <your MySQL database>           # replace it without <>
DATABASE_SEQUELIZE_HOST = localhost
DATABASE_KNEX_HOST = localhost
DATABASE_PASSWORD = <your MySQL user password>  # replace it without <>
DATABASE_USER = <your MySQL user>               # replace it without <>
DATABASE_POOL_SIZE_MAX = 20
DATABASE_POOL_SIZE_MIN = 2
```

### Running application from Docker
> In order to run these docker containers you need to install [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/install/)

Inside application directory run the command bellow to get application and MySQL database started:
```sh
$ docker-compose up -d
```
### Running application locally
> First you'll need to run a MySQL instance in a docker container or locally and fill <code>.env</code> accordingly

Inside application directory run the command bellow to get application started:
```sh
$ npm run dev:local
```
### Debugging
Inside a <code>.vscode</code> folder in the project's root directory create a <code>launch.json</code> file with the configuration bellow:
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
After all of this you're good to go and access application at <code>localhost:8080</code>

Feel free to submit issues and PR's to make this boilerplate more and more awesome

<sub>Made by Blockforce</sub>