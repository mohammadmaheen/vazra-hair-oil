import { getAssetUrl } from '../utils/assets';
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Ingredient } from '../types';

export const IngredientsSection: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [showAllHerbs, setShowAllHerbs] = useState(false);

  // Marquee loop: 15 scientific botanical ingredients duplicated for smooth infinite scroll
  const marqueeItems = [...SITE_CONFIG.ingredients, ...SITE_CONFIG.ingredients];

  return (
    <section id="ingredients" className="pt-2 pb-14 sm:pb-20 bg-[#fbfaf5] relative overflow-hidden -mt-2">
      
      {/* 
        BOTANICAL LEAF FRAMING:
        Placed strictly at far left and right edges so they seamlessly continue the edge framing
        without overlapping ingredient circles or text.
      */}
      {/* Left Leaves Branch with Purple Buds */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-16 sm:w-24 md:w-28 lg:w-32 pointer-events-none z-20 select-none opacity-95">
        <img
          src={getAssetUrl('/images/ingredients-leaves-left.png')}
          alt="Natural botanical leaves"
          className="w-full h-auto object-contain block"
        />
      </div>

      {/* Right Leaves Branch with Purple Flower */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-16 sm:w-24 md:w-28 lg:w-32 pointer-events-none z-20 select-none opacity-95">
        <img
          src={getAssetUrl('/images/ingredients-leaves-right.png')}
          alt="Botanical flower and leaves"
          className="w-full h-auto object-contain block"
        />
      </div>

      {/* CONTINUOUS MOVING HORIZONTAL STREAM OF 15 BOTANICAL INGREDIENTS */}
      <div className="relative w-full py-4 overflow-hidden group">
        {/* Soft edge gradient fades for seamless luxury aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fbfaf5] via-[#fbfaf5]/85 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fbfaf5] via-[#fbfaf5]/85 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-8 sm:gap-14 animate-marquee-infinite group-hover:[animation-play-state:paused]">
          {marqueeItems.map((herb, idx) => (
            <div
              key={`${herb.name}-${idx}`}
              onClick={() => setSelectedIngredient(herb)}
              className="flex flex-col items-center text-center cursor-pointer w-28 sm:w-36 shrink-0 transition-transform duration-300 hover:scale-105 select-none"
            >
              {/* Soft Green Circle Container with HD Botanical Photo (Fits circle, no dishes) */}
              <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-[#f4f7f2] border-2 border-[#dce5d6] overflow-hidden shadow-xs group-hover:border-vazra-purple-600 group-hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Scientific Binomial Name Only */}
              <h3 className="mt-2.5 text-xs sm:text-sm font-serif italic font-bold text-gray-900 group-hover:text-vazra-purple-700 transition-colors">
                {herb.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500 font-sans mt-0.5 leading-tight">
                {herb.shortRole}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Ingredients Pill Button (Matching Mockup) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 text-center relative z-10">
        <button
          onClick={() => setShowAllHerbs(!showAllHerbs)}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-gray-400 bg-white/80 hover:bg-gray-900 hover:text-white text-gray-800 font-medium text-xs transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer"
        >
          <span>{showAllHerbs ? 'Hide Full Ingredient List' : 'Explore Ingredients →'}</span>
        </button>

        {/* Expanded 15 Ingredients Grid */}
        {showAllHerbs && (
          <div className="mt-10 p-6 sm:p-8 bg-white rounded-3xl border border-[#e2e8de] shadow-sm animate-fade-in text-left">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900">
                  All 15 Botanical Ingredients in Vazra
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Handcrafted from Afzal Bee’s heritage recipe and slow-infused in pure botanical oil.
                </p>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                100% Herbal Formula
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SITE_CONFIG.ingredients.map((herb, idx) => (
                <div
                  key={herb.name}
                  onClick={() => setSelectedIngredient(herb)}
                  className="bg-[#fafbf7] p-4 rounded-2xl border border-gray-200 hover:border-vazra-purple-600 transition-all cursor-pointer flex items-center gap-3.5 group"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#eef3ea] border border-[#dbe4d5] shrink-0 shadow-2xs">
                    <img
                      src={herb.image}
                      alt={herb.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-800">#{idx + 1}</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                        {herb.shortRole}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif italic font-bold text-gray-900 group-hover:text-vazra-purple-700 transition-colors truncate">
                      {herb.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                      {herb.traditionalRole}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Ingredient Detail Modal */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pt-2">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-300 shadow-md">
                <img
                  src={selectedIngredient.image}
                  alt={selectedIngredient.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-2xl font-serif italic font-bold text-gray-900">
                {selectedIngredient.name}
              </h3>
              <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                {selectedIngredient.shortRole}
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {selectedIngredient.traditionalRole}
              </p>
              <div className="bg-emerald-50/70 p-3 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Pure herbal extract infused in botanical oil without mineral oils, silicones, or parabens.</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedIngredient(null)}
              className="mt-5 w-full py-2.5 bg-vazra-purple-700 hover:bg-vazra-purple-800 text-white rounded-full font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
