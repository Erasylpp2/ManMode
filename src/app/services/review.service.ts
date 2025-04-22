import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private BASE_URL = 'http://localhost:8000/api/reviews/';

  constructor(private http: HttpClient) {}

  createReview(review: any): Observable<any> {
    return this.http.post(this.BASE_URL, review);
  }

  getProductReviews(productId: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}?product=${productId}`);
  }
}
