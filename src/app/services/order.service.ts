import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BASE_URL = 'http://localhost:8000/api/orders/';

  constructor(private http: HttpClient) {}

  createOrder(order: any): Observable<any> {
    return this.http.post(this.BASE_URL, order);
  }

  getUserOrders(): Observable<any> {
    return this.http.get(this.BASE_URL); 
  }
}
