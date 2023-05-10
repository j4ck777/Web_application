'use strict'

function powerize(exponent){
    const powexp= (base)=> Math.pow(base, exponent);
    return powexp;
}

const square=powerize(2);
const cube=powerize(3);
const root=powerize(0.5);

for (let N=1; N<10 ; N++){
    console.log(N, square(N), cube(N), root(N));
}