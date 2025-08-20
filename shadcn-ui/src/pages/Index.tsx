import { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { SeriesModal } from '../components/SeriesModal';
import { products } from '../data/products';
import { Product } from '../types/product';

export default function Index() {
  const [currentCategory, setCurrentCategory] = useState<'all' | 'perfume' | 'bodyspray'>('all');
  const [selectedSeriesProduct, setSelectedSeriesProduct] = useState<Product | null>(null);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (currentCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === currentCategory);
  }, [currentCategory]);

  const handleViewSeries = (product: Product) => {
    setSelectedSeriesProduct(product);
    setIsSeriesModalOpen(true);
  };

  const handleCloseSeriesModal = () => {
    setIsSeriesModalOpen(false);
    setSelectedSeriesProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar 
        onCategoryChange={setCurrentCategory} 
        currentCategory={currentCategory} 
      />
      
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our carefully curated selection of perfumes and body sprays. 
            Each product is selected for quality and lasting fragrance.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-yellow-400">
              {currentCategory === 'all' ? 'All Products' : 
               currentCategory === 'perfume' ? 'Perfumes' : 'Body Sprays'}
            </h3>
            <div className="text-gray-400">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <ProductGrid 
            products={filteredProducts} 
            onViewSeries={handleViewSeries}
          />
        </div>
      </main>

      <footer className="bg-black border-t border-yellow-400/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Classic Wave Perfume Collection</h3>
            <p className="text-gray-400 mb-4">
              Premium fragrances delivered to UNILAG hostels
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <span>📱 WhatsApp: 08085597947</span>
              <span>🏫 UNILAG Campus Delivery</span>
              <span>⚡ Fast & Reliable Service</span>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              © 2024 Classic Wave Perfume Collection. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <SeriesModal
        product={selectedSeriesProduct}
        isOpen={isSeriesModalOpen}
        onClose={handleCloseSeriesModal}
      />
    </div>
  );
}