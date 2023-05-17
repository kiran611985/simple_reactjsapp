const express = require('express')
const cors = require('cors')
const app = express()
const connectDatabase = require("./database")
//const addphone = require("./addphone")
//const PhoneBook = require('./model/PhoneBook')
const PhoneBook = require('./model/PhoneBook')
var msg = require('./Message.js');

console.log(msg);
app.use(express.json())
app.use(cors())
app.get('/Test', (req, res) => {
  res.send('hello world')
})
//const mongoose = require("mongoose");
//const dbURL = 'mongodb://localhost:27017'
//const db = mongoose.createConnection(dbURL, {dbName: 'myFirstDatabase'})
//console.log(connectDatabase);
app.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
   // console.log(res)
    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
   
})

app.post('/get-phone', async(req,res) => {
    const phoneNumber = await PhoneBook.find({})
   // console.log(res)
    try{
    //    await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
   
})

const PORT = 8282
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
    //console.log(connectDatabase)

})