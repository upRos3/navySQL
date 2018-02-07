const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'vagrant'
  }
});

let args = process.argv;

knex('famous_people').where('first_name', args[2]).orWhere('last_name', args[2]).then(function(res) {
  console.log(`Found ${res.length} person(s) by the name '${args[2]}' \n - ${res[0].first_name} ${res[0].last_name}, born '${res[0].birthdate.getDate()}-${res[0].birthdate.getMonth()}-${res[0].birthdate.getFullYear()}'`);
  knex.destroy();
});