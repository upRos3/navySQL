const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  }
});

const args = process.argv;

knex('famous_people')
  .returning('id')
  .insert([
    {first_name: args[2],
    last_name: args[3],
    birthdate: args[4]}
  ]).then(function() {
    console.log("Success!");
    knex.destroy()
  });