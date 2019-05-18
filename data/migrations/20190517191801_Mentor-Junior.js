exports.up = (knex, Promise) => ( 
  knex.schema
    .createTable('mentor-juniors', table => {
      table.increments();

      table.integer('mentor_id')
        .references('id')
        .inTable('mentors');

      table.integer('junior_id')
        .references('id')
        .inTable('juniors');
    })
);

exports.down = (knex, Promise) => ( 
  knex.schema
    .dropTableIfExists('mentor-juniors')
); 
