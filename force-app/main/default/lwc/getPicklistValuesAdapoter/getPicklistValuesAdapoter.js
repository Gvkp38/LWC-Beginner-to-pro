import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import field_apiName from '@salesforce/schema/Case.Origin';

export default class GetPicklistValuesAdapoter extends LightningElement {
    fieldApiName=field_apiName;
    recordtypeid='012J300000008FEIAY';
    statusOptions=[];
    @wire(getPicklistValues,{fieldApiName:field_apiName,recordTypeId:'012J300000008FEIAY'})
    originpicklist({data,error})
    {
        if(data)
        {
            console.log(data);
            this.statusOptions=[...this.generatepicklist(data)]
        }
        if(error)
        {
            console.error(error);
        }
    }
    generatepicklist(data)
    {
        return data.values.map(item=>({value:item.value,label:item.label}));
    }
    handleChange()
    {

    }
    
}