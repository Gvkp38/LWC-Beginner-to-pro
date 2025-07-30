import { LightningElement,api } from 'lwc';

export default class C2pcustomeventchild extends LightningElement {
    @api userdetails;
    updateduserdetails;
    disability=true;
    labelforedit='Edit'
    // connectedCallback(){
    //     this.updateduserdetails={...this.userdetails}
    //     }
    closeHandler()
    {
        console.log('Updated values at the time of dispatch',this.updateduserdetails);
        this.dispatchEvent(new CustomEvent('close',{detail:this.updateduserdetails}));
    }
    changehandler(event)
    {
        //console.log(event.target.label);
        //console.log('event.target value=======>',event.target)
        if(event.target.label==="User Name")
        {
            console.log('entered inside before',this.updateduserdetails);
            this.updateduserdetails.name=event.target.value;
            console.log('entered inside',this.updateduserdetails);
        }
        if(event.target.label==='User Phone')
            {
                this.updateduserdetails.phone=event.target.value;
            }
    }
    enableedit()
    {
        this.disability=false;
        this.updateduserdetails={...this.userdetails}

        //alert(this.labelforedit)
        if(this.labelforedit==='Edit'){
            this.labelforedit='Cancel';
            //alert('entered cancel')
        }
        else{
            this.labelforedit='Edit';

        }
        

    }
    
}