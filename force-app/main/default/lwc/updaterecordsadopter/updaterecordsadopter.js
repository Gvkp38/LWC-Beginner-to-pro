import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Case_object from '@salesforce/schema/Case'
const columns=[{label:'Case Number',fieldName:'CaseNumber' ,type:'text'},
    {label:'Contact',fieldName:'Contact' ,type:'text'},
    {label:'Subject',fieldName:'Subject',type:'text',editable:true},
    {label:'Status',fieldName:'Status' ,type:'text'},
    {label:'Priority',fieldName:'Priority' ,type:'text'}]
export default class Updaterecordsadopter extends LightningElement {
    contacts=[]
    columns=columns;
    draftValues=[]
@wire(getListUi,{objectApiName:'Case',listViewApiName:'solestice_Case'})
caselistadopter({data,error})
{
    if(data)
    {
        this.contacts=data.records.records.map(data=>{
            return{
                'Id':this.getvalue(data,'Id'),
                'CaseNumber':this.getvalue(data,'CaseNumber'),
                'Contact':this.getvalue(data,'Contact'),
                'Subject':this.getvalue(data,'Subject'),
                'Status':this.getvalue(data,'Status'),
                'Priority':this.getvalue(data,'Priority')
            }
        }
        
        )
        //console.log(this.contacts)
    }
}
getvalue(data,field)
{
    if(field==='Contact')
    {
        return data.fields[field].displayValue;
    }
    return(data.fields[field].value);
}
hanleChange(event)
{
    console.log(JSON.stringify(event.detail.draftValues))
    const recordinputs=event.detail.draftValues.map(draft=>{
        console.log(draft);
        const fields = {...draft};
            return { fields:fields };
    })
    console.log('record inputs==>',JSON.stringify(recordinputs))
    const promises = recordinputs.map(recordInput=>updateRecord(recordInput))
    Promise.all(promises).then(()=>{
        console.log('COntact updated Successfully')
        this.draftValues=[]
    }).catch(error=>{
        console.error("Error updating the record", error.body)
        
    })
}
}