import { LightningElement } from 'lwc';

export default class Lwcifelselseifelse extends LightningElement {
numberentered;
getnumber(event)
{
    this.numberentered=event.target.value;
}
get property1()
{   console.log(parseInt(this.numberentered)<10&&parseInt(this.numberentered)>0)
    return parseInt(this.numberentered)<10&&parseInt(this.numberentered)>0;
}
get property2()
{
    return parseInt(this.numberentered)<30&&parseInt(this.numberentered)>20;
}

}