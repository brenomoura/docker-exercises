const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)


const migration = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(migration)

function getPeople() {
    return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM people", function (err, results) {
            if(results === undefined){
                reject(new Error("Error results is undefined"));
            } else {
                resolve(results);
            }
        })
    })
}

app.get('/', (req, res) => {
    let htmlString = '<h1>Full Cycle Rocks!</h1>'
    let name = req.query.name;
    if (!!name) {
        const sql = `INSERT INTO people(name) values ('${name}')`
        connection.query(sql)   
    }

    var names = []
    getPeople()
    .then(function(results){
        for (let index = 0; index < results.length; index++) {
            const element = results[index];
            names.push(`<li>${element.name}</li>`)
        }       
        let listHTML = '<ul>' + names.join('') + '</ul>'
        res.send(htmlString + listHTML)   
    })
    .catch(function(err){
        console.log('Promise Error ' + err);
    })
})

app.listen(port, () => {
    console.log('Running at port ' + port);
})