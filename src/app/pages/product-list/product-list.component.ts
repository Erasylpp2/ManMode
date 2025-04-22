import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  allProducts: {
    'formal-wear': Product[];
    'casual-wear': Product[];
    'accessories': Product[];
    'seasonal-collection': Product[];
  } = {
    'formal-wear': [
      { name: 'Костюм Classic', image: 'https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG91YmxlJTIwYnJlYXN0ZWQlMjBzdWl0JTIwZm9yJTIwZm9ybWFsJTIwZXZlbnRzfGVufDB8fDB8fHww', price: 35000, description: 'Двубортный костюм для официальных мероприятий', rating: 4.5, link: '#' },
      { name: 'Смокинг Slim', image: 'https://th.bing.com/th/id/OIP.YAIGxOexWFYI-IdctBXcnwHaLQ?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 42000, description: 'Элегантный смокинг с узким кроем', rating: 4.7, link: '#' },
      { name: 'Жилет Premium', image: 'https://th.bing.com/th/id/OIP.De5ksb17w4E-W1wnPlK-LAHaHH?w=207&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 18000, description: 'Тканевый жилет под пиджак', rating: 4.3, link: '#' },
      { name: 'Брюки Classic Black', image: 'https://th.bing.com/th/id/OIP.7YOIRPStkTWoktB8gCwIAgHaJD?w=207&h=253&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 12000, description: 'Классические брюки черного цвета', rating: 4.1, link: '#' },
      { name: 'Рубашка White Collar', image: 'https://media.istockphoto.com/id/469044539/photo/its-time-to-suit-up.jpg?s=1024x1024&w=is&k=20&c=KWOSGjpNqzPbYODPE0b9IKr9hJHUetWNe9u4Jg44rcw=', price: 9000, description: 'Белая рубашка с прямым воротником', rating: 4.6, link: '#' }
    ],
    'casual-wear': [
      { name: 'Футболка Basic', image: 'https://th.bing.com/th/id/OIP.3b8M2Fil_Q8uxIH6QodfIwHaJ3?w=207&h=276&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 4500, description: 'Удобная повседневная футболка', rating: 4.2, link: '#' },
      { name: 'Джинсы Slim Fit', image:'https://th.bing.com/th/id/OIP.cJT5KWz9tavNsf7EqUXJRQAAAA?w=184&h=339&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 10000, description: 'Джинсы синего цвета узкого кроя', rating: 4.5, link: '#' },
      { name: 'Куртка Casual', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246', price: 15000, description: 'Удобная куртка на каждый день', rating: 4.4, link: '#' },
      { name: 'Худи Oversize', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48', price: 8000, description: 'Мягкое худи свободного кроя', rating: 4.6, link: '#' },
      { name: 'Кроссовки Urban', image: 'https://th.bing.com/th/id/OIP.1bRHIKgBZxYl-d37Jkd5PwHaE7?w=297&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 12000, description: 'Легкие кроссовки для повседневного использования', rating: 4.7, link: '#' }
    ],
    'accessories': [
      { name: 'Часы Steel', image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/31115739.jpg?format=preview-large', price: 15000, description: 'Наручные часы из нержавеющей стали', rating: 4.6, link: '#' },
      { name: 'Кожаный ремень', image: 'https://resources.cdn-kaspi.kz/img/m/p/p5c/p71/17281759.png?format=preview-large', price: 7000, description: 'Классический мужской ремень из кожи', rating: 4.5, link: '#' },
      { name: 'Солнцезащитные очки', image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p9a/25033854.jpg?format=preview-large', price: 8000, description: 'Модные очки с УФ-защитой', rating: 4.7, link: '#' },
      { name: 'Кошелек Compact', image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hdb/82262858039326.jpg?format=preview-large', price: 6000, description: 'Компактный кожаный кошелек', rating: 4.4, link: '#' },
      { name: 'Браслет Minimal', image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hd3/85281727971358.jpg?format=gallery-large', price: 3000, description: 'Аксессуар в минималистичном стиле', rating: 4.3, link: '#' }
    ],
    'seasonal-collection': [
      { name: 'Куртка Зима 2025', image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p49/17193392.png?format=gallery-medium', price: 30000, description: 'Тёплая зимняя куртка с капюшоном', rating: 4.8, link: '#' },
      { name: 'Шапка шерстяная', image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h6e/67174788923422.jpg?format=preview-large', price: 3500, description: 'Мягкая шапка из натуральной шерсти', rating: 4.6, link: '#' },
      { name: 'Шарф Grey', image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h03/84553537650718.jpg?format=preview-large', price: 4000, description: 'Серый шарф из кашемира', rating: 4.5, link: '#' },
      { name: 'Пальто Wool Classic', image: 'https://th.bing.com/th/id/OIP.zHC-5ry--_oEtgGbIx0qgQAAAA?w=207&h=298&c=7&r=0&o=5&dpr=1.1&pid=1.7', price: 48000, description: 'Классическое пальто из шерсти', rating: 4.9, link: '#' },
      { name: 'Перчатки Leather', image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/hd3/84978322374686.jpg?format=gallery-medium', price: 6000, description: 'Тёплые кожаные перчатки', rating: 4.7, link: '#' }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category') as keyof typeof this.allProducts;
    const username = localStorage.getItem('username') || '';
    const favorites = this.favoriteService.getFavorites(username);
  
    this.products = (this.allProducts[category] || []).filter(
      p => !favorites.find((fav: any) => fav.name === p.name)
    );
  }
  

  addToFavorites(product: Product) {
    const username = localStorage.getItem('username') || '';
    this.favoriteService.addFavorite(username, product);
  
    this.products = this.products.filter(p => p.name !== product.name); 
  }
  
}

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  link: string;
}
