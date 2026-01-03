import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/components/button/button";

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
isLoading = false;

  register() {
  this.isLoading = true;
  setTimeout(() => this.isLoading = false, 1500);  }
}
