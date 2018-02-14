


// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// // override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));


app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);