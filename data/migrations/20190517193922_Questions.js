exports.up = (knex, Promise) => (
  knex.schema
    .createTable('questions', table => {
      table.increments();

      table.integer('topic')
        .references('id')
        .inTable('topics');

      table.text('content')
        .notNullable();

      table.string('imageUrl', 255);

      table.timestamps(true, true);
    })
);
exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('questions')
);
