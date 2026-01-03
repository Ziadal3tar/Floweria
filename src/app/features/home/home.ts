import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  featuredProducts = [
    {
      id: '1',
      name: 'Red Roses Bouquet',
      price: 45,
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df'
    },
    {
      id: '2',
      name: 'White Lily',
      price: 30,
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
    },
    {
      id: '3',
      name: 'Pink Tulips',
      price: 35,
      image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92'
    },
    {
      id: '4',
      name: 'Sunflower',
      price: 25,
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510'
    }
  ];

  categories = [
    { title: 'Roses', image: '🌹' },
    { title: 'Bouquets', image: '💐' },
    { title: 'Gifts', image: '🎁' },
    { title: 'Occasions', image: '🎉' }
  ];
}
