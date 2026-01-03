import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/components/button/button";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

isLoading = false;

login() {
  this.isLoading = true;
  setTimeout(() => this.isLoading = false, 1500);
}

}
