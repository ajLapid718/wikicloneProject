const express = require('express');
const app = express();
const router = require('./routes/index.js');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

// logging middleware;
app.use(morgan('dev'));

// serves up static files from some kind of public folder;
app.use(express.static(path.join(__dirname, '/public')));

// body parsing middleware;
app.use(bodyParser);

// nunjucks configuration solution;
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen(3000, function() {
  console.log("Server is up and running!");
});
