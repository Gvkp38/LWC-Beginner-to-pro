import { LightningElement } from 'lwc';

export default class Lagestnumber extends LightningElement {
    inputstring
    integerlist=[]
    getnumbers(event)
    {
        this.inputstring=event.target.value.trim();
        //console.log(this.inputstring[0])
        //console.log(this.inputstring)
        
    }
    checkminmax()
    {
        this.integerlist=this.inputstring.split(' ').map((str)=>Number(str.trim()))
        console.log(this.integerlist.length)
    }
    get maxnumber(){

        return this.integerlist.length>0?Math.max(...this.integerlist):0;
    }
    get minimumvalue(){
        return this.integerlist.length>0?Math.min(...this.integerlist):0;
    }

}