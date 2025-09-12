import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import Case_objectapi from '@salesforce/schema/Case'
import CaseSubject from '@salesforce/schema/Case.Subject'
import CaseContactName from '@salesforce/schema/Case.ContactId'
import CaseDescription from '@salesforce/schema/Case.Description'
import CaseOrigin from '@salesforce/schema/Case.Origin'
import CaseWebEmail from '@salesforce/schema/Case.SuppliedEmail'
export default class LightningRecordEditForm extends NavigationMixin(LightningElement) {
    @api objectApiName=Case_objectapi;
    @api recordId='';
    recordtypeId='012J300000008F9IAI';
    get isdisabled()
    {
        return this.recordId!=='';
    }
    fields={
        'Subject':CaseSubject,
        'ContactName':CaseContactName,
        'Description':CaseDescription,
        'Origin':CaseOrigin,
        'WebEmail':CaseWebEmail
    }
    handleSuccess(event)
    {
        const tostmessag = new ShowToastEvent({
            title: 'Success!',
            message: 'Record has been saved successfully with id' + event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(tostmessag)
        this.recordId=event.detail.id;
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         recordId: event.detail.id, // Replace with your record Id
        //         objectApiName: Case_objectapi,     // Object API name is optional for view action
        //         actionName: 'view'            // Options: 'view', 'edit', 'clone'
        //     }
        // });
    

    }
}