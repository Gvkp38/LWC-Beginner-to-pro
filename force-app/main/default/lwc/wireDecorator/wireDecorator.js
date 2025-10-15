import { LightningElement,wire } from 'lwc';
import user_id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import user_Full_name from '@salesforce/schema/User.LastName';
import user_Email from '@salesforce/schema/User.Email';
import user_Name from '@salesforce/schema/User.Username';
import user_profile_name from '@salesforce/schema/User.Profile.Name';
var fields=[user_Full_name,user_Email,user_Name,user_profile_name];
export default class WireDecorator extends LightningElement {
    user_id=user_id
    userdata
@wire(getRecord,{recordId:'$user_id',fields:fields})
userresult({data,error})
{
    if(data)
    {
        this.userdata=data.fields
        console.log(this.userdata)
    }
    if(error)
    {
        console.error(error)
    }
}

}