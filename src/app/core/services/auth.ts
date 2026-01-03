import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user: any = {
    name: 'Mustafa',
    role: 'admin' // جرّب user وشوف الفرق
  };

  isLoggedIn() {
    return !!this.user;
  }

  isAdmin() {
    return this.user?.role === 'admin';
  }

  logout() {
    this.user = null;
  }
}
