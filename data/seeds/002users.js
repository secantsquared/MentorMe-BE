const faker = require('faker');

const db = require('../dbConfig');

const numOfTopics = 4;
const users = [];

users.push({
  firstname: 'Test',
  lastname: 'Account',
  email: 'test@account.com',
  password: 'password',
});

for(let i = 0; i < 9; i++){
  users.push({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.lorem.word(),
  })
};

exports.seed = (knex, Promise) => (
  knex('users').del()
    .then(() => (
        knex('users')
          .insert(users)
    ))
);
