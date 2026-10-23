import { getAssetUrl } from '../utils/assets';
import { Product, Ingredient, Review, FAQItem } from '../types';

export const SITE_CONFIG = {
  brandName: 'VAZRA',
  brandSuffix: 'NATURAL CARE',
  tagline: 'Traditional Care, Naturally Made.',
  subheading: 'Traditional Care. Herbal Ingredients. Made with Trust.',
  heroDescription: 'A traditional family-inspired herbal hair oil made with carefully selected ingredients and coconut oil, prepared with care for your everyday hair-care routine.',
  
  // Contact & Location Details
  contact: {
    whatsappNumber: '919154413967',
    displayWhatsapp: '+91 91544 13967',
    phoneNumber: '+919154413967',
    displayPhone: '+91 91544 13967',
    email: 'contact@vazrahairoil.com',
    location: {
      addressLine1: 'Ballepalli, Jayanagar Colony',
      city: 'Khammam',
      state: 'Telangana',
      pincode: '507002',
      country: 'India',
      fullAddress: 'Ballepalli, Jayanagar Colony, Khammam, Telangana – 507002'
    }
  },

  // Free shipping threshold
  freeShippingThreshold: 499,
  defaultShippingFee: 50,

  // Products with exact prices from user specification:
  // 100 ml — ₹199
  // Combo: 2 × 100 ml — ₹380
  // 200 ml — ₹399
  // 500 ml — ₹999
  // 1 Litre — ₹1,900
  products: [
    {
      id: 'vazra-100ml',
      name: 'Vazra Herbal Hair Oil',
      subtitle: 'Starter Bottle (100 ml)',
      volume: '100 ml',
      price: 199,
      originalPrice: 249,
      popular: false,
      isCombo: false,
      badge: 'Starter Pack',
      description: 'Ideal for trying Vazra for the first time or taking along on travels. Hand-infused with 15 herbal ingredients in pure coconut oil.',
      benefits: ['Gentle scalp nourishment', 'Convenient travel size', 'Handmade in small batches'],
      image: getAssetUrl('/images/bottle-100ml.png')
    },
    {
      id: 'vazra-combo-2x100ml',
      name: 'Vazra Double Pack Combo',
      subtitle: '2 × 100 ml Value Combo',
      volume: '2 × 100 ml',
      price: 380,
      originalPrice: 498,
      popular: true,
      isCombo: true,
      badge: 'Save ₹118 • Best Value',
      description: 'Our popular two-bottle bundle. Keep one at home and share one with family or gift traditional care to someone you love.',
      benefits: ['Special bundled discount', 'Two portable bottles', 'Perfect for family sharing'],
      image: getAssetUrl('/images/bottle-combo.png')
    },
    {
      id: 'vazra-200ml',
      name: 'Vazra Herbal Hair Oil',
      subtitle: 'Standard Regular Bottle (200 ml)',
      volume: '200 ml',
      price: 399,
      originalPrice: 499,
      popular: true,
      isCombo: false,
      badge: 'Most Popular',
      description: 'The classic bottle designed for consistent weekly hair-care rituals. Sufficient for 1 to 2 months of regular scalp massage.',
      benefits: ['Lasts 6–8 weeks', 'Optimal weekly routine size', 'Deep root conditioning'],
      image: getAssetUrl('/images/bottle-200ml.png')
    },
    {
      id: 'vazra-500ml',
      name: 'Vazra Family Heritage Pack',
      subtitle: 'Family Size (500 ml)',
      volume: '500 ml',
      price: 999,
      originalPrice: 1249,
      popular: false,
      isCombo: false,
      badge: 'Family Size',
      description: 'Economic family bottle prepared for the whole household. Comes in an easy-to-pour container with natural herbal aroma.',
      benefits: ['Best for regular family use', 'Long-lasting value', 'Zero mineral oils & parabens'],
      image: getAssetUrl('/images/bottle-500ml.png')
    },
    {
      id: 'vazra-1000ml',
      name: 'Vazra Herbal Hair Oil (1 Litre)',
      subtitle: 'Jumbo Saver Pack (1 Litre)',
      volume: '1 Litre',
      price: 1900,
      originalPrice: 2490,
      popular: false,
      isCombo: false,
      badge: 'Maximum Value',
      description: 'Our maximum volume pack for dedicated traditional hair care lovers. Maximum savings on our authentic family recipe.',
      benefits: ['Ultimate per-ml savings', 'Stock for several months', 'Pure unadulterated formula'],
      image: getAssetUrl('/images/bottle-1000ml.png')
    }
  ] as Product[],

  // 15 Traditional Herbal Ingredients with Scientific Botanical Names Prior
  ingredients: [
    {
      name: 'Cocos nucifera (Coconut Oil)',
      botanicalName: 'Cocos nucifera',
      commonName: 'Coconut Oil',
      image: getAssetUrl('/images/botanical/cocos-nucifera.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Deep Moisturization',
      traditionalRole: 'Traditional carrier base that deeply penetrates hair cuticles, sealing moisture and preventing dryness.',
      icon: '🥥',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      name: 'Murraya koenigii (Curry Leaves)',
      botanicalName: 'Murraya koenigii',
      commonName: 'Curry Leaves',
      image: getAssetUrl('/images/botanical/murraya-koenigii.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Prevents Premature Greying',
      traditionalRole: 'Rich in antioxidants and beta-carotene, traditionally cooked in oil to help maintain vibrant, healthy hair.',
      icon: '🍃',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    {
      name: 'Phyllanthus emblica (Amla)',
      botanicalName: 'Phyllanthus emblica',
      commonName: 'Amla',
      image: getAssetUrl('/images/botanical/phyllanthus-emblica.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Root Strength & Vitality',
      traditionalRole: 'Naturally rich in Vitamin C, traditionally used to nourish the hair follicles and support natural hair strength and shine.',
      icon: '🌿',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: 'Eclipta prostrata (Bhringraj)',
      botanicalName: 'Eclipta prostrata',
      commonName: 'Bhringraj',
      image: getAssetUrl('/images/botanical/eclipta-prostrata.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Promotes Hair Growth',
      traditionalRole: 'Known in Ayurveda as the "ruler of hair," traditionally revered for soothing the scalp and maintaining healthy texture.',
      icon: '🌱',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Hibiscus rosa-sinensis (Hibiscus)',
      botanicalName: 'Hibiscus rosa-sinensis',
      commonName: 'Hibiscus',
      image: getAssetUrl('/images/botanical/hibiscus-rosa-sinensis.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Natural Sheen & Softness',
      traditionalRole: 'Packed with natural amino acids and mucilage that condition hair strands, lending a silky, healthy natural gloss.',
      icon: '🌺',
      badgeColor: 'bg-rose-100 text-rose-800'
    },
    {
      name: 'Azadirachta indica (Neem)',
      botanicalName: 'Azadirachta indica',
      commonName: 'Neem',
      image: getAssetUrl('/images/botanical/azadirachta-indica.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Purifying Scalp Care',
      traditionalRole: 'Renowned for maintaining a clean, clear scalp environment free from buildup and seasonal flakiness.',
      icon: '🌿',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Trigonella foenum-graecum (Methi)',
      botanicalName: 'Trigonella foenum-graecum',
      commonName: 'Methi',
      image: getAssetUrl('/images/botanical/trigonella-foenum-graecum.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Reduces Hair Fall',
      traditionalRole: 'Contains natural proteins and lecithin that nourish dry scalps, soften coarse strands, and reduce styling friction.',
      icon: '🌾',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Aloe barbadensis (Aloe Vera)',
      botanicalName: 'Aloe barbadensis',
      commonName: 'Aloe Vera',
      image: getAssetUrl('/images/botanical/aloe-barbadensis.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Soothing Hydration',
      traditionalRole: 'Supplies gentle hydration and natural proteolytic enzymes that keep the scalp calm, cool, and moisturized.',
      icon: '🌵',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    },
    {
      name: 'Bacopa monnieri (Brahmi)',
      botanicalName: 'Bacopa monnieri',
      commonName: 'Brahmi',
      image: getAssetUrl('/images/botanical/bacopa-monnieri.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Calming Scalp Massage',
      traditionalRole: 'Valued for centuries to promote relaxation during scalp massage while softening hair strands.',
      icon: '🍃',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: 'Sesamum indicum (Sesame Oil)',
      botanicalName: 'Sesamum indicum',
      commonName: 'Sesame Oil',
      image: getAssetUrl('/images/botanical/sesamum-indicum.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Nutrient-Rich Gloss',
      traditionalRole: 'Traditional nourishing seed extract celebrated for providing deep lipid conditioning and silky texture.',
      icon: '✨',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      name: 'Ricinus communis (Castor Oil)',
      botanicalName: 'Ricinus communis',
      commonName: 'Castor Oil',
      image: getAssetUrl('/images/botanical/ricinus-communis.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Cuticle Sealing',
      traditionalRole: 'High in ricinoleic acid, renowned for sealing moisture into dry hair shafts and boosting thickness feel.',
      icon: '🌱',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Allium cepa (Red Onion)',
      botanicalName: 'Allium cepa',
      commonName: 'Red Onion',
      image: getAssetUrl('/images/botanical/allium-cepa.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Sulfur-Rich Vitality',
      traditionalRole: 'Natural source of organic dietary sulfur that supports keratin vitality and scalp revivification.',
      icon: '🧅',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
    {
      name: 'Allium sativum (Garlic)',
      botanicalName: 'Allium sativum',
      commonName: 'Garlic',
      image: getAssetUrl('/images/botanical/allium-sativum.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Scalp Environment Defense',
      traditionalRole: 'Known in traditional botanical care for invigorating hair follicles and purifying the scalp surface.',
      icon: '🧄',
      badgeColor: 'bg-stone-100 text-stone-800'
    },
    {
      name: 'Salvia rosmarinus (Rosemary)',
      botanicalName: 'Salvia rosmarinus',
      commonName: 'Rosemary',
      image: getAssetUrl('/images/botanical/salvia-rosmarinus.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Micro-Circulation & Luster',
      traditionalRole: 'Supports micro-circulation when massaged gently into the scalp and enhances overall hair sheen.',
      icon: '🌿',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },
    {
      name: 'Nigella sativa (Black Seed)',
      botanicalName: 'Nigella sativa',
      commonName: 'Black Seed',
      image: getAssetUrl('/images/botanical/nigella-sativa.jpg?v=pure_ingredient_no_plate'),
      shortRole: 'Moisture Balance & Resilience',
      traditionalRole: 'A prized traditional seed known for balancing scalp moisture and providing essential fatty acids to roots.',
      icon: '✨',
      badgeColor: 'bg-gray-100 text-gray-800'
    }
  ] as Ingredient[],

  // Honest Story Highlights
  story: {
    motherName: 'Afzal Bee',
    title: 'Rooted in a Mother’s Care, Handcrafted with Honesty',
    subtitle: 'From a family kitchen in Khammam to your home hair-care routine.',
    paragraph1: 'Vazra Hair Oil is a traditional herbal hair oil prepared from a family formula passed down through generations. The idea behind Vazra came from my mother, Afzal Bee, who has been preparing and applying this traditional herbal oil at home for our family for as long as I can remember.',
    paragraph2: 'I started Vazra because I wanted to build something of my own rather than simply continuing in regular jobs. With the blessing and support of my mother and family, I decided to turn that kitchen tradition into an authentic brand that people can rely on.',
    paragraph3: 'The name Vazra stands for our family journey, perseverance, and honest care. We don’t make unrealistic commercial promises or fake guarantees. What we offer is simple: genuine traditional herbs slow-infused in pure coconut oil, prepared with the same love my mother puts into every batch.',
  },

  // How to Use Instructions
  howToUse: [
    {
      step: '01',
      title: 'Take Desired Amount',
      description: 'Pour an appropriate quantity of Vazra Hair Oil into the palm of your hand depending on your hair length.'
    },
    {
      step: '02',
      title: 'Gently Massage Scalp',
      description: 'Using your fingertips, gently massage the oil into your scalp with circular motions for 5 to 10 minutes.'
    },
    {
      step: '03',
      title: 'Let the Herbs Absorb',
      description: 'Leave the oil in your hair for at least 1 to 2 hours before washing, or leave it overnight for deeper conditioning.'
    },
    {
      step: '04',
      title: 'Rinse with Mild Cleanser',
      description: 'Wash thoroughly with a gentle or mild shampoo. Use regularly 2–3 times a week as part of your normal routine.'
    }
  ],

  // Real Customer Reviews (100+ customers tried/trusted)
  reviews: [
    {
      id: 'rev-1',
      name: 'Farhana Begum',
      location: 'Khammam',
      rating: 5,
      comment: 'I know Afzal Bee aunty personally and have used her homemade oil for months. My scalp feels so much lighter, softer, and cooler. So proud to see Vazra launched as a brand!',
      verified: true,
      date: 'Recent Customer'
    },
    {
      id: 'rev-2',
      name: 'Suresh Kumar',
      location: 'Hyderabad',
      rating: 5,
      comment: 'What I appreciate most is the honesty. No loud or fake claims. Just pure herbal aroma and genuine coconut oil nourishment. The 2-pack combo is great value.',
      verified: true,
      date: 'Recent Customer'
    },
    {
      id: 'rev-3',
      name: 'Deepika R.',
      location: 'Warangal',
      rating: 5,
      comment: 'My hair used to feel extremely dry and frizzy after office hours. Massaging with Vazra before bed has made my hair noticeably softer and more manageable.',
      verified: true,
      date: 'Recent Customer'
    },
    {
      id: 'rev-4',
      name: 'Mohammed Rizwan',
      location: 'Khammam',
      rating: 5,
      comment: 'Very authentic product. The herbs are clearly visible in the texture and gentle aroma. Truly feels like an oil made at home with real care.',
      verified: true,
      date: 'Recent Customer'
    }
  ] as Review[],

  // Frequently Asked Questions
  faqs: [
    {
      question: 'What makes Vazra Hair Oil different from commercial oils?',
      answer: 'Vazra is prepared from a traditional family formula created by our mother, Afzal Bee. It combines 15 carefully chosen herbal ingredients infused in pure coconut oil without mineral oil, artificial silicones, parabens, or synthetic fragrance fillers.'
    },
    {
      question: 'Do you guarantee hair regrowth or permanent stoppage of hair fall?',
      answer: 'No, and we firmly believe no genuine brand should. Hair health is influenced by genetics, nutrition, stress, sleep, and overall wellness. Vazra provides honest, time-tested herbal nourishment to strengthen your roots and condition your scalp as part of your healthy lifestyle.'
    },
    {
      question: 'Who can use Vazra Hair Oil?',
      answer: 'Vazra is formulated with gentle, time-tested natural herbs in a coconut oil base, making it suitable for both men and women of all hair types (straight, wavy, curly, or coarse).'
    },
    {
      question: 'How often should I use it for best results?',
      answer: 'We recommend applying Vazra 2 to 3 times a week. Gently massage with your fingertips and leave it on for at least an hour (or overnight) before washing with a mild cleanser.'
    },
    {
      question: 'How can I place an order?',
      answer: 'You can order directly on this website using our WhatsApp button, through our online order form, or by calling us directly. We package each bottle securely and dispatch promptly across Telangana and throughout India.'
    },
    {
      question: 'Where are you located?',
      answer: 'We are proudly based in Ballepalli, Jayanagar Colony, Khammam, Telangana – 507002.'
    }
  ] as FAQItem[]
};

// Helper function to build direct WhatsApp order link
export function buildWhatsAppLink(items: { name: string; volume: string; quantity: number; price: number }[], customerDetails?: { name?: string; phone?: string; address?: string }): string {
  const phone = SITE_CONFIG.contact.whatsappNumber;
  let text = `Hello Vazra Team! 🌿\nI would like to order Vazra Herbal Hair Oil:\n\n`;

  if (items.length > 0) {
    let subtotal = 0;
    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      text += `${index + 1}. ${item.name} (${item.volume}) × ${item.quantity} = ₹${itemTotal}\n`;
    });

    const isFreeShipping = subtotal >= SITE_CONFIG.freeShippingThreshold;
    const shipping = isFreeShipping ? 0 : SITE_CONFIG.defaultShippingFee;
    const finalTotal = subtotal + shipping;

    text += `\nSubtotal: ₹${subtotal}\n`;
    text += `Shipping: ${isFreeShipping ? 'FREE (Eligible)' : `₹${shipping}`}\n`;
    text += `Total Payable: ₹${finalTotal}\n\n`;
  } else {
    text += `I would like to inquire about Vazra Hair Oil products and pricing.\n\n`;
  }

  if (customerDetails?.name) {
    text += `👤 Name: ${customerDetails.name}\n`;
  }
  if (customerDetails?.phone) {
    text += `📞 Phone: ${customerDetails.phone}\n`;
  }
  if (customerDetails?.address) {
    text += `📍 Delivery Address: ${customerDetails.address}\n`;
  }

  text += `\nPlease confirm my order details and share payment options. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
