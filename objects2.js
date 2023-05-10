'use strict'

const res={ text: 'abcabcaba', score:5}

function createResponse(text, score){
    const obj = {
        text: text, 
        score: score
    }
    obj.increaseScore=()=> {obj.score=obj.score+1}

    return obj;
}

const r1 =createResponse('abc', 3);
const r2=createResponse('xyz', 2);

console.log(r1, r2 );
r1.increaseScore();
console.log(r1, r2);