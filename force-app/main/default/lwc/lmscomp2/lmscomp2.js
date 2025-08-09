import { LightningElement, wire } from 'lwc';
import Message1 from '@salesforce/messageChannel/ComponentCommunication__c'
import { subscribe,MessageContext } from 'lightning/messageService';
export default class Lmscomp2 extends LightningElement {
    @wire(MessageContext) context;
    currentmessage={'name':{},'age':''};
    
    handlemessage(message)
    {
        // console.log('Message from compa',message.messagefromcompa)
        // alert('got triggered')
//this.currentmessage=Object.entries(message.messagefromcompa);
this.currentmessage={...message.messagefromcompa};

console.log(this.currentmessage);
//console.log('...  ==>',...message.messagefromcompa)
    }
    connectedCallback()
    {
        subscribe(this.context,Message1,(message)=>{this.handlemessage(message);
        //alert('its a message',message.messagefromcompa)
        });
    }
    get key()
    {
        return
    }

    get value()
    {
        return
    }
}