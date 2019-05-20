const faker = require('faker');
const db = require('../dbConfig');

const numOfTopics = 4;
const numOfUsers = 10;
let questions = [];
for(let i = 0; i < 50; i++){
  questions.push({
    content: `${faker.random.words()} ${faker.random.words()} ${faker.random.words()}?`,
    topic_id: Math.floor(Math.random() * numOfTopics + 1),
    user_id: Math.floor(Math.random() * numOfUsers + 1)
  });
};

exports.seed = (knex, Promise) => ( 
  knex('questions')
    .del()
    .then(() => (
      knex('questions')
        .insert(questions)
    ))
);
