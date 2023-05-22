'use strict'

setTimeout( ()=>{console.log(1)
setTimeout(() => {
    console.log('finish')
}, 2000);

}, 3000);


console.log(2)