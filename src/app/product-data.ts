import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// para compartir variable entre componentes
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private productData = new BehaviorSubject<any>(null);
  public productData$ = this.productData.asObservable();

  constructor() {}

  setProductData(product: any) {
    this.productData.next(product);
  }
}
