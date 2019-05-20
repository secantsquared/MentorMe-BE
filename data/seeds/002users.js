const faker = require('faker');

const db = require('../dbConfig');

const numOfTopics = 4;
const users = [];

users.push({
  fullname: 'Test',
  location: faker.address.city(),
  email: 'test@account.com',
  password: 'password',
  headline: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  interest: 2 
});

for(let i = 0; i < 9; i++){
  users.push({
    fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
    location: faker.address.city(),
    email: faker.internet.email(),
    password: faker.lorem.word(),
    headline: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    interest: Math.floor(Math.random() * numOfTopics + 1)
  })
};

exports.seed = (knex, Promise) => (
  knex('users').del()
    .then(() => (
        knex('users')
          .insert(users)
    ))
);
