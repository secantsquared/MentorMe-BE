const db = require('../data/dbConfig');

const findById = id => (
  db('users').where({id}).first()
)

const add = async newUser => {
  await db('users').insert(newUser, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

module.exports = {
  add,
};
