import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavigatetostandardobjectPage extends NavigationMixin(LightningElement){

    
    createnewcontact()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'

            }
        })
    }

    Navigatetolistview()
    {
        
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'

            },state: {
                filterName: 'Recent'
          }
        
        })
    }

    createnewcontactprv()
    {
        const defaultvalues=encodeDefaultFieldValues({'FirstName':'Vasanth',
            'LastName':'Kumar',
            'Phone':'7032545492'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'

            },
            state:{
                defaultFieldValues:defaultvalues
            }

        })
    }
}