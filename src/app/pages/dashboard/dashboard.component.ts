import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  categories: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getCategories().subscribe((data: any) => this.categories = data);
  }

  goToCategory(slug: string) {
    this.router.navigate(['/products', slug]);
  }
}