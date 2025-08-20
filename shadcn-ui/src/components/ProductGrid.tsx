import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewSeries: (product: Product) => void;
}

export const ProductGrid = ({ products, onViewSeries }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-4">No products found</div>
        <p className="text-gray-500">Try adjusting your category filter</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewSeries={onViewSeries}
        />
      ))}
    </div>
  );
};