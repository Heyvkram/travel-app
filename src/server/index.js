const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.listen(8080, function () {
    console.log('http://localhost:8080/');
});

function portCheck(port){
    if (port == 8080){
        return true;
    }else{
        return false;
    }
};