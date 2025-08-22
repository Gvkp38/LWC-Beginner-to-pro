import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import {loadScript} from 'lightning/platformResourceLoader'
export default class Importingthirdpartyjs extends LightningElement {
    currentDate=''
    isLibLoaded = false
    renderedCallback(){ 
       
   
            loadScript(this, MOMENT+'/moment/moment.min.js').then(()=>{ 
                this.setDateOnScreen()
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true
        
       
    }
    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')
    }
}