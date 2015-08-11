var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();

app.use('/www',express.static('www'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

function compile(str, path) {
  return stylus(str)
    .set('style.styl', path)
    .use(jeet())
}

var port = Number(process.env.PORT || 3000);

app.listen(port);