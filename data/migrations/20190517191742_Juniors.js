exports.up = (knex, Promise) => ( 
  knex.schema
    .createTable('juniors', table => {
      table.increments();

      table.integer('user_id')
        .references('id')
        .inTable('users')
        .notNullable();
    })
);

exports.down = (knex, Promise) => ( 
  knex.schema
    .dropTableIfExists('juniors')
); 
