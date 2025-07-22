const mongoose = require('mongoose');
require('dotenv').config();
// Define the MongoDB connection URL
// const mongoURL_Local = process.env.MONGO_URL_LOCAL;  //Hotels -> Database name
const mongoURL = process.env.MONGO_URL;


mongoose.connect(mongoURL, {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', () => console.log('Database Connected'));

db.on('disconnected', () => console.log('Database Disconnected'));

db.on('error', () => console.log('Database Connection error'));

module.exports = db;
