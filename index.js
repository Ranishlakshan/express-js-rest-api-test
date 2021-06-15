const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//const router = require('router');

const logger = require('./middleware/logger')

const app = express();

//Handlebar middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Homepage Route
app.get('/', (req,res) => res.render('index',{
    title: 'Member App',
    members
}));

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use('/api/members',require('./routes/api/members'));

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000 ;


app.listen(PORT , () => console.log(`Server Started at ${PORT}`) );