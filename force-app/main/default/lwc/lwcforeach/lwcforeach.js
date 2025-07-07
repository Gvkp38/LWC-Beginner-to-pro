import { LightningElement } from 'lwc';

export default class Lwcforeach extends LightningElement {
array=['vasanth','ashok','jagan','yash','loki','jash','akosh']
numberstring;
numbers;
evennnumber=[];
oddnumbers=[];
getnumbers(event)
{
this.numberstring=event.target.value;
// console.log(this.numberstring)
}
separate()
{   
    // console.log(this.numberstring.trim().split(',').map(arr=>parseInt(arr)))
this.numbers=this.numberstring.trim().split(',').map(arr=>parseInt(arr));
// console.log(this.numbers);
this.evennnumber=this.numbers.filter(arr=>
    
    arr%2===0)
    this.oddnumbers=this.numbers.filter(arr=>
    
        arr%2!==0)
// this.evennnumber=this.numbers.map(arr=>arr%2==0?arr)
}

}