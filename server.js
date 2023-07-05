const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception');
  console.error(`[ERROR NAME]: ${err.name}`);
  console.error(`[ERROR MESSAGE]: ${err.message}`);
  console.log(`[STACK]: ${err.stack}`);
  console.log('\n\nEXITING');
  process.exit(1);
});

let DB;
if (process.env.NODE_ENV === 'development') DB = process.env.DATABASE_LOCAL;
else
  DB = process.env.DATABASE_DEPLOYED.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port);

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection');
  console.error(`[ERROR NAME]: ${err.name}`);
  console.error(`[ERROR MESSAGE]: ${err.message}`);
  console.log(`[STACK]: ${err.stack}`);
  console.log('\n\nEXITING');
  server.close(() => {
    process.exit(1);
  });
});
