const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.engine('.hbs', exphbs({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

/* Routes */

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});


/* Server */
app.listen(app.get('port'), () => {
    console.log('Server inicado correctamente : ' + app.get('port'));
});