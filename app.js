const express = require('express');
const app = express();
const router = require('./routes/index.js');
const morgan = require('morgan');

// logging middleware;
app.use(morgan('dev'));

// serves up static files from some kind of public folder;
app.use(express.static(path.join(__dirname, '/public')));


app.listen(3000, function() {
  console.log("Server is up and running!");
});
