'use strict'

const sqlite = require('sqlite3');

const db= new sqlite.Database('questions.sqlite', (err)=>{
    if(err)throw err;
});
 
const questNo = 1;
const sql =`SELECT author FROM answer WHERE questionId = ?`;//+questNo;

let authorList = [];


db.all(sql ,[questNo], (err, rows)=>{
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
setTimeout(()=>{
    console.log("author list out site, but latter 'callback':");
    console.log(authorList);
    
}, 1000);
