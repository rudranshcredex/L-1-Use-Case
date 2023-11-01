import { LightningElement, track } from 'lwc';
import GetProductDataMethod from '@salesforce/apex/GetProductData.GetProductDataMethod';

export default class UiComponent extends LightningElement {

    responseData;
    @track filteredData = [];

    columns = [
        {
            label: 'Product Id',
            fieldName: 'id'
        },
        {
            label: 'Price',
            fieldName: 'price'
        },
        {
            label: 'Title',
            fieldName: 'title'
        }
    ];

    connectedCallback() {
        GetProductDataMethod().then(results => {
            console.log('results----->', results);
            
            this.responseData = results;
            //console.log('this.responseData------>',this.responseData);


            const data = this.responseData.products.map(product => ({
                id: product.id,
                price: product.price,
                title: product.title
            }));

            this.filteredData = data.filter(product => product.price > 500 && product.price < 1000);

            console.log('this.filteredData------>', this.filteredData);
        });
    }
}
