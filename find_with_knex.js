const pg = require('pg');
const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const args = process.argv;

knex.select('first_name', 'last_name', 'birthdate').from('famous_people')
  .where('first_name', args[2])
  .orWhere('last_name', args[2])
  .asCallback(function(err, res) {
    if (err) {
      return console.error(err);
    }
  console.log(`Found ${res.length} person(s) by the name '${args[2]}' \n - ${res[0].first_name} ${res[0].last_name}, born '${res[0].birthdate.getDate()}-${res[0].birthdate.getMonth()+1}-${res[0].birthdate.getFullYear()}'`);
  knex.destroy();
});
