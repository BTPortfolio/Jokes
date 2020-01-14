const express = require('express');
const cors = require('cors');

const JokesRouter = require('./jokes/joke-router.js');
const LongJokesRouter = require('./jokes/long-joke-router.js');
const AuthRouter = require('./data/users/authRouter.js');
const UsersRouter = require('./data/users/userRouter.js');

const server = express();

server.use(express.json());
server.use('/api/jokes', JokesRouter);
server.use('/api/longJokes', LongJokesRouter);
server.use('/api/users', UsersRouter);
server.use('/api/auth', AuthRouter);

module.exports = server;