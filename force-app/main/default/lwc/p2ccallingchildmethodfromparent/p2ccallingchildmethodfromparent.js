import { LightningElement,api } from 'lwc';

export default class P2ccallingchildmethodfromparent extends LightningElement {
    val=10;
    @api abc(test)
    {
        this.val=test;
        //console.log('got it from parent',test)
    }
    // @api abc=(test)=>{this.val=test;
    //     console.log(test);
    // }
    //helper = () => { console.log('Helper function'); };

}