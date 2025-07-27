import { api, LightningElement } from 'lwc';

export default class P2cAlertChild extends LightningElement {
    @api textfromParent;
    // connectedCallback()
    // {alert(this.textfromParent)}
}