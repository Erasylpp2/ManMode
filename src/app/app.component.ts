import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './pages/order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LoginComponent, RegisterComponent, HeaderComponent, HttpClientModule, CategoryComponent , ProductListComponent, HomeComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn = false;
  username = '';
  showLogin = false;
  showRegister = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }
  
  checkAuthStatus(): void {
    const token = this.authService.getToken();
    this.isLoggedIn = !!token;
    if (this.isLoggedIn) {
      this.username = this.authService.getUsername() || 'Пользователь';
    }
  }
  

  decodeToken(token: string): any {
    try {
      const payloadBase64 = token.split('.')[1];
      return JSON.parse(atob(payloadBase64));
    } catch (e) {
      console.error('Ошибка при декодировании токена', e);
      return null;
    }
  }

  toggleLogin(): void {
    this.showLogin = !this.showLogin;
    this.showRegister = false;
  }

  toggleRegister(): void {
    this.showRegister = !this.showRegister;
    this.showLogin = false;
  }

  onLoginSuccess(token: string): void {
    this.authService.saveToken(token);
    this.checkAuthStatus();
    this.showLogin = false;
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.username = '';
  }
}
