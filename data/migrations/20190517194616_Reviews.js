exports.up = (knex, Promise) => (
  knex.schema
    .createTable('reviews', table => {
      table.increments();

      table.integer('rating')
        .notNullable();

      table.text('content');

      table.integer('mentor_id')
        .references('id')
        .inTable('mentors');

      table.integer('junior_id')
        .references('id')
        .inTable('juniors');

      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('reviews')
);
