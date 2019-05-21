const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');
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

router.post('/', (req, res) => {
  const topic_name = req.body.topic;
  let newQuestion = {};
  db('topics')
    .where({ topic: topic_name })
    .first()
    .then(found_topic => {
      newQuestion = {
        content: req.body.content,
        user_id: req.body.user_id,
        topic_id: found_topic.id
      }

      Questions.add(newQuestion)
        .then(question => {
          res
            .status(201)
            .json(question);
        })
        .catch(error => {
          res
            .status(500)
            .json(error);
        });
    });
});

router.get('/:id', () => {

})

router.put('/:id', () => {})

module.exports = router;
