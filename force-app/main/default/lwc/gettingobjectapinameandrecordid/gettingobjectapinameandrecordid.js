import { api,LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';
export default class Gettingobjectapinameandrecordid extends LightningElement {
    @api recordId;
    @api objectApiName;
    userId=Id
}