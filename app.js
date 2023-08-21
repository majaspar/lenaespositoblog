require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const jsdom = require('jsdom');


const connectDB = require('./server/config/db');
const { isActiveRoute } = require('./server/helpers/routeHelpers')

const app = express();
const PORT = process.env.PORT || 4000;

 
// Connect Database
connectDB();


app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(cookieParser())


app.use(methodOverride('_method'))
app.use(session({
    secret: 'keyboard puppy',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })

}))

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

app.locals.isActiveRoute = isActiveRoute;

app.use('/', require('./server/routes/main'))
app.use('/', require('./server/routes/admin'))


app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.render('blog.ejs', { data: id })
})

app.get('/', (req, res) => {
    res.render('index.ejs', { postdate, postsData })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


