import { LightningElement, wire } from 'lwc';
import caseControllerMethod from '@salesforce/apex/caseControllerclass.caseControllerMethod'
export default class CaseCards extends LightningElement {
    @wire(caseControllerMethod)
    casehandler(result)
    {
        const {data}=result;
        console.log(data);
        
    }
}