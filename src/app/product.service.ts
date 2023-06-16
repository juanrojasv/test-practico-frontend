import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//para conectarse a las urls externas
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/items';
  private apiUrlId = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getProducts(searchTerm: string) {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('q', searchTerm);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { params });
  }

  getProduct(productId: string) {
    return this.http.get<any>(`${this.apiUrlId}/${productId}`);
  }
}
