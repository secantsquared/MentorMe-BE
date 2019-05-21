const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

const questionsRouter = require('../questions/questionsRouter');
const usersRouter = require('../users/usersRouter');

server.use(
  express.json(), 
  helmet(), 
  morgan('combined'),
  cors()
)

server.use('/api/questions', questionsRouter);
server.use('/api/users', usersRouter);

server.use('/', (req, res) => {
  res
    .status(200)
    .send(
      "You found it, the long lost MentorMe API. Indy would be proud."
    )
});

module.exports = server;
