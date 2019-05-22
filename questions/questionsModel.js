const db = require('../data/dbConfig');

const getAll = () => (
  db('questions') 
    .innerJoin('topics', 'questions.topic_id', '=', 'topics.id')
);

const findBy = topic => {
  if(topic){
    topic = topic.split(' ')
    topic = topic.map(word => {
      return word[0].toUpperCase()+word.slice(1).toLowerCase();
    })
    topic = topic.join(' ')
   return db('questions') 
    .where({ topic: topic })
      .join('topics', 'questions.topic_id', '=', 'topics.id')
      .select('questions.id', 'questions.content', 'topics.topic', 'questions.updated_at', 'questions.user_id');
  }
  else {
   return db('questions') 
      .join('topics', 'questions.topic_id', '=', 'topics.id')
      .select('questions.id', 'questions.content', 'topics.topic', 'questions.updated_at', 'questions.user_id');
  }
};

const findById = id => (
  db('questions')
    .where('questions.id', id)
    .first()
    .join('topics', 'questions.topic_id', '=', 'topics.id')
    .select('questions.id', 'questions.content', 'topics.topic', 'questions.updated_at', 'questions.user_id')
);

const add = async question => (
  await db('questions')
    .insert(question)
    .then(([id]) => {
      return findById(id);
    })
);

const change = async (question_id, question) => {
  const topic = await db('topics')
    .select('id')
    .where({topic: question.topic})
    .first()

  question = {
    id: question_id,
    content: question.content,
    topic_id: topic.id  
  }

  await db('questions')
    .where({id: question_id})
    .update(
      {...question},
    );

  return await findById(question_id);
}

const remove = async (question_id, question) => {
  const deleted = await findById(question_id);

  await db('questions')
    .where({id: question_id})
    .first()
    .del()

  return deleted.content;
};

module.exports = {
  getAll,
  findBy,
  findById,
  add,
  change,
  remove
}
