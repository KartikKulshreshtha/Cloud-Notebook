const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// Here we are writing the a function to connect the mongodb database 
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to mongodb successfully!!')
    })
}

module.exports = connectToMongo