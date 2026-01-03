import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { Button } from "../../shared/components/button/button";
import { RouterLink } from "@angular/router";
@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule, ScrollRevealDirective, Button, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {

  cartItems = [
    {
      id: '1',
      name: 'Luxury Red Roses',
      price: 65,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
    },
    {
      id: '2',
      name: 'White Lily Bouquet',
      price: 40,
      qty: 2,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
    }
  ];

  get subtotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }

  shipping = 10;

  get total() {
    return this.subtotal + this.shipping;
  }

  increase(item: any) {
    item.qty++;
  }

  decrease(item: any) {
    if (item.qty > 1) item.qty--;
  }

  remove(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}
