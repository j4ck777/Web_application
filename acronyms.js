'use strict'

const names = "Luigi De Russis , Luca Mannella, Fulvio Corno, Juan Pablo Saenz  moreno, Enrico, Enrico   Masala, Antonio Servetti, Servetti, ";

const nameArray =names.split(',');

for(let i = 0 ; i<nameArray.length; i++)
    nameArray[i] =nameArray[i].trim();

const acronyms = [];

for(const name of nameArray){
    const words = name.split(' ');
    let initials ='';
    for(const word of words){
        if(word){
            initials=initials+word[0];
        }
    }
    acronyms.push(initials);
}

console.log(nameArray);
console.log(acronyms);

for(let i=0; i<nameArray.length; i++){
    console.log(`${acronyms[i]}-${nameArray[i]}`);

}

function extractAcronym(words){
    return 3+5;
}


const extract2=function(words){ return 6+6;}
console.log(extractAcronym);
console.log(extract2);