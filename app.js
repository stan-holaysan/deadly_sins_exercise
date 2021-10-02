const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mysql");
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const app = express();
const Ctrlr = require('./controllers/controller');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.listen(3000);



//default page
app.get('/', (req, res) =>{
    res.render('register');
  });

//REGISTER USER
app.post('/register', urlEncodedParser, async (req,res) =>{
    console.log(req.query)
    await Ctrlr.register(req)
    // res.redirect('/addCouncil');
});