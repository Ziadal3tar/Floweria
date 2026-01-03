import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-quick-view',
  standalone: true,
  templateUrl: './quick-view.html',
  styleUrls: ['./quick-view.scss'],
  imports: [Button]

})
export class QuickView {

  @Input() name!: string;
  @Input() price!: number;
  @Input() image!: string;

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
