// Import the mongoose module
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// //Set up default mongoose connection
// var mongoDB = process.env.MongoDB_URL;
// module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));





const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/TODOLIST');
//mongoose.connect(`${process.env.Db_uri}`);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connection to db'));
db.once('open',function(){
    console.log('successfully connected to the database');

});
