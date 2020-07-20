const mongoose = require('mongoose');
const dotenv = require('dotenv');

// const config = require('./config');
dotenv.config({ path: '../.env' });

// connect to mongo db
const connectionString = process.env.MONGO_HOST.replace('<password>', process.env.MONGO_PASSWORD);

// if connection fails -> replace connectionString with process.env.MONGO_HOST_LOCAL
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected To MongoDB');
  })
  .catch(err => console.log(err));

module.exports = mongoose;
