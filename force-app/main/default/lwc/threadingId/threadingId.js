import { LightningElement,wire,api } from 'lwc';
import threadmethod from '@salesforce/apex/ThredcomponentControler.thredmethod';
export default class ThreadingId extends LightningElement {
    threadId;
    error;
    @api recordId;
    
    @wire(threadmethod, { rId: '$recordId' })
    wiredThreadId({ data, error }) {
        if (data) {
            this.threadId = data;
            this.error = undefined;
            console.log('Thread ID fetched successfully:', this.threadId);
        } else if (error) {
            this.error = error;
            this.threadId = undefined;
            console.error('Error fetching Thread ID:', error);
        }
    }
    copyThreadId() {
      if (this.threadId) {
        //console.error('entered method');
        alert('inside copy method')
          navigator.clipboard.writeText(this.threadId)
              .then(() => {
                  this.showToast('Success', 'Thread ID copied!', 'success');
                  console.error('Copied Succesfully');
              })
              .catch((err) => {
                  console.error('Failed to copy Thread ID', err);
                  this.showToast('Error', 'Failed to copy Thread ID', 'error');
              });
      }
  }

  // Function to show a toast message
  showToast(title, message, variant) {
      const event = new ShowToastEvent({
          title: title,
          message: message,
          variant: variant,
      });
      this.dispatchEvent(event);
  }
}