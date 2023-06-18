'use strict'

const sqlite = require('sqlite3');

const db= new sqlite.Database('questions.sqlite', (err)=>{
    if(err)throw err;
});
 

const sql ='SELECT * FROM answer';

let authorList=[];


db.all(sql , (err, rows)=>{
    if(err)
        throw err;
    else{
        console.log(rows);
        authorList=rows.map((item)=>item['author']);
        console.log(authorList);
    }
});
console.log("author list out site:");
console.log(authorList);