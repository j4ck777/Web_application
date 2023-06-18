'use strict '

const sqlite= require('sqlite3');
const db = new sqlite.Database(`data.sqlite`, 
    (err)=>{if(err)throw err;});
for (let i=0; i<100; i++){
    db.run(`insert into Numbers(Number) Value(1)`,
    (err)=>{if(err) throw err;});
    db.all(`select count(*) as tot from numbers `, 
    (err , row )=>{
        if(err) throw err;
        console.log(row[0].tot);
    });
}
db.close();