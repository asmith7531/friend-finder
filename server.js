//requiring dependencies
var mysql = require("mysql");
var express = require("express");
var path = require("path");
var body =require ("body-parser");
//sets up the express app
var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"Zenziethewonderdog26!",
  database:"friends_db"
});

connection.connect(function(err){
  if(err){
    console.log("error connecting: "+err.stack);
    throw(err);
  }
  console.log("connected to friends_db as id : " + connection.threadId)
})
//sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//allows us to serve static files
app.use("/static", express.static(path.join(__dirname, "public")));

var users = [{
  routeName: "austins",
  name: "Austin Smith",
  phoneNumber: "900-200-3000",
  email: "austins@gmail.com"
}]

// Routes
//=================================================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/createaccount", function(req, res){
  res.sendFile(path.join(__dirname, "/public/form.html"))
})

app.get("api/users", function () {
  return res.json(users);
})

app.post("/api/users", function (req, res) {
  //req.body hosts is equal to the JSON post sent from the user 
  //this works because of our body parsing middleware
  var newUser = req.body;
  //Using RegEx Pattern to remove spaces from newUser
  newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
})
