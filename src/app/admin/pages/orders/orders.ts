
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderItem {
  id: string;
  name: string;
  sku: string;
  image: string;
  price: number;
  quantity: number;
}

interface OrderEvent {
  status: string;
  date: string;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  total: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  timeline: OrderEvent[];
  items: OrderItem[];
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-orders',
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
 orders: Order[] = [
  {
    id: '#10231',
    customer: 'Ahmed Ali',
    email: 'ahmed@mail.com',
    total: 120,
    status: 'Shipped',
    date: '2025-01-12',
    timeline: [
      { status: 'Order Placed', date: 'Jan 12, 10:20' },
      { status: 'Payment Confirmed', date: 'Jan 12, 10:25' },
      { status: 'Shipped', date: 'Jan 13, 14:10' }
    ],
    items: [
      {
        id: 'p1',
        name: 'Red Roses',
        sku: 'RR-001',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
        price: 45,
        quantity: 2
      },
      {
        id: 'p2',
        name: 'Gift Box',
        sku: 'GB-021',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
        price: 30,
        quantity: 1
      }
    ]
  }
];

isConfirmOpen = false;
isCancelling = false;
  selectedOrder: Order | null = null;
  isDrawerOpen = false;

  openOrder(order: Order) {
    this.selectedOrder = order;
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.selectedOrder = null;
  }
  updateStatus(order: Order, newStatus: Order['status']) {
  if (order.status === newStatus) return;

  order.status = newStatus;

  order.timeline.push({
    status: newStatus,
    date: new Date().toLocaleString()
  });
}


openCancelConfirm() {
  this.isConfirmOpen = true;
}

closeCancelConfirm() {
  this.isConfirmOpen = false;
}
confirmCancel(order: any) {
  this.isCancelling = true; // ⬅ مهم جدًا

  // setTimeout(() => {
    this.updateStatus(order, 'Cancelled'); // لما تحب
    this.isCancelling = false;
    this.closeCancelConfirm();
  // }, 1200);
}

addOrder() {
  const newOrder: Order = {
    id: `#${Math.floor(Math.random() * 100000)}`,
    customer: 'New Customer',
    email: 'new@mail.com',
    total: 0,
    status: 'Pending',
    date: new Date().toISOString().split('T')[0],
    timeline: [
      { status: 'Order Created', date: new Date().toLocaleString() }
    ],
    items: []
  };

  this.orders.unshift(newOrder);
  this.openOrder(newOrder);
}

}
