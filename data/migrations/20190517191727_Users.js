exports.up = (knex, Promise) => (
  knex.schema
    .createTable('users', table => {
      table.increments();

      table.string('fullname', 255)
        .notNullable();

      table.string('email', 255)
        .notNullable()
        .unique();

      table.string('password', 255)
        .notNullable();

      table.string('headline', 255);

      table.text('description');

      table.string('location', 255);

      table.timestamps(true, true);
    })
);
exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('users')
);
