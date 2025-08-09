import { LightningElement, wire } from 'lwc';
import messagechannell from '@salesforce/messageChannel/ComponentCommunication__c';
import { publish,MessageContext } from 'lightning/messageService';
export default class Lmscomp1 extends LightningElement {
    @wire(MessageContext) context;

    messagefromcompa={'name':'This is message from parent','age':'This is name'}
    handlechange(event)
    {
if(event.target.label==='Enter Your Name:')
{
 this.messagefromcompa.name=event.target.value;   
}
if(event.target.label==='Enter age:')
    {
     this.messagefromcompa.age=event.target.value; 
     console.log(this.messagefromcompa)  
    }
    }

    publishmessage()
    {
        const payload={messagefromcompa:this.messagefromcompa};
        publish(this.context,messagechannell,payload);
    }
}