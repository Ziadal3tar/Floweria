import { Component, Input } from '@angular/core';
import { QuickView } from '../quick-view/quick-view';
import { CommonModule } from '@angular/common';
import { Button } from "../button/button";

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss'],
  imports: [QuickView, CommonModule, Button]
})
export class ProductCard {
  @Input() name = '';
  @Input() price = 0;
  @Input() image = '';
  @Input() badge?: string;

  transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';

  onMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    this.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  }

  onLeave() {
    this.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  }
  showQuickView = false;
  openQuickView(event: MouseEvent) {
    event.stopPropagation();
    this.showQuickView = true;
  }

  closeQuickView() {
    this.showQuickView = false;
  }
}
