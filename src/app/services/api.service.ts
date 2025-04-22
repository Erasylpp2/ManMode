import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/categories/`);
  }

  getProductsByCategory(slug: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/categories/${slug}/products/`);
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`http://localhost:8000/api/register/`, { username, password });
  }  

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/token/`, { username, password });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/`);
  }

  addToFavorites(productId: number): Observable<any> {
    return this.http.post(`${this.BASE_URL}/favorites/`, { product: productId });
  }
}
