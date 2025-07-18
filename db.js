const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/Hotels'  //Hotels -> Database name

mongoose.connect(mongoUrl, {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', () => console.log('Database Connected'));

db.on('disconnected', () => console.log('Database Disconnected'));

db.on('error', () => console.log('Database Connection error'));

module.exports = db;
