const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const c = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))
app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.log('Error with Massive', error)
})

app.post('/api/auth/register', c.register);
app.post('/api/auth/login', c.login);
app.get('/api/posts/:userid', c.readAllPosts);

PORT = 4000
app.listen(PORT, () => console.log('Server is listening on ' + PORT + ' 🚀'))