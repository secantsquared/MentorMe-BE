const express = require('express');
const router = express.Router();

const Questions = require('./questionsModel');

router.get('/', (req, res) => {
  Questions.findBy(req.query.search)
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
