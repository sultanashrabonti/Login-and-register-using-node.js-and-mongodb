const express = require('express')
const RegisterController = require('./Controllers/RegisterController')
const mongo = require('mongoose')

// const script = require('./Public/JS/script')
const RegisterRouter = require('./Routes/RegisterRoute')
const app = express()

// app.use(express.json());

mongo
    .connect('mongodb+srv://tour:tour@tour.xokck8b.mongodb.net/LoginUsers?retryWrites=true&w=majority', {


    }).then(con => {
        // console.log(con.connectaions);
        console.log('connected with moongoses');
    })




app.use('/Register', RegisterRouter)
app.use(express.static('./Public'))
app.listen(2000, () => {
    console.log('yes the server has been started');


})
