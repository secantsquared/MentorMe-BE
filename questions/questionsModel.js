const db = require('../../data/dbConfig');

const getAll = () => (
  db('questions')
);

const findByTopic = topic => {
  const { id } = db('topics')
    .where({name: topic})
    .first();
  
  return db('questions')
    .where({
      topic_id: id
    });
};

module.exports = {
  getAll,
  findByTopic
}
