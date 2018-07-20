const axios = require('axios')
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const c = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.log('Error with Massive', error)
})



PORT = 4000
app.listen(PORT, () => console.log('Server is listening on ' + PORT + ' 🚀'))