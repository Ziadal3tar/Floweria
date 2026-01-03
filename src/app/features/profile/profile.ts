import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
type Section =
  | 'overview'
  | 'account'
  | 'addresses'
  | 'security'
  | 'payments'
  | 'preferences';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  activeSection: Section = 'overview';

  user = {
    name: 'Mustafa Ali',
    email: 'mustafa@email.com',
    phone: '+20 100 123 4567',
    ordersCount: 8,
    lastOrder: 'ORD-10231'
  };

  addresses = [
    {
      id: 1,
      label: 'Home',
      address: '12 Garden St, Cairo, Egypt',
      default: true
    },
    {
      id: 2,
      label: 'Work',
      address: 'Smart Village, Giza',
      default: false
    }
  ];

  setSection(section: Section) {
    this.activeSection = section;
  }

  logout() {
    alert('Logged out (mock)');
  }
}
