import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class ToastNotifications extends LightningElement {
    publishtost(title,message,variant) //This calss is used to publish toast messages
    {
        const toastmessage=new ShowToastEvent({
            title, message,variant,
            messageData:[{label:'Click Here',url:'https://gollavasanthkumar-dev-ed.lightning.force.com/'}]
        });
        this.dispatchEvent(toastmessage);
    }
    hanldesubmit()
    {
        this.publishtost('Success','Case got Submitted Successfully','Success')
    }
    
    hanldeCancel()
    {
        this.publishtost('Error','Case creation Filed','Error')
    }
    handlewarrning()
    {
        this.publishtost('warning','Please check your details befor savinng','warning')
    }
    handleinfo()
    {
        this.publishtost('info','You know wt you don\'t know it {0}','info')
    }
}