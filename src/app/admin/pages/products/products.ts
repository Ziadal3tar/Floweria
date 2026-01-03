import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductVariant } from '../../../shared/models/product-variant';

export interface Product {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Draft';
  price: number;
  stock: number;
  variants: ProductVariant[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

  isDrawerOpen = false;
  isEditMode = false;

  products: Product[] = [
    {
      id: '1',
      name: 'Red Roses',
      description: 'Red Roses',
      status: 'Active',
      price: 45,
      stock: 120,
      variants: [
        {
          id: 'v1',
          attributes: { color: 'Red', size: 'Small' },
          sku: 'RR-R-S',
          price: 45,
          stock: 120,
          image: '',
          expanded: false
        }
      ]
    },
    {
      id: '2',
      name: 'White Lilies',
      description: 'White Lilies',
      status: 'Draft',
      price: 40,
      stock: 60,
      variants: []
    }
  ];

  currentProduct: Product | null = null;
  selected = new Set<string>();

  /* ================= TABLE ================= */

  get allSelected() {
    return this.selected.size === this.products.length;
  }

  toggleOne(id: string) {
    this.selected.has(id)
      ? this.selected.delete(id)
      : this.selected.add(id);
  }

  toggleAll(event: any) {
    event.target.checked
      ? this.products.forEach(p => this.selected.add(p.id))
      : this.selected.clear();
  }

  clearSelection() {
    this.selected.clear();
  }

  /* ================= DRAWER ================= */

  openDrawer() {
    this.isEditMode = false;
    this.currentProduct = {
      id: crypto.randomUUID(),
      name: '',
      description: '',
      status: 'Draft',
      price: 0,
      stock: 0,
      variants: []
    };
    this.isDrawerOpen = true;
  }

  editProduct(product: Product) {
    this.isEditMode = true;
    this.currentProduct = structuredClone(product);
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.currentProduct = null;
  }

  saveProduct() {
    if (!this.currentProduct) return;

    if (this.isEditMode) {
      const index = this.products.findIndex(p => p.id === this.currentProduct!.id);
      this.products[index] = this.currentProduct;
    } else {
      this.products.push(this.currentProduct);
    }

    this.closeDrawer();
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(p => p.id !== id);
    this.selected.delete(id);
  }

  /* ================= VARIANTS ================= */

  addVariant() {
    if (!this.currentProduct) return;

    this.currentProduct.variants.push({
      id: crypto.randomUUID(),
      attributes: { color: '', size: '' },
      sku: '',
      price: 0,
      stock: 0,
      image: '',
      expanded: true
    });
  }

  toggleVariant(variant: ProductVariant) {
    variant.expanded = !variant.expanded;
  }

  deleteVariant(id: string) {
    if (!this.currentProduct) return;
    this.currentProduct.variants =
      this.currentProduct.variants.filter(v => v.id !== id);
  }

  duplicateVariant(variant: ProductVariant) {
    if (!this.currentProduct) return;

    this.currentProduct.variants.push({
      ...structuredClone(variant),
      id: crypto.randomUUID(),
      sku: variant.sku + '-COPY',
      expanded: false
    });
  }

  /* ================= TRACK BY ================= */

  trackProduct(_: number, product: Product) {
    return product.id;
  }

  trackVariant(_: number, variant: ProductVariant) {
    return variant.id;
  }
}
