import { LightningElement } from 'lwc';

export default class P2cPrimitiveparent extends LightningElement {
    value
    carouselobjectdata=[
        {'src':"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",'header': "First Card",'description': "First card description.",'alternative-text':"First card accessible description."},
        {'src':"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",'header': "Second Card",'description': "Second card description.",'alternative-text':"second card accessible description."},
        {'src':"https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",'header': "Third Card",'description': "Third card description.",'alternative-text':"third card accessible description."}]
        handlechange(event)
        {
            this.value=event.target.value;
        }
        handlechangestatus(event)
        {
            const childmethod=this.template.querySelector('c-p2ccallingchildmethodfromparent')
            console.log(childmethod);
            childmethod.abc(event.target.value);
        }
}