const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { generateToken } = require('../auth/helpers');
const db = require('../data/dbConfig');
const Users = require('./usersModel');

router.post('/register', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const newUser = {
    ...req.body,
    password: hash
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
