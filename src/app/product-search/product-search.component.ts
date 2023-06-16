import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchTerm: any[];

  constructor(private router: Router) {
    this.searchTerm = [];
  }

  searchProducts() {
    if (this.searchTerm) {
      console.log(this.searchTerm);
      let subSearch = String(this.searchTerm).substring(0, 3);
      if(subSearch == "MLA"){
        this.router.navigate(['/items', this.searchTerm]);
      }else{
        this.router.navigate(['/items'], { queryParams: { q: this.searchTerm } });
      }
      
    }
  }
}
