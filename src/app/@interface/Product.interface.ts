import { MOCK_PRODUCT_CARACTERISTICS, ProductCaractristics } from "./ProductCaracteristics.interface";

export interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  caracteristics: ProductCaractristics[];
}


export const MOCK_PRODUCT: Product = {
  name: '',
  price: 0,
  image: '',
  description: '',
  caracteristics: [MOCK_PRODUCT_CARACTERISTICS],
}
