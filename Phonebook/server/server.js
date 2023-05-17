const express = require("express");
const mongoose = require("mongoose");
//const Router = require("./routes")

const app = express();

app.use(express.json());
const URI ='mongodb://localhost:27017/myFirstDatabase'
//mongoose.connect('mongodb://localhost:27017/myFirstDatabase',
 // {
 //   useNewUrlParser: true,
 //   useFindAndModify: false,
 //   useUnifiedTopology: true
 // }
//);

/*
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
*/

mongoose.connect('mongodb://localhost:27017/myFirstDatabase',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});