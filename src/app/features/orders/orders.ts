import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered';

@Component({
  standalone: true,
  selector: 'app-orders',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './orders.html',
  styleUrls: ['./orders.scss']
})
export class Orders {

  orders = [
    {
      id: 'ORD-10231',
      date: 'Jan 2, 2026',
      total: 120,
      status: 'delivered' as OrderStatus,
      items: 3
    },
    {
      id: 'ORD-10212',
      date: 'Dec 28, 2025',
      total: 85,
      status: 'shipped' as OrderStatus,
      items: 2
    },
    {
      id: 'ORD-10188',
      date: 'Dec 18, 2025',
      total: 45,
      status: 'paid' as OrderStatus,
      items: 1
    }
  ];

  statusLabel(status: OrderStatus) {
    return {
      pending: 'Pending',
      paid: 'Paid',
      shipped: 'Shipped',
      delivered: 'Delivered'
    }[status];
  }
}
