const express = require('express');
const cors = require('cors');
const usersRouter = require('../router/user-router');
const catsRouter = require('../router/cats-router');
const dogsRouter = require('../router/dogs-router');

const app = express();

app.use(cors());

app.use('/users', usersRouter);
app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

module.exports = app;
