import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule,RouterLink],

  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class Button {
  constructor(private _router:Router){}
  @Input() label = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled = false;
  @Input() loading = false;

    @Input() routerLink?: string;
}
