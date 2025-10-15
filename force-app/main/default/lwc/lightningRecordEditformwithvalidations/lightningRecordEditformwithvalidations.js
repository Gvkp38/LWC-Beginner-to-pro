import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import contactobject from '@salesforce/schema/Contact';
import contactName from '@salesforce/schema/Contact.Name';
import contactphone from '@salesforce/schema/Contact.Phone';
import contactEmail from '@salesforce/schema/Contact.Email';
import contactaddress from '@salesforce/schema/Contact.MailingAddress';
import contactdateofbirth from '@salesforce/schema/Contact.Birthdate';

export default class LightningRecordEditformwithvalidations extends LightningElement {
    @api recordId='003J300000TsbmuIAB';
    @api objectApiName = contactobject;
    phone='';

    fields = {
        'Name': contactName,
        'Phone': contactphone,
        'Email': contactEmail,
        'Birthdate': contactdateofbirth,
        'MailingAddress': contactaddress
    }

    handleSubmit(event) {
        event.preventDefault(); 
        
        const phoneregx = /^[0-9]{10}$/;
        const fields = event.detail.fields; 
        const phonefield = this.template.querySelector('lightning-input-field');
        //console.log('value inside----->',JSON.stringify(this.template.querySelectorAll('lightning-input-field')))
// phonefield.forEach(element => {
//     console.log('values ++++++',JSON.stringify(element));
// });
       // console.log('Fields received:', JSON.stringify(fields));
       // console.log('Regex test result:', phoneregx.test(fields.Phone));

        if (!phoneregx.test(fields.Phone)) {
            phonefield.setCustomValidity('Phone number must be 10 digits');
            phonefield.reportValidity();
            return; 
        } else {
            phonefield.setCustomValidity('');
            phonefield.reportValidity();
        }

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    
    handleSuccess(event) {
        const toastMessage = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully with id ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastMessage);
    }
    handleLoad(event)
    {
        const fields= event.detail.records[this.recordId].fields;
        console.log('field valiues======>',JSON.stringify(fields));
        //console.log(JSON.stringify(event.detail.records.fields.Phone))
        //this.phone=event.detail.Phone.value;
    }
}
