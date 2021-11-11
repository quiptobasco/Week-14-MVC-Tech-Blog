// require to use the dotenv package
require('dotenv').config();

// requirements for express server, routes, sequelize, and path
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');

// require for helpers
const helpers = require('./utils/helpers');

// require for handlebars, and creation of handlebars using helpers
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// require for express-session
const session = require('express-session');

// create express server as app
const app = express();
// set port to enviroment port OR localhost
const PORT = process.env.PORT || 3001;

// require for connect-session-sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create the session
// secret is saved in .env
// max age of cookie is 10 minutes
// create and store in new Sequelizestore
const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// middleware to use the session with express
app.use(session(sess));

// middleware to use json, urlencoding and the public folder with express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set the express engines to handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware to use the routes with express
app.use(routes);

// start express to listen at port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});