import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDataService } from '../product-data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productList: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productDataService: ProductDataService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    const safeProductId = productId !== null ? productId : '';
    this.productService.getProduct(safeProductId).subscribe(product => {
      this.product = product.item;
    });

    this.productDataService.productData$.subscribe(product => {
      this.productList = product;
    });
  }

  addSeparator(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  
}




