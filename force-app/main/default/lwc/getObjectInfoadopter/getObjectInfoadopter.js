import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Case_Name from '@salesforce/schema/Case'

export default class GetObjectInfoadopter extends LightningElement {
    Caseobjectinformation
    recordtypes=[]
    @wire(getObjectInfo,{objectApiName:Case_Name})
    Result({data,error})
    {
        if(data)
        {
            console.log('getObjectInfo======>',data);
            this.Caseobjectinformation=data;
this.recordtypes=Object.keys(data.recordTypeInfos).map(key=>data.recordTypeInfos[key])
            console.log('record infor keys======>',this.recordtypes);
            // console.log('getting infooo=======>',data.recordTypeInfos[Object.keys(data.recordTypeInfos)[0]].name)
        }
        if(error)
        {
            console.error(error)
        }
    }

}