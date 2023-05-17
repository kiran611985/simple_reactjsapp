//module.exports = 'Hello world';
const mongoose = require("mongoose");
//const connectDatabase = () => {
// mongoose.connect('mongodb://localhost:27017/myFirstDatabase', {
//      useNewUrlParser: true,
 //     useUnifiedTopology: true,
 //     useCreateIndex: true,
 //  })
 //   .then((data) => {
 //     console.log(`Mongodb connected with server: ${data.connection.host}`);
 //   });
//};
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
module.exports = db;//'Hello world';