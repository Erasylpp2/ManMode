import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private favoriteKey(username: string): string {
    return `favorites_${username}`;
  }

  private removedKey(username: string): string {
    return `removed_${username}`;
  }

  getFavorites(username: string): any[] {
    const data = localStorage.getItem(this.favoriteKey(username));
    return data ? JSON.parse(data) : [];
  }

  saveFavorites(username: string, items: any[]): void {
    localStorage.setItem(this.favoriteKey(username), JSON.stringify(items));
  }

  addFavorite(username: string, item: any): void {
    const favorites = this.getFavorites(username);
    if (!favorites.find(p => p.name === item.name)) {
      favorites.push(item);
      this.saveFavorites(username, favorites);

      const removed = this.getRemoved(username);
      removed.push(item);
      this.saveRemoved(username, removed);
    }
  }

  removeFavorite(username: string, productName: string): void {
    let favorites = this.getFavorites(username);
    favorites = favorites.filter(item => item.name !== productName);
    this.saveFavorites(username, favorites);

    let removed = this.getRemoved(username);
    removed = removed.filter(item => item.name !== productName);
    this.saveRemoved(username, removed);
  }

  isFavorite(username: string, productName: string): boolean {
    const favorites = this.getFavorites(username);
    return favorites.some(item => item.name === productName);
  }

  getRemoved(username: string): any[] {
    const data = localStorage.getItem(this.removedKey(username));
    return data ? JSON.parse(data) : [];
  }

  saveRemoved(username: string, items: any[]): void {
    localStorage.setItem(this.removedKey(username), JSON.stringify(items));
  }
}
