import { LightningElement, api, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';

const FIELDS = [
    'Case.CaseNumber',
    'Case.Origin',
    'Case.ContactEmail'
];

export default class GetRecordsAopTermMultiple extends LightningElement {
    @api recordId;

    // build a reactive parameter property
    get recordParameters() {
        return [
            {
                recordIds: [ this.recordId ],
                fields: FIELDS
            }
        ];
    }

    @wire(getRecords, { records: '$recordParameters' })
    wiredRecords({ data, error }) {
        if (data) {
            console.log('Data:', data);
        } else if (error) {
            console.error('Error:', error);
        }
    }
}
