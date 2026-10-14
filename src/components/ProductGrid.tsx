import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SITE_CONFIG } from '../config/siteConfig';

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'bestsellers' | 'volumes'>('bestsellers');

  // Exact 4 bestsellers matching user mockup in Section 3 with crystal-clear HD imagery
  const bestsellerProducts = [
    {
      id: 'prod-original',
      name: 'Original Herbal Hair Oil',
      subtitle: 'For Stronger & Longer Hair',
      rating: '4.8',
      price: 199,
      volume: '100 ml',
      image: '/images/prod-original-hd.jpg',
    },
    {
      id: 'prod-antihairfall',
      name: 'Anti Hair Fall Oil',
      subtitle: 'Reduces Hair Fall Naturally',
      rating: '4.7',
      price: 399,
      volume: '200 ml',
      image: '/images/prod-antihairfall-hd.jpg',
    },
    {
      id: 'prod-scalpcare',
      name: 'Scalp Care Oil',
      subtitle: 'For a Healthy Scalp',
      rating: '4.8',
      price: 399,
      volume: '200 ml',
      image: '/images/prod-scalpcare-hd.jpg',
    },
    {
      id: 'prod-onion',
      name: 'Onion Hair Oil',
      subtitle: 'Boosts Hair Growth',
      rating: '4.6',
      price: 199,
      volume: '100 ml',
      image: '/images/prod-onion-hd.jpg',
    },
  ];

  return (
    <section id="products" className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-[#fbfaf5] relative overflow-hidden select-none">
      
      {/* 
        NATURAL BOTANICAL LEAF ACCENTS:
        Subtle leaves framing top corners with gentle living breeze swaying.
      */}
      <div className="absolute top-0 left-0 w-24 sm:w-36 pointer-events-none opacity-45 select-none animate-sway-left">
        <img
          src="/images/ingredients-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain -translate-y-1/3"
        />
      </div>
      <div className="absolute top-0 right-0 w-24 sm:w-36 pointer-events-none opacity-45 select-none animate-sway-right">
        <img
          src="/images/ingredients-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain -translate-y-1/3"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            HEADER: "Our Bestsellers" matching user mockup exactly
            ========================================================================= */}
        <div className="relative mb-8 sm:mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Our Bestsellers
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
            Loved by thousands, trusted for results.
          </p>

          {/* Top Right: "View All Products →" matching mockup */}
          <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-3 sm:mt-0 flex items-center justify-center">
            <button
              onClick={() => setActiveTab(activeTab === 'bestsellers' ? 'volumes' : 'bestsellers')}
              className="text-xs sm:text-sm font-semibold text-vazra-purple-700 hover:text-vazra-purple-900 transition-colors inline-flex items-center gap-1 cursor-pointer group/tab"
            >
              <span>{activeTab === 'bestsellers' ? 'View All Products' : '← Back to Bestsellers'}</span>
              {activeTab === 'bestsellers' && <span className="group-hover/tab:translate-x-1 transition-transform">→</span>}
            </button>
          </div>
        </div>

        {/* =========================================================================
            5-COLUMN GRID: 4 Product Cards + 1 Tradition Highlight Card
            ========================================================================= */}
        {activeTab === 'bestsellers' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
            
            {/* 4 Bestseller Product Cards */}
            {bestsellerProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#d8e2d4] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Full-bleed Bottle Photo Header with Subtle Zoom */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#f4f7f2]/50 flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle shine sheen on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-4 pt-3 flex-1 flex flex-col justify-between text-center">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-sm sm:text-[15px] font-display font-bold text-gray-900 group-hover:text-vazra-purple-700 transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                      {prod.subtitle}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-1 mt-1.5 text-xs">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-500 font-medium ml-0.5">({prod.rating})</span>
                    </div>

                    {/* Price */}
                    <div className="mt-2">
                      <span className="text-base sm:text-lg font-bold text-gray-900">
                        ₹{prod.price}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Full-Width Purple Pill Button with Micro-interactions */}
                  <div className="mt-3 pt-1">
                    <button
                      onClick={() => addToCart({
                        id: prod.id,
                        name: prod.name,
                        subtitle: prod.subtitle,
                        volume: prod.volume,
                        price: prod.price,
                        description: prod.subtitle,
                        benefits: ['100% Herbal', 'Coconut Oil Base'],
                        image: prod.image,
                      })}
                      className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-vazra-purple-700 hover:bg-vazra-purple-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md hover:shadow-purple-700/25 cursor-pointer group/btn"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:-rotate-12 group-hover/btn:scale-110 transition-transform" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* 5th Column: Deep Purple "Care that feels like a Tradition" Pure HD Card */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-purple-400/40 relative flex flex-col justify-between group h-full min-h-[360px] p-6 bg-gradient-to-br from-[#2c0733] via-[#3d0947] to-[#1a021f] text-white">
              {/* Ambient Velvet Glows */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-purple-300/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                  <span>🌿</span>
                  <span>100% Traditional Care</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                  Care that feels like a Tradition
                </h3>

                <p className="font-serif italic text-amber-200/90 text-sm leading-relaxed">
                  “Passed down from generations of home preparation in Khammam, Telangana.”
                </p>

                <p className="text-xs text-purple-200/80 leading-relaxed font-sans pt-1">
                  Handmade with 15 selected herbs infused in cold-pressed coconut oil.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-purple-400/20 mt-4 flex items-center justify-between">
                <a
                  href="#our-story"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-story-window'));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-xs shadow-md transition-all cursor-pointer group-hover:scale-105 active:scale-95"
                >
                  <span>Read Our Story</span>
                  <span className="text-sm">→</span>
                </a>
                <span className="text-2xl">🌱</span>
              </div>
            </div>

          </div>
        ) : (
          /* Volume / Bottle Size View (100ml - 1L) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-5 border border-[#e2e8de] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#f4f7f2]/50 mb-3 flex items-center justify-center p-3">
                    <img src={prod.image} alt={prod.name} className="h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                    {prod.badge && (
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold shadow-xs">
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-display font-bold text-gray-900 group-hover:text-vazra-purple-700 transition-colors">{prod.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{prod.subtitle}</p>
                  <div className="mt-2 text-lg font-bold text-gray-900">₹{prod.price}</div>
                </div>
                <button
                  onClick={() => addToCart({
                    id: prod.id,
                    name: prod.name,
                    subtitle: prod.subtitle,
                    volume: prod.volume,
                    price: prod.price,
                    description: prod.subtitle,
                    benefits: prod.benefits,
                    image: prod.image,
                  })}
                  className="w-full mt-4 py-2.5 rounded-full text-xs font-semibold text-white bg-vazra-purple-700 hover:bg-vazra-purple-800 active:scale-95 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md hover:shadow-purple-700/25 cursor-pointer group/vbtn"
                >
                  <ShoppingBag className="w-3.5 h-3.5 group-hover/vbtn:-rotate-12 group-hover/vbtn:scale-110 transition-transform" />
                  <span>Add {prod.volume}</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
