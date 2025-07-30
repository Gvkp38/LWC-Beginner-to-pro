import { LightningElement } from 'lwc';

export default class C2pcustomeventparent extends LightningElement {
    showconfirmation=false;
    userdetails={};
    currentlabel='Preview';
    varienttype='brand';
    handlechange(event)
    {
        this.currentlabel='Preview';
        this.varienttype='brand';
if(event.target.label==='Enter Name'){
    this.userdetails.name=event.target.value;
};
if(event.target.label==='Enter phone'){
    this.userdetails.phone=event.target.value;
};
//console.log(this.userdetails)    
}
showmodel(event)
{
    if(this.currentlabel==='Preview'){
        this.showconfirmation=true;
this.currentlabel='Save';
this.varienttype='success';
    }
    
}
closemodel(event){
    this.showconfirmation=false;
    console.log('received details++++',{...event.detail})
    this.userdetails=event.detail;
    console.log(this.userdetails)

}
}