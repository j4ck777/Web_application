'use strict';
const my_profile={
    name: 'Fakhriddin Abdullaev',
    acronym: 'FA',
    scores: [5,4,8,-1],
    avgScore: 4,
}

console.log(my_profile);
console.log(my_profile.scores);
console.log(my_profile["scores"]);
my_profile.avgScore=9;
console.log(my_profile);

console.log(my_profile.country)

if(my_profile.country)
    console.log(my_profile.country);

my_profile.country && console.log(my_profile.country);
const real_country= my_profile.country || 'World';
if('country' in my_profile)
    console.log(my_profile.country)
else
    console.log('unknown country')


my_profile.country='UZB';
console.log(my_profile);
const s='country';
my_profile.country;
my_profile["country"];
my_profile[s];


const your_profile={country: 'XX', ...my_profile}

console.log(your_profile);

//let x = {...default_object, ...real_object}

//let real_object = { ...real+object, ...updates}