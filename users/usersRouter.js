const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { generateToken } = require('../auth/helpers');
const db = require('../data/dbConfig');
const Users = require('./usersModel');

router.post('/register', (req, res) => {
  const { username, password, interest } = req.body;
  const hash = bcrypt.hashSync(req.body.password, 10);
  db('topics')
    .where({ topic: interest })
    .first()
    .then(found_topic => {
      if(!found_topic)
      {
        return res
          .status(404)
          .json({message: "interest not found"})
      }
      const newUser = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash,
        location: req.body.location,
        interest: found_topic.id
      }

      Users.add(newUser)
        .then(user => {
          const token = generateToken(user);
          res
            .status(201)
            .json({
              ...user,
              token
            })
        })
        .catch(error => {
          res
            .status(500)
            .json(error);
        });
    })
});

router.post('/login', (req, res) => {
  Users.findBy({email: req.body.email})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = generateToken(user);
        res
          .status(200)
          .json({
            token
          });
      }
      else {
        res
          .status(401)
          .json({
            message: 'Invalid Credentials'
          });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json(error);
    });
});

module.exports = router;
