import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '../store/cartStore';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => 
      `${item.product.name} x${item.quantity} - ${formatPrice(item.product.price * item.quantity)}`
    ).join('\n');
    
    const total = formatPrice(getTotalPrice());
    const message = `Hello! I'd like to place an order from Classic Wave Perfume Collection:\n\n${orderDetails}\n\nTotal: ${total}\n\nPlease confirm availability and delivery to UNILAG hostel.`;
    
    const whatsappUrl = `https://wa.me/2348085597947?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-gray-900 to-black border-yellow-400/20">
        <SheetHeader>
          <SheetTitle className="text-yellow-400 text-xl font-bold">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-4">Your cart is empty</p>
                <p className="text-gray-500 text-sm">Add some amazing fragrances to get started!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-start space-x-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold truncate">
                          {item.product.name}
                        </h4>
                        {item.isSeriesItem && (
                          <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-400 mt-1">
                            Series Item
                          </Badge>
                        )}
                        <p className="text-yellow-400 font-bold mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-600 rounded-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-yellow-400 hover:text-black hover:bg-yellow-400 h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-3 py-1 text-white text-sm min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-yellow-400 hover:text-black hover:bg-yellow-400 h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <span className="text-white font-semibold">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total:</span>
                  <span className="text-2xl font-bold text-yellow-400">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>

                <Separator className="bg-gray-700" />

                <div className="space-y-2">
                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Order via WhatsApp
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="text-center text-xs text-gray-400 bg-gray-800/50 p-3 rounded-lg">
                  <p>📱 WhatsApp: 08085597947</p>
                  <p>🏫 Delivering to UNILAG Hostels</p>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};