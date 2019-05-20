const db = require('../data/dbConfig');

const getAll = () => (
  db('questions') 
    .innerJoin('topics', 'questions.topic_id', '=', 'topics.id')
);

const findBy = topic => {
  if(topic){
    topic = topic[0].toUpperCase()+topic.slice(1).toLowerCase();
   return db('questions') 
    .where({ topic: topic })
    .innerJoin('topics', 'questions.topic_id', '=', 'topics.id')
  }
  else {
   return db('questions') 
    .innerJoin('topics', 'questions.topic_id', '=', 'topics.id');
  }
};

module.exports = {
  getAll,
  findBy
}
