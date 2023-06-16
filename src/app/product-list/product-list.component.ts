import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDataService } from '../product-data';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productDataService: ProductDataService,
    private router: Router
  ) {
    this.products = {};
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['q'];
      this.productService.getProducts(searchTerm).subscribe(productos => {
        this.products = productos;
        this.productDataService.setProductData(productos);
      });
    });
  }

  onItemClick(id: any, categorias: any) {
    this.router.navigate(['/items', id]);
    this.productDataService.setProductData(categorias);
  }

  addSeparator(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}



