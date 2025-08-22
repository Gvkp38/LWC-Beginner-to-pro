import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import walkingpeople from '@salesforce/resourceUrl/movingpeople'
export default class ImageFromStaticresource extends LightningElement {
    user_image=USER_IMAGE;
    movingpeople=walkingpeople;
}