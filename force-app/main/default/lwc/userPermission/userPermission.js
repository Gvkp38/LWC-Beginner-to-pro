import { LightningElement } from 'lwc';
import hasViewAllData from "@salesforce/userPermission/ViewAllData";

export default class UserPermission extends LightningElement {
    hasViewAllData = hasViewAllData;
}