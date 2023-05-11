'use strict'

function Answer(text, auther, score, date){
    this.text=text;
    this.auther=auther;
    this.score=score;
    this.date=date;

}

function Question(text, auther, date){
    this.text=text;
    this.auther=auther;
    this.date=date;
    this.answers=[]
    
    
    this.add = function(answer){this.answers.push(answer);}


    this.findAll=function(auther){
        return this.answers.filter((a)=>(a.auther==auther));
    }

    //this.findAll= auther=>this.answers.filter((a)=>(a.auther=> auther));

}

const q1= new Question('What day is it?', 'Fulvio', '2023-03-07');
q1.add(new Answer('tuesday', 'CleverGuy', 0, '2023-03-07'));

console.log(q1);
console.log(q1.findAll('CleverGuy'));
console.log(q1.findAll('OtherGuy'));


