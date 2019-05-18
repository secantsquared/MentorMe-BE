exports.up = (knex, Promise) => ( 
  knex.schema
    .createTable('mentors', table => {
      table.increments();

      table.integer('user_id')
        .references('id')
        .inTable('users');
    })
);

exports.down = (knex, Promise) => ( 
  knex.schema
    .dropTableIfExists('mentors')
); 
