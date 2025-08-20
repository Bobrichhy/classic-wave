import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '../store/cartStore';
import { Product } from '../types/product';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onViewSeries?: (product: Product) => void;
}

export const ProductCard = ({ product, onViewSeries }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart!`);
    setQuantity(1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-black border-yellow-400/20 hover:border-yellow-400/40">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge 
            className={`absolute top-2 right-2 ${
              product.category === 'perfume' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-purple-500 text-white'
            }`}
          >
            {product.category === 'perfume' ? 'Perfume' : 'Body Spray'}
          </Badge>
          {product.hasSeries && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
              Series Available
            </Badge>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-yellow-400">
              {formatPrice(product.price)}
            </span>
            <Badge variant="outline" className="text-gray-300 border-gray-600">
              {product.quantity} in stock
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 space-y-3">
        {product.hasSeries && (
          <Button
            onClick={() => onViewSeries?.(product)}
            variant="outline"
            className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Series
          </Button>
        )}
        
        <div className="flex items-center space-x-2 w-full">
          <div className="flex items-center border border-gray-600 rounded-md">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-yellow-400 hover:text-black hover:bg-yellow-400"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-3 py-1 text-white min-w-[40px] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
              className="text-yellow-400 hover:text-black hover:bg-yellow-400"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};