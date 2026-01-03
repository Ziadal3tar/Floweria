import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Customer';
  status: 'Active' | 'Blocked';
  createdAt: string;
}

@Component({
  selector: 'app-users',
    imports: [CommonModule, FormsModule],

  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {

  users: User[] = [
    {
      id: '1',
      name: 'Ahmed Ali',
      email: 'ahmed@mail.com',
      role: 'Admin',
      status: 'Active',
      createdAt: '2024-11-02'
    },
    {
      id: '2',
      name: 'Sara Mohamed',
      email: 'sara@mail.com',
      role: 'Customer',
      status: 'Active',
      createdAt: '2024-12-10'
    },
    {
      id: '3',
      name: 'Omar Hassan',
      email: 'omar@mail.com',
      role: 'Manager',
      status: 'Blocked',
      createdAt: '2025-01-05'
    }
  ];

  selectedUser: User | null = null;
  isDrawerOpen = false;

  openUser(user: User) {
    this.selectedUser = { ...user };
    this.isDrawerOpen = true;
  }

  saveUser() {
    if (!this.selectedUser) return;

    const i = this.users.findIndex(u => u.id === this.selectedUser!.id);
    if (i !== -1) this.users[i] = this.selectedUser;

    this.closeDrawer();
  }

  toggleStatus(user: User) {
    user.status = user.status === 'Active' ? 'Blocked' : 'Active';
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.selectedUser = null;
  }

  trackById(_: number, u: User) {
    return u.id;
  }
}
