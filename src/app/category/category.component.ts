import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-category',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] 
})
export class CategoryComponent {
  constructor(private router: Router) {} 

  categories = [
    {
      name: 'Formal Wear',
      slug: 'formal-wear',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    },
    {
      name: 'Casual Wear',
      slug: 'casual-wear',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXMlMjBtYW58ZW58MHx8MHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Seasonal Collection',
      slug: 'seasonal-collection',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];
  

  goToCategory(slug: string) {
    this.router.navigate(['/category', slug]);
  }
}
