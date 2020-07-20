require('dotenv').config();
require('./config/mongoose');

process.on('uncaughtException', err => {
  console.log('Uncaught Exception occurred, Shutting Down');
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

const app = require('./app');

// CONNECT TO DATABASE
// mongoConnect;

const port = process.env.SERVER_PORT || 3000;

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
let server;
if (!module.parent) {
  server = app.listen(port, () => {
    console.info(`server started on port ${port} (${process.env})`);
  });
}

process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection! Shutting Down...');
  console.log(err.name, ':', err.message);
  server.close(() => {
    process.exit(1);
  });
});
