import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Contact from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class CreateCasecreaterecord extends LightningElement {
    activessections=['basicDetails','address']
    ContactData={}
handleChange(event){
    const {name,value}=event.target;
    this.ContactData[name]=value;
    // console.log('api name',Contact)
    
}
cancelcontact()
{
    this.ContactData={}
}
createcontact()
{
    createRecord({apiName:Contact.objectApiName
        ,fields:this.ContactData}).then(
        success=>{
            const recordUrl = '/' + success.id;
            this.showtoast('Success',`Contact created successfully. ID: {0}`,'success',[{ url: recordUrl, label: success.id }]            )}
    ).catch(error=>console.log('Error','Contact Creation faild'+error.body.message,'error'))
}
showtoast(title,data,variant,messageData)
{
    this.dispatchEvent(new ShowToastEvent({
        title:title,
        message:data,
        variant:variant || 'success',
        messageData:messageData||[]
    }))
}
}