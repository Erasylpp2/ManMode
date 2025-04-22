import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() productId!: number;
  reviews: any[] = [];
  newReview = { rating: 5, comment: '' };

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getProductReviews(this.productId).subscribe(data => {
      this.reviews = data;
    });
  }

  createReview() {
    const review = { ...this.newReview, product: this.productId };
    this.reviewService.createReview(review).subscribe(() => {
      this.loadReviews();
      this.newReview.comment = '';
    });
  }
}
