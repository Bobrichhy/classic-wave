import { Product } from '../types/product';

export const products: Product[] = [
  // Perfumes
  {
    id: 'cotton-club',
    name: 'Cotton Club',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 25,
    description: 'A fresh and clean fragrance with cotton-soft notes that last all day.'
  },
  {
    id: 'emergency',
    name: 'Emergency',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 18,
    description: 'Bold and intense fragrance for those emergency moments when you need to make an impression.'
  },
  {
    id: 'element',
    name: 'Element',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 22,
    description: 'Elemental power in a bottle - sophisticated and mysterious.'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 5500,
    image: '/images/luxuryperfume.jpg',
    category: 'perfume',
    quantity: 15,
    description: 'Luxury redefined with golden notes of elegance and prestige.'
  },
  {
    id: 'matador',
    name: 'Matador',
    price: 4800,
    image: '/images/Matador.jpg',
    category: 'perfume',
    quantity: 20,
    description: 'Bold and confident fragrance inspired by the fearless matador spirit.'
  },
  {
    id: 'alzaafran-mousuff',
    name: 'Alzaafran Mousuff',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 12,
    description: 'Exotic Middle Eastern fragrance with rich saffron and oud notes.'
  },
  {
    id: 'valentino',
    name: 'Valentino',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 8,
    description: 'Designer fragrance with Italian sophistication and romantic appeal.'
  },
  {
    id: 'hug',
    name: 'HUG',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 30,
    description: 'Warm and comforting fragrance that feels like a gentle embrace.'
  },
  {
    id: 'creed',
    name: 'Creed',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 6,
    description: 'Premium luxury fragrance with centuries of craftsmanship tradition.'
  },
  {
    id: 'savage',
    name: 'Savage',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
    category: 'perfume',
    quantity: 14,
    description: 'Wild and untamed fragrance for the modern adventurer.'
  },
  {
    id: 'channel',
    name: 'Channel',
    price: 9500,
    image: '/images/luxuryperfume.jpg',
    category: 'perfume',
    quantity: 5,
    description: 'Iconic French elegance in every spray - timeless and sophisticated.'
  },

  // Body Sprays
  {
    id: 'riggs',
    name: 'Riggs',
    price: 2200,
    image: '/images/Matador.jpg',
    category: 'bodyspray',
    quantity: 40,
    description: 'Fresh and energizing body spray perfect for daily use.'
  },
  {
    id: 'karis',
    name: 'Karis',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 35,
    description: 'Graceful and feminine body spray with floral undertones.'
  },
  {
    id: 'storm',
    name: 'Storm',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 28,
    description: 'Powerful and dynamic fragrance series with multiple variants.',
    hasSeries: true,
    seriesProducts: [
      {
        id: 'storm-tiger',
        name: 'Storm Tiger',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
        quantity: 15,
        description: 'Fierce and bold like a tiger - unleash your wild side.'
      },
      {
        id: 'storm-bear',
        name: 'Storm Bear',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
        quantity: 18,
        description: 'Strong and protective fragrance with earthy undertones.'
      },
      {
        id: 'storm-wolf',
        name: 'Storm Wolf',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
        quantity: 12,
        description: 'Mysterious and loyal - perfect for the pack leader.'
      }
    ]
  },
  {
    id: 'axe',
    name: 'Axe',
    price: 2100,
    image: '/images/luxuryperfume.jpg',
    category: 'bodyspray',
    quantity: 45,
    description: 'Classic masculine body spray that never goes out of style.'
  },
  {
    id: 'chocolate-musk',
    name: 'Chocolate Musk',
    price: 2600,
    image: '/images/Matador.jpg',
    category: 'bodyspray',
    quantity: 25,
    description: 'Sweet and sensual combination of chocolate and musk.'
  },
  {
    id: 'oud',
    name: 'Oud',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 20,
    description: 'Rich and exotic Middle Eastern fragrance with deep woody notes.'
  },
  {
    id: 'explore',
    name: 'Explore',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 32,
    description: 'Adventure awaits with this fresh and invigorating spray.'
  },
  {
    id: 'smart',
    name: 'Smart',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 38,
    description: 'Intelligent fragrance for the modern professional.'
  },
  {
    id: 'bravo',
    name: 'Bravo',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 30,
    description: 'Celebrate your victories with this triumphant fragrance.'
  },
  {
    id: 'confetti',
    name: 'Confetti',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 22,
    description: 'Celebratory fragrance series perfect for special moments.',
    hasSeries: true,
    seriesProducts: [
      {
        id: 'confetti-party',
        name: 'Confetti Party',
        price: 2700,
        image: '/images/luxuryperfume.jpg',
        quantity: 12,
        description: 'Festive and fun fragrance for party nights.'
      },
      {
        id: 'confetti-celebration',
        name: 'Confetti Celebration',
        price: 2700,
        image: '/images/Matador.jpg',
        quantity: 15,
        description: 'Elegant celebration scent for special occasions.'
      },
      {
        id: 'confetti-joy',
        name: 'Confetti Joy',
        price: 2700,
        image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
        quantity: 10,
        description: 'Pure happiness captured in a bottle.'
      }
    ]
  },
  {
    id: 'dear-body',
    name: 'Dear Body',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 35,
    description: 'Gentle and caring fragrance for everyday freshness.'
  },
  {
    id: 'mousuff-spray',
    name: 'Mousuff',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 18,
    description: 'Premium body spray with sophisticated Middle Eastern appeal.'
  },
  {
    id: 'galaxy-s3',
    name: 'Galaxy S III',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 26,
    description: 'Futuristic fragrance that takes you to another galaxy.'
  },
  {
    id: 'aventos',
    name: 'Aventos',
    price: 3100,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop',
    category: 'bodyspray',
    quantity: 20,
    description: 'Adventure-inspired fragrance for the modern explorer.'
  },
  {
    id: '24k',
    name: '24K',
    price: 3500,
    image: '/images/luxuryperfume.jpg',
    category: 'bodyspray',
    quantity: 15,
    description: 'Golden luxury in spray form - pure indulgence.'
  }
];