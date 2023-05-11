'use strict'

const dayjs= require('dayjs');


function Answer(text, auther, score, date){
    this.text=text;
    this.auther=auther;
    this.score=score;
    this.date=dayjs(date);

}

function Question(text, auther, date){
    this.text=text;
    this.auther=auther;
    this.date=dayjs(date);
    this.answers=[]
    
    
    this.add = function(answer){this.answers.push(answer);}


    this.findAll=function(auther){
        return this.answers.filter((a)=>(a.auther==auther));
    }

    //this.findAll= auther=>this.answers.filter((a)=>(a.auther=> auther));
    this.afterDate=(limitDate)=>this.answers.filter(
        answer=>answer.date.isAfter(dayjs(limitDate))
    );
    this.listByScore=()=>{
        const answersCopy=[...this.answers];
        answersCopy.sort((a,b)=>b.score-a.score);
        return answersCopy;
    }
}

const q1= new Question('What day is it?', 'Fulvio', '2023-03-07');
q1.add(new Answer('tuesday', 'CleverGuy', 0, '2023-03-07'));

console.log(q1);
console.log(q1.findAll('CleverGuy'));
console.log(q1.findAll('OtherGuy'));


debugger;