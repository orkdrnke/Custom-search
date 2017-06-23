import { Component } from '@angular/core';
import { ImageSearchService } from './imageSearch.service';

@Component({
    selector: 'search-params',
    templateUrl: './searchParams.html',
    styleUrls: ['./searchParams.css']
})
export class SearchParams {

    constructor (private imageSearchService: ImageSearchService) {}
    errorMessage: string;
    searchQuery: string;
    imageUrls = [];

    product = {
        brand: '',
        sku: '',
        category: '',
        oem: '',
        name: ''
    };

    getSearchQuery() {
        this.searchQuery = [this.product.name, this.product.brand, this.product.oem, this.product.sku].reduce(function(acc, val){
            if(val !== '' || val) {
                return acc + '+' + val;
            }
            else {
                return acc + val;
            }
        });
    }

    searchImages(query: string) {

        if(query !== '') {
            this.imageSearchService.search(query)
            .subscribe(
                result => {
                    if(result.length) {
                        let urls = [];
                        result.forEach(function(item){
                            if(item && item.link) {
                                urls.push(item.link);
                            }
                        });

                        this.imageUrls = urls;
                    }
                },
                error => this.errorMessage = <any>error
            );
        }
        else {
            alert('query is empty!');
        }

    }
}