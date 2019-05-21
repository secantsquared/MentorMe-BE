exports.up = (knex, Promise) => (
  knex.schema
    .createTable('users', table => {
      table.increments();

      table.string('firstname', 255)
        .notNullable();

      table.string('lastname', 255)
        .notNullable();

      table.string('email', 255)
        .notNullable()
        .unique();

      table.string('password', 255)
        .notNullable();

      table.timestamps(true, true);
    })
);
exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('users')
);
