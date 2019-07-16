const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/rankRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app);

const db = require('./db');
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3030);
console.log('app running on port 3030');