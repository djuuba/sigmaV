const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const user = require('./user.js');

const db = mysql.createPool({
    host: user.host,
    user: user.user,
    password: user.password,
    database: user.database,
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.send('<h1>Hello world!</h1>');
})

app.listen(3001, () => {
    console.log('Running on port 3001.')
})

