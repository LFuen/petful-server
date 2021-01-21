const express = require('express');
const cors = require('cors');
const usersRouter = require('../router/user-router');
const catsRouter = require('../router/cats-router');
const dogsRouter = require('../router/dogs-router');
const {CLIENT_ORIGIN} = require('../config')

const app = express();

app.use(
    cors({
      allowedHeaders: ["sessionId", "Content-Type"],
      exposedHeaders: ["sessionId"],
      origin: "",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
    })
  );
  
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "");
    next();
  });

app.use('/users', usersRouter);
app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

module.exports = app;
