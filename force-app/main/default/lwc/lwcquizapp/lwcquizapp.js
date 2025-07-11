import { LightningElement } from 'lwc';

export default class Lwcquizapp extends LightningElement {
showresult=false;
score=0
questions=[{id:'Question1',
    question:'Which of the following is not a decorator in lwc?',
    options:{a:'@track',
        b:'@api',
        c:'!notsure'},ans:'c'
},{id:'Question2',
    question:'What are the ways in which we can\'t call apex data in lwc?',
    options:{a:'using @track',
        b:'using @api',
        c:'Imporative Approach'},ans:'a'
},{id:'Question3',
    question:'What are the front end technologies in salesforce',
    options:{a:'lwc',
        b:'Lightning Aura',
        c:'Apex'},ans:'c'
},{id:'Question4',
    question:'Which of the folling are not present in LWC component bundle?',
    options:{a:'.http',
        b:'.js',
        c:'.python'},ans:'c'
}]

questionansmap={}
changeHandler(event){
    const {name,value}=event.target;
    // console.log(event.target)
this.questionansmap={...this.questionansmap,[name]:value}
// console.log(this.questionansmap)
}

handlesubmit()
{
this.score=this.questions.filter(item=>this.questionansmap[item.id]===item.ans).length
console.log(this.score)
this.showresult=true;
console.log(this.showresult)
}
get isallquestionsans()
{
    return !(this.questions.length===Object.keys(this.questionansmap).length)
}
}