const sqlite =requir('splite3');
const db = new sqlite.Database('exam.sqlite', 
(err)=>{if (err)throw err; });


db.close();