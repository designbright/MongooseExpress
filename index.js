//REQUIRE PACKAGES
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

//REQUIRE MONGOOSE
const mongoose = require('mongoose');

// bluebird is a promise library. checkout bluebirdjs.org
const bluebird = require('bluebird');

// set mongoose's primise library to be bluebird
mongoose.Promise = bluebird;

// create express app
const app = express();

// tell express to use handlebars
//defaultLayout: "main" is referring to the main.handlebars file
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
//views is referring to the views folder
app.set('views', './views');
app.set('view engine', 'handlebars');

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use my routes
app.use('/', routes);

// Middleware will read static files like css file
app.use(express.static('public'));

//Create a new directory in MongoDB before you complete the step below. I named my Mongo directory "MongooseDB"

  // connect to mongo via mongoose. The file path should reference the name of your MongoDB
  mongoose.connect('mongodb://localhost:27017/MongooseDB', { useMongoClient: true })
  // now we can do whatever we want with mongoose.
  // configure session support middleware with express-session
  .then(() => app.listen(3000, () => console.log('ready to roll!!')));
