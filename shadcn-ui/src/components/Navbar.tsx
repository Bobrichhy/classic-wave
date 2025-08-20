import { useState } from 'react';
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '../store/cartStore';
import { CartDrawer } from './CartDrawer';

interface NavbarProps {
  onCategoryChange: (category: 'all' | 'perfume' | 'bodyspray') => void;
  currentCategory: string;
}

export const Navbar = ({ onCategoryChange, currentCategory }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const navItems = [
    { label: 'All Products', value: 'all' as const },
    { label: 'Perfumes', value: 'perfume' as const },
    { label: 'Body Sprays', value: 'bodyspray' as const },
  ];

  return (
    <>
      <nav className="bg-black text-gold-400 shadow-lg sticky top-0 z-50 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-yellow-400" />
              <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Classic Wave
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onCategoryChange(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentCategory === item.value
                      ? 'bg-yellow-400/20 text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black hover:bg-yellow-500">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-yellow-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-yellow-400/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      onCategoryChange(item.value);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      currentCategory === item.value
                        ? 'bg-yellow-400/20 text-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};