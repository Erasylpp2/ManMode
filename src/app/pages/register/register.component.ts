import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:8000/api/register/', {
      username: this.username,
      password: this.password
    }).subscribe(
      res => alert('Регистрация успешна'),
      err => alert('Ошибка при регистрации')
    );
  }
}
