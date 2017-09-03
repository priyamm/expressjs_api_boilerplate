const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger')
const db = require('./config/db')
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
app.use(logger);
app.use(express.static('public'))

MongoClient.connect(db.url, (err, database) => {
  if (err)
    return console.log(err)
  require('./routes')(app, database);
  app.listen(9000, () => {
    console.log('We are live on ' + 9000);
  });
})

// app.listen(9000, function() {
//   console.log('API is running on port 9000');
// })
