"use strict"

const scores=[3, 4, 2, 9, -2, 7, -3, 10];
//console.log(scores);

const better=[];
for(const score of scores){
    if(score>=0){
        better.push(score);
    }
}
const nn = scores.length-better.length;

let minVal=Math.min(...better);
let minPos=better.indexOf(minVal);
better,splice(minPos, 1);

let sum=0;
for(const value of better){
    sum+=value;
}

const average=Math.round(sum/better.length);

for(let c=0; c<nn+2; c++){
    better.push(average);
}
console.log(scores);
console.log(better);


console.log(better);