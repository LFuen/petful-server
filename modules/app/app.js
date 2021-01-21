const express = require('express');
const cors = require('cors');
const usersRouter = require('../router/user-router');
const catsRouter = require('../router/cats-router');
const dogsRouter = require('../router/dogs-router');
const {CLIENT_ORIGIN} = require('../config')

const app = express();

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.use('/users', usersRouter);
app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

module.exports = app;


// comment
