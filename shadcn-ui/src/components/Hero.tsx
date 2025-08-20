import { Sparkles, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleWhatsAppContact = () => {
    const message = "Hello! I'm interested in your perfume collection. Can you tell me more about your products?";
    const whatsappUrl = `https://wa.me/2348085597947?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400/8 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-400 mr-3 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Classic Wave
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4">
          Perfume Collection
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover premium fragrances and body sprays delivered directly to your UNILAG hostel. 
          Experience luxury scents that define your signature style.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center text-yellow-400">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium">UNILAG Campus Delivery</span>
          </div>
          <div className="flex items-center text-yellow-400">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">08085597947</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 text-lg"
          >
            Contact via WhatsApp
          </Button>
          <Button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 text-lg"
          >
            Browse Products
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Premium Products</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300">WhatsApp Support</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">Fast</div>
            <div className="text-gray-300">Hostel Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};