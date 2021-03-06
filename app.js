const express = require('express');
const app = express();
const router = require('./routes/index.js');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');

// logging middleware;
app.use(morgan('dev'));

// serves up static files from some kind of public folder;
app.use(express.static(path.join(__dirname, '/public')));

// body parsing middleware (from StackOverflow);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// nunjucks configuration solution;
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// router;
app.use(router);

// create tables and start server;
models.db.sync() // {force: true} would delete all the tables;
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));
