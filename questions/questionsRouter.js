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

router.put('/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(question => {
      if(!question){
        res
          .status(404)
          .json({
            message: "Can't change a question that isn't there."
          });
      }
    })
    Questions.change(req.params.id, {...req.body})
      .then(question => {
        res
          .status(200)
            .json(question)
      })
});

router.delete('/:id', (req, res) => {
  Questions.findById(req.params.id)
    .then(question => {
      if(!question){
        res
          .status(404)
          .json({
            message: "Can't delete a question that isn't there."
          });
      }
      else {
      Questions.remove(req.params.id)
          .then(question => {
            res
              .status(200)
              .json({
                message: `This question: '${question}', was deleted.`
              })
          })
      }
    })
});

module.exports = router;
