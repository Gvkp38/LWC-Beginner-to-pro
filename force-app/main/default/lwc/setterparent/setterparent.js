import { LightningElement } from 'lwc';

export default class Setterparent extends LightningElement {
details={'name':'','age':''};
notechange(event)
{
    //console.log('this is to test details.name ',this.details.name)
    if(event.target.label==='Name')
    {
        this.details={...this.details,['name']:event.target.value}
    }
    if(event.target.label==='Age')
        {
            this.details={...this.details,['age']:event.target.value}        }
        //console.log(this.details)      
}
copyalert(event)
{
    alert('You have successfully copied the test!',event.target.value)
}


}