const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');
const Users = require('./usersModel');

router.post('/register', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const topic_name = req.body.interest;
  db('topics')
    .where({ topic: topic_name })
    .first()
    .then(found_topic => {
      const newUser = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        interest: found_topic.id
      }

      Users.add(newUser)
        .then(user => {
          res
            .status(201)
            .json(user)
        })
        .catch(error => {
          res
            .status(500)
            .json(error);
        });
    })
});

router.post('/api/login', (req, res) => {});
  
router.get('/api/:id', (req, res) => {});
  
router.put('/api/:id', (req, res) => {});
  
router.delete('/api/:id', (req, res) => {});

module.exports = router;
