exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('topics').del()
  .then(() => ( 
      // Inserts seed entries
      knex('topics').insert([
        {id:1, topic: 'Photography'},
        {id:2, topic: 'Programming'},
        {id:3, topic: 'Small Business'},
        {id:4, topic: 'Video Editing'}
      ])
  ))
);
