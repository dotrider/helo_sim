require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      app = express();

const {PORT_NUM, CONNECTION_STR, SECRET_SESH} = process.env;
const {register, login, logOut, userSession} = require('./controller/auth');
const {addPost, getPost} = require('./controller/controller');

//MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    secret: SECRET_SESH
}));


//DB SETUP
massive({
    connectionString: CONNECTION_STR,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db);
    console.log('Connected to DB')
    app.listen(PORT_NUM, () => console.log(`Listening on ${PORT_NUM}`))
});

//Auth
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logOut);
app.get('/auth/userSession', userSession);

//Endpoints
app.post('/api/post', addPost);
app.get('/api/post/:id?', getPost);
