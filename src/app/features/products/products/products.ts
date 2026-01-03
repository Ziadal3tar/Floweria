import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, ProductCard, ScrollRevealDirective],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  showFilters = false;

  products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + '',
    name: `Premium Flower ${i + 1}`,
    price: 30 + i * 5,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    badge:
      i === 0
        ? 'Best Seller'
        : i % 4 === 0
        ? 'New'
        : undefined
  }));


  
}
