const db = require('../data/dbConfig');

const findBy = filter => (
  db('users').where(filter)
);

const findById = id => (
  db('users').where({id}).first()
);

const add = async newUser => {
  const [id] = await db('users').insert(newUser, 'id');
  
  return findById(id);
};

module.exports = {
  add,
  findBy,
};
