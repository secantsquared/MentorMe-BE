exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('topics').del()
  .then(() => ( 
      // Inserts seed entries
      knex('topics').insert([
        {id:1, name: 'Photography'},
        {id:2, name: 'Programming'},
        {id:3, name: 'Small Business'},
        {id:4, name: 'Video Editing'}
      ])
  ))
);
