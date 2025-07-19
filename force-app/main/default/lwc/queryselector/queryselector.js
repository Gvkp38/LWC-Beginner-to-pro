import { LightningElement } from 'lwc';

export default class Queryselector extends LightningElement {
    style1;
    changetext() {
        const test = this.template.querySelector('div');
        console.log('value of the testttttttt'+test.innerText);
        test.innerText='i got updated from query selector';
        this.style1=`background: white;
    border-block: green;
    text-align: center;`;
    }

    get getstyle1()
    {
        return this.style1;
    }
}