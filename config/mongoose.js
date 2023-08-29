// import mongoose

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Ghost:7l6NFV30C7RCwsbZ@cluster0.gee1pki.mongodb.net/?retryWrites=true&w=majority`);

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'connection error:'));

// up and running then print the message
db.once('open', function() {
    console.log('Successfully connected to the database');
});

module.exports = db;
