exports.up = (knex, Promise) => (
  knex.schema
    .createTable('topics', table => {
      table.increments();

      table.string('topic', 255)
        .notNullable()
        .unique();

      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('topics')
); 
