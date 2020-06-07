require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { DB_CONNECTION } = process.env;

const postRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/posts', postRoute);

app.get('/', (req, res) => {
	res.send('workig server');
});

mongoose.connect(`${DB_CONNECTION}`, { useNewUrlParser: true }, (err, client) => {
	if (err) return console.log(err);

	return console.log('Database connected');
})

app.listen(3000);
