const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mysql");
const bcrypt = require("bcrypt");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const saltRounds = 10;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

const connection = sql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "deadly_sins"
  });
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3000);


//CREATE USER
app.post('/register', (req, res) =>{
  console.log(req.query);
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(req.query.password, salt);
  connection.query('INSERT INTO users (username, password) VALUES ("'+req.query.username+'","'+hash+'")', (err, result) =>{
      if (err) throw err;
      console.log(result);
      res.send("success");
  });
});