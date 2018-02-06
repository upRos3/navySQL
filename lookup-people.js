const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  let args = process.argv[2];
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1 OR last_name = $1", [args], (err, result) => {
    console.log("Searching ... :)");
    if (err) {
      return console.error("error running query", err);
    }
    let res = result.rows;
    console.log(`Found ${res.length} person(s) by the name '${args}' \n - ${res[0].first_name} ${res[0].last_name}, born '${res[0].birthdate.getDate()}-${res[0].birthdate.getMonth()}-${res[0].birthdate.getFullYear()}'`)
    client.end();
  });
});