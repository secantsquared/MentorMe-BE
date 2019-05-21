exports.up = (knex, Promise) => (
  knex.schema
    .createTable('users', table => {
      table.increments();

      table.string('fullname', 255)

      table.string('email', 255)
        .notNullable()
        .unique();

      table.string('password', 255)
        .notNullable();

      table.string('location', 255);

      table.integer('interest')
        .references('id')
        .inTable('topics')
        .notNullable();

      table.timestamps(true, true);
    })
);
exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('users')
);
