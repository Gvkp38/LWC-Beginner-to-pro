import { LightningElement } from 'lwc';
import hasViewAllData from "@salesforce/userPermission/ViewAllData";
import HASCUSTPER from "@salesforce/customPermission/Viewcasecustompermission";
export default class UserPermission extends LightningElement {
    hasViewAllData = hasViewAllData;
    Hascustompermission=HASCUSTPER;

}