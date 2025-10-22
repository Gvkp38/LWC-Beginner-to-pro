import { LightningElement,wire } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import Case_object from '@salesforce/schema/Case';
import Account_object from '@salesforce/schema/Account'
let objects=[Account_object,Case_object];
export default class Getobjectinfosadopters extends LightningElement {
    resultdata;
    casedata;
    Accountdata;
    caserecordtypes=[];
@wire(getObjectInfos,{objectApiNames:objects})
responsedetails({data,error})
{
    if(data)
    {
        this.resultdata=[...data.results]
        console.log(this.resultdata)
        this.resultdata.forEach(element => {
            if(element.result.apiName==='Case')
            {
                this.casedata=element.result
                ;
            }
            else if(element.result.apiName==='Account')
            {
                this.Accountdata=element.result
                ;
            }
        });

        console.log('CAse Data',this.casedata)
    }
}

getcaserecordtypes()
{
    // alert('it got fired')
this.caserecordtypes=Object.keys(this.casedata.recordTypeInfos).map(key=>this.casedata.recordTypeInfos[key])
console.log(this.caserecordtypes)
}
}