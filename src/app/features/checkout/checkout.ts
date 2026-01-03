import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss']
})
export class Checkout {

  paymentMethod: 'card' | 'cod' = 'card';

  subtotal = 145;
  shipping = 10;

  get total() {
    return this.subtotal + this.shipping;
  }

  placeOrder() {
    alert('Order placed successfully (mock)');
  }
}
