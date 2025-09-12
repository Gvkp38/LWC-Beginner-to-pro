import { LightningElement, api } from 'lwc';
import Account_object from '@salesforce/schema/Contact'
import Account_name from '@salesforce/schema/Contact.Name'
import Account_phone from '@salesforce/schema/Contact.Phone'
import Account_type from '@salesforce/schema/Contact.Email'
import Account_BillingPostalCode from '@salesforce/schema/Contact.Description'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class Lightningrecordviewform1 extends LightningElement {
    @api recordId;
    @api objectApiName = Account_object;
    fields = [Account_name, Account_phone, Account_type, Account_BillingPostalCode];
    handleerror(event) {
        console.log('errorr message received ==>', JSON.stringify(event.detail.message, null, 2));

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: event.detail.message,
                variant: 'error'
            })
        );
    }
    handlesuccess(event) {
        const tostmessag = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully with id' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(tostmessag)
    }
    handleSubmit(event) {
        console.log('all events available*****', event);
        console.log('logging event.detail on submit', JSON.stringify(event.detail, null, 2))
    }

    manuplatesubmit(event)
    {
        event.preventDefault();
        let fields=event.detail.fields
        console.log(JSON.stringify(fields))
        fields.FirstName='Ashok'

        console.log('got it from lwc class parem',this.template.querySelector('.editform'))
        this.template.querySelector('.editform').submit(fields)
    }

}