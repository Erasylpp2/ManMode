import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  newOrder = {
    product: '',
    quantity: 1
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getUserOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Ошибка при получении заказов:', err);
      }
    });
  }

  createOrder(): void {
    if (!this.newOrder.product || this.newOrder.quantity < 1) {
      alert('Пожалуйста, введите корректные данные для заказа.');
      return;
    }

    this.orderService.createOrder(this.newOrder).subscribe({
      next: () => {
        this.loadOrders();
        this.newOrder = { product: '', quantity: 1 };
      },
      error: (err) => {
        console.error('Ошибка при создании заказа:', err);
        alert('Ошибка при создании заказа. Убедитесь, что вы вошли в систему и продукт существует.');
      }
    });
  }
}
