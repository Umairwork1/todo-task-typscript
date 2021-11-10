

## Installation with docker

```bash
$ docker-compose up --build
```

##### Task CRUD operations
```
GET http://base_url/tasks
GET http://base_url/tasks/id
POST http://base_url/tasks 
PUT http://base_url/tasks/id/status
DELETE http://base_url/tasks/id

```
##### auth operations
```
POST http://base_url/auth/signin 
POST http://base_url/auth/signup 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```