import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Case_objectName from '@salesforce/schema/Case'
export default class GetpicklitsValuesbyrecortype extends LightningElement {
    picklistvalues={}
    @wire(getPicklistValuesByRecordType,{objectApiName:Case_objectName,recordTypeId:'012J300000008F9IAI'})
    picklistvalues({data,error})
    {
        if(data)
        {
            console.log(data.picklistFieldValues)
            this.picklistvalues=Object.keys(data.picklistFieldValues).map(item1=>
                ({[item1]:[...this.getpicklistvalues(data.picklistFieldValues[item1].values)]}) )
            console.log('picklist values after map',this.picklistvalues);
        }
        if(error){console.error}
    }

    getpicklistvalues(data)
    {
        return data.map(item=>({value:item.value,label:item.value}))
    }
    get picklistvalue()
    {
        
    }
}