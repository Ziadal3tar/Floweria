export interface ProductVariant {
  id: string;
  attributes: {
    color: string;
    size: string;
  };
  sku: string;
  price: number;
  stock: number;
  image?: string;
  expanded?: boolean; // للـ UI فقط
}
