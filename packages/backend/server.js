const mongoose = require('mongoose');
const env = require('dotenv');

env.config({ path: './.env' });

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(connection => {
    console.log(
      'MongoDB connection stablished successfully: ',
      connection.connection.host
    );
  })
  .catch(error => {
    console.error('Fail to connect MongoDB, details: ', error.message);
    process.exit(1);
  });

const app = require('./app');

app.listen(PORT, () => {
  console.log(`App running in port: ${PORT}`);
});
