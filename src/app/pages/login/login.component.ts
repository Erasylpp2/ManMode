import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<string>();  
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ username: this.username, password: this.password }).subscribe(
      (res: any) => {
        this.auth.saveToken(res.access);
        this.loginSuccess.emit(res.access);  
        this.router.navigate(['/']);
      },
      err => alert('Ошибка входа')
    );
  }
}
