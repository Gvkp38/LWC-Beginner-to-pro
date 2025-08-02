import { LightningElement,api } from 'lwc';

export default class Setterchild extends LightningElement {
    details1={'name':'','age':''};
    @api detailstest;
    @api get details2()
    {
return this.details1;
    }
    set details2(test)
    {
console.log('testing test log======>',JSON.parse(JSON.stringify(test)))
this.details1={...test,'age':test.age*10};
    }
   
}