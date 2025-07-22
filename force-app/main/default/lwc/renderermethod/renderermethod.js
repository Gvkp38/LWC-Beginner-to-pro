import { LightningElement } from 'lwc';
import signinpage from './signinpage.html';
import signuppage from './signuppage.html';
import renderermethod from './renderermethod.html';

export default class Renderermethod extends LightningElement {
    tem=''
    handleclick(event)
    {
    this.tem=event.target.label;
    }

    render()
    {
        return this.tem==='signup'?signuppage:
        this.tem==='signin'?signinpage:renderermethod;
    }
    Consoleclick(event)
    {
        console.log(`you have sucessfully clicked on${event.target.label}`)
    }


}