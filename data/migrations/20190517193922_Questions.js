exports.up = (knex, Promise) => (
  knex.schema
    .createTable('questions', table => {
      table.increments();

      table.integer('topic_id')
        .references('id')
        .inTable('topics')
        .notNullable();
        
      table.text('content')
        .notNullable()
        .unique();

      table.integer('user_id')
        .references('id')
        .inTable('users')
        .notNullable();

      table.string('imageUrl', 255);

      table.timestamps(true, true);
    })
);
exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('questions')
);
