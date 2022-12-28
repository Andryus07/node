const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.set('view engine', 'ejs');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

let list = [];
connection.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    result.forEach(element => {
        list.push(element.name);
    });
  });

app.get('/', (req,res) => {
    res.render('index.ejs', {list: list})
})

app.listen(port, () => {
    console.log('Start app ' + port)
})