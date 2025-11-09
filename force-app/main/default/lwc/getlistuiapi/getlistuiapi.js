import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
var pageSize=10;
export default class Getlistuiapi extends LightningElement {
    contacts=[]
    pagetoken=null;
    previousPageToken=null;
    nextPageToken=null;
    @wire(getListUi,{objectApiName:'Case',listViewApiName:'AllOpenCases',pageSize,pageToken:'$pagetoken'})
    listviewuihandler({data,error})
    {
        if(data)
        {
           this.contacthandler(data);
           console.log('data ',data)
        }
        if(error)
        {
            console.error(error)
        }
    }
    contacthandler(data)
    {
        this.contacts=[...data.records.records];
        this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
        
    }
    handlePreviousPage()
    {
        this.pagetoken=this.previousPageToken
    }
    handleNextPage()
    {
        this.pagetoken=this.nextPageToken
    }
}