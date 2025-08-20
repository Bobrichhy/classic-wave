import { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, SeriesProduct } from '../types/product';
import { useCartStore } from '../store/cartStore';
import { toast } from 'sonner';

interface SeriesModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SeriesModal = ({ product, isOpen, onClose }: SeriesModalProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const addToCart = useCartStore((state) => state.addToCart);

  const updateQuantity = (productId: string, newQuantity: number, maxQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(maxQuantity, newQuantity))
    }));
  };

  const getQuantity = (productId: string) => quantities[productId] || 1;

  const handleAddToCart = (seriesProduct: SeriesProduct) => {
    const quantity = getQuantity(seriesProduct.id);
    addToCart(seriesProduct, quantity, true, product?.id);
    toast.success(`Added ${quantity} ${seriesProduct.name} to cart!`);
    setQuantities(prev => ({ ...prev, [seriesProduct.id]: 1 }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  if (!product || !product.hasSeries || !product.seriesProducts) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-yellow-400/20">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-yellow-400 mb-2">
            {product.name} Series
          </DialogTitle>
          <p className="text-gray-400">
            Explore all variants in the {product.name} collection
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {product.seriesProducts.map((seriesProduct) => (
            <Card key={seriesProduct.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={seriesProduct.image}
                    alt={seriesProduct.name}
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {seriesProduct.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {seriesProduct.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-yellow-400">
                      {formatPrice(seriesProduct.price)}
                    </span>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {seriesProduct.quantity} left
                    </Badge>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <div className="flex items-center space-x-2 w-full">
                  <div className="flex items-center border border-gray-600 rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(seriesProduct.id, getQuantity(seriesProduct.id) - 1, seriesProduct.quantity)}
                      className="text-yellow-400 hover:text-black hover:bg-yellow-400"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-3 py-1 text-white min-w-[40px] text-center">
                      {getQuantity(seriesProduct.id)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(seriesProduct.id, getQuantity(seriesProduct.id) + 1, seriesProduct.quantity)}
                      className="text-yellow-400 hover:text-black hover:bg-yellow-400"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    onClick={() => handleAddToCart(seriesProduct)}
                    disabled={seriesProduct.quantity === 0}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};