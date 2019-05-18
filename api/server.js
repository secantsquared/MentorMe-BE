const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(
  express.json(), 
  helmet(), 
  morgan('combined')
)

server.use('/', (req, res) => {
  res
    .status(200)
    .json({
      message: "You found it, the long lost MentorMe API. Indy would be proud."
    })
});

module.exports = server;
