exports.up = (knex, Promise) => (
  knex.schema
    .createTable('responses', table => {
      table.increments();

      table.text('content');

      table.integer('poster_id')
        .references('id')
        .inTable('users');

      table.integer('question_id')
        .references('id')
        .inTable('questions');
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('responses')
); 
