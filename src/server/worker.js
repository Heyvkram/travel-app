const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.listen(8080, function () {
    console.log('http://localhost:8080/');
});

