import { api, LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import thread_id from '@salesforce/schema/Case.threadid__c'
const fields=[thread_id];
export default class Getrecordsadopter extends LightningElement {
    @api recordId;
    Threadid
    @wire(getRecord,{recordId:'$recordId',fields})
    getrecordhandler({data,error})
    {
        if(data)
        {
            //console.log(thread_id.fieldApiName);
            this.Threadid=data.fields.threadid__c.value;
        }
        if(error)
        {
            console.error(error);
        }
    }
    async copyThreadId() {
        if (!this.Threadid) {
            this.ShowTost('Warning', 'No Thread ID available to copy', 'warning');
            return;
        }
    
        try {
            // Must be triggered by user (e.g., button click)
            await navigator.clipboard.writeText(this.Threadid);
            this.ShowTost('Success', 'Thread ID copied to clipboard!', 'success');
        } catch (error) {
            console.error('Clipboard API failed', error);
    
            // Optional fallback for older browsers or locker-blocked contexts
            try {
                const el = document.createElement('textarea');
                el.value = this.Threadid;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy'); // fallback only
                document.body.removeChild(el);
    
                this.ShowTost('Success', 'Thread ID copied (fallback mode)', 'success');
            } catch (fallbackError) {
                console.error('Fallback copy failed', fallbackError);
                this.ShowTost('Error', 'Failed to copy Thread ID', 'error');
            }
        }
    }
    
    
    ShowTost(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({title,message,variant}))
    }
}