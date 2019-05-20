const express = require('express');
const router = express.Router();

const Questions = require('./questionsModel');

router.get('/', (req, res) => {
  req.query
    ? Questions.findByTopic(req.query)
    : Questions.getAll()
    .then(questions => {
      res
        .status(200)
        .json(questions);
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
});

module.exports = router;
