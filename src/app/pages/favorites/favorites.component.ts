import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [CommonModule],
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  username: string = '';

  constructor(
    private favoriteService: FavoriteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername() || '';
    this.favorites = this.favoriteService.getFavorites(this.username);
  }

  removeFromFavorites(productName: string): void {
    this.favoriteService.removeFavorite(this.username, productName);
    this.favorites = this.favoriteService.getFavorites(this.username); 
  }
  
  
}
