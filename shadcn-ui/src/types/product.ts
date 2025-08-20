export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'perfume' | 'bodyspray';
  quantity: number;
  description: string;
  hasSeries?: boolean;
  seriesProducts?: SeriesProduct[];
}

export interface SeriesProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
}

export interface CartItem {
  product: Product | SeriesProduct;
  quantity: number;
  isSeriesItem?: boolean;
  seriesParent?: string;
}