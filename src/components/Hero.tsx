import { getAssetUrl } from '../utils/assets';
import React, { useState } from 'react';
import { ArrowRight, Play, X, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Ingredient } from '../types';

export const Hero: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
  const [showAllHerbs, setShowAllHerbs] = useState(false);

  // 10 Core Botanical Ingredients with Scientific Names Prior
  const rotatingHerbs: Ingredient[] = [
    {
      name: 'Phyllanthus emblica (Amla)',
      botanicalName: 'Phyllanthus emblica',
      commonName: 'Amla',
      shortRole: 'Strengthens Roots',
      image: getAssetUrl('/images/ing-amla-hd.jpg'),
      traditionalRole: 'Naturally rich in Vitamin C, traditionally used to nourish the hair follicles and support natural hair strength and shine.',
      icon: '🌿',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: 'Eclipta prostrata (Bhringraj)',
      botanicalName: 'Eclipta prostrata',
      commonName: 'Bhringraj',
      shortRole: 'Promotes Growth',
      image: getAssetUrl('/images/ing-bhringraj-hd.jpg'),
      traditionalRole: 'Known in Ayurveda as the "ruler of hair," traditionally revered for soothing the scalp and activating vitality.',
      icon: '🌱',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Hibiscus rosa-sinensis (Hibiscus)',
      botanicalName: 'Hibiscus rosa-sinensis',
      commonName: 'Hibiscus',
      shortRole: 'Adds Natural Shine',
      image: getAssetUrl('/images/ing-hibiscus-hd.jpg'),
      traditionalRole: 'Packed with natural amino acids that condition hair strands, lending a silky, healthy natural gloss.',
      icon: '🌺',
      badgeColor: 'bg-rose-100 text-rose-800'
    },
    {
      name: 'Cocos nucifera (Coconut)',
      botanicalName: 'Cocos nucifera',
      commonName: 'Coconut',
      shortRole: 'Nourishes Deeply',
      image: getAssetUrl('/images/ing-coconut-hd.jpg'),
      traditionalRole: 'Pure cold-pressed carrier base that deeply penetrates hair cuticles, sealing moisture and preventing dryness.',
      icon: '🥥',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      name: 'Trigonella foenum-graecum (Methi)',
      botanicalName: 'Trigonella foenum-graecum',
      commonName: 'Methi',
      shortRole: 'Reduces Hair Fall',
      image: getAssetUrl('/images/ing-methi-hd.jpg'),
      traditionalRole: 'Contains natural proteins and lecithin that nourish dry scalps, soften coarse strands, and reduce styling friction.',
      icon: '🌾',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Murraya koenigii (Curry Leaves)',
      botanicalName: 'Murraya koenigii',
      commonName: 'Curry Leaves',
      shortRole: 'Prevents Greying',
      image: getAssetUrl('/images/ing-curryleaves-hd.jpg'),
      traditionalRole: 'Rich in antioxidants and beta-carotene, traditionally cooked in oil to help maintain rich, vibrant pigment.',
      icon: '🍃',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    {
      name: 'Azadirachta indica (Neem)',
      botanicalName: 'Azadirachta indica',
      commonName: 'Neem',
      shortRole: 'Purifies Scalp',
      image: getAssetUrl('/images/botanical/azadirachta-indica.jpg'),
      traditionalRole: 'Renowned for maintaining a clean, clear scalp environment free from buildup and seasonal flakiness.',
      icon: '🌿',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      name: 'Bacopa monnieri (Brahmi)',
      botanicalName: 'Bacopa monnieri',
      commonName: 'Brahmi',
      shortRole: 'Calming Roots',
      image: getAssetUrl('/images/botanical/bacopa-monnieri.jpg'),
      traditionalRole: 'Valued for centuries to promote relaxation during scalp massage while softening hair strands.',
      icon: '🌱',
      badgeColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Aloe barbadensis (Aloe Vera)',
      botanicalName: 'Aloe barbadensis',
      commonName: 'Aloe Vera',
      shortRole: 'Soothing Hydration',
      image: getAssetUrl('/images/botanical/aloe-barbadensis.jpg'),
      traditionalRole: 'Supplies gentle hydration and natural proteolytic enzymes that keep the scalp calm, cool, and moisturized.',
      icon: '🌵',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    },
    {
      name: 'Acacia concinna (Shikakai)',
      botanicalName: 'Acacia concinna',
      commonName: 'Shikakai',
      shortRole: 'Gentle Cleanser',
      image: getAssetUrl('/images/botanical/acacia-concinna.jpg'),
      traditionalRole: 'Traditional botanical cleanser that leaves hair silky and manageable without stripping natural oils.',
      icon: '🍂',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
  ];

  return (
    <section id="home" className="relative w-full bg-[#fbfaf5] overflow-hidden select-none">
      
      {/* =========================================================================
          DESKTOP & TABLET VIEW (md: and above):
          Unified, Seamless Master Composition matching user mockup in 2560x1595 HD.
          Contains Hero + Arch + Continuous Side Leaves in ONE single image.
          Zero cut-off. Zero gap.
          ========================================================================= */}
      <div className="hidden md:block relative w-full max-w-[1920px] mx-auto select-none">
        {/* The Master Unified Canvas Image */}
        <img
          src={getAssetUrl("/images/hero-unified-canvas-hd.jpg?v=single_stone_perfect")}
          alt="Vazra Herbal Hair Oil - Stronger, Healthier, Naturally You"
          className="w-full h-auto block select-none pointer-events-none"
          loading="eager"
        />

        {/* 1. Shop Our Oils CTA Hotspot */}
        <a
          href="#products"
          title="Shop Our Oils"
          aria-label="Shop Our Oils"
          className="absolute z-20 cursor-pointer rounded-full transition-all hover:ring-4 hover:ring-purple-500/30 active:scale-95"
          style={{
            left: '7.1%',
            top: '38.0%',
            width: '13.6%',
            height: '5.5%',
          }}
        />

        {/* 2. Watch Our Story Button Hotspot */}
        <button
          onClick={() => setShowStoryModal(true)}
          title="Watch Our Story"
          aria-label="Watch Our Story"
          className="absolute z-20 cursor-pointer rounded-full transition-all hover:ring-4 hover:ring-emerald-500/30 active:scale-95"
          style={{
            left: '22.3%',
            top: '38.0%',
            width: '14.0%',
            height: '5.5%',
          }}
        />

        {/* 3. Four Feature Badges (Links to #ingredients) */}
        <a
          href="#ingredients"
          title="100% Natural Ingredients"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-black/5 transition-colors"
          style={{
            left: '6.2%',
            top: '46.5%',
            width: '8.2%',
            height: '11.5%',
          }}
        />
        <a
          href="#ingredients"
          title="No Harmful Chemicals"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-black/5 transition-colors"
          style={{
            left: '15.3%',
            top: '46.5%',
            width: '8.2%',
            height: '11.5%',
          }}
        />
        <a
          href="#ingredients"
          title="Cruelty Free"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-black/5 transition-colors"
          style={{
            left: '24.3%',
            top: '46.5%',
            width: '8.2%',
            height: '11.5%',
          }}
        />
        <a
          href="#ingredients"
          title="Suitable for All Hair Types"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-black/5 transition-colors"
          style={{
            left: '33.2%',
            top: '46.5%',
            width: '8.2%',
            height: '11.5%',
          }}
        />

        {/* 4. Three Badges on Right Column */}
        <a
          href="#ingredients"
          title="Natural Care"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-white/10 transition-colors"
          style={{
            left: '90%',
            top: '4.8%',
            width: '9%',
            height: '8.5%',
          }}
        />
        <a
          href="#our-story"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-story-window')); }}
          title="Real Results"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-white/10 transition-colors"
          style={{
            left: '90%',
            top: '14%',
            width: '9%',
            height: '8.5%',
          }}
        />
        <a
          href="#our-story"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-story-window')); }}
          title="A Healthier You"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-white/10 transition-colors"
          style={{
            left: '90%',
            top: '23%',
            width: '9%',
            height: '8.5%',
          }}
        />


        {/* Smooth Scroll Target for Navbar & Badges */}
        <div id="ingredients" className="absolute top-[60%] -mt-20 pointer-events-none" />

        {/* 5. Clean, Luxury Botanical Ingredients Display inside Arch (Smooth Infinite Rotating Loop) */}
        <div
          className="absolute z-20 overflow-hidden select-none"
          style={{
            left: '5%',
            right: '5%',
            top: '73.0%',
            height: '21.5%',
          }}
        >
          {/* Subtle Left and Right fade masks for seamless entry and exit */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fbfaf5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fbfaf5] to-transparent z-10 pointer-events-none" />

          {/* Infinite Rotating Marquee Container */}
          <div className="flex items-center h-full animate-marquee-infinite group cursor-pointer">
            {[...rotatingHerbs, ...rotatingHerbs].map((herb, idx) => (
              <div
                key={`desk-herb-${herb.name}-${idx}`}
                onClick={() => setSelectedIngredient(herb)}
                className="flex flex-col items-center text-center mx-5 md:mx-6 shrink-0 group/item transition-all duration-300 hover:-translate-y-2 select-none"
              >
                {/* Circular photographic container with luxury border & glow */}
                <div className="w-[74px] h-[74px] md:w-[84px] md:h-[84px] lg:w-[94px] lg:h-[94px] xl:w-[102px] xl:h-[102px] rounded-full bg-white border-2 border-emerald-600/70 shadow-md group-hover/item:border-amber-400 group-hover/item:shadow-[0_8px_25px_rgba(16,185,129,0.35)] transition-all duration-300 flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-emerald-500/20 group-hover/item:ring-amber-300/40">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover object-center group-hover/item:scale-115 transition-transform duration-500 rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Scientific Botanical Name Prior */}
                <h4 className="mt-2 text-xs md:text-sm font-serif italic font-bold text-gray-900 group-hover/item:text-vazra-purple-700 transition-colors leading-tight">
                  {herb.botanicalName || herb.name}
                </h4>
                {/* Common Name & Short Benefit */}
                <p className="text-[10px] md:text-[11px] text-emerald-800 font-sans font-semibold mt-0.5 leading-tight">
                  {herb.commonName ? `${herb.commonName} • ` : ''}{herb.shortRole}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. "Explore Ingredients ->" Pill Button in Arch */}
        <button
          onClick={() => setShowAllHerbs(true)}
          title="Explore Ingredients"
          className="group absolute z-20 cursor-pointer rounded-full border border-gray-400/80 bg-white/95 hover:bg-gray-900 hover:text-white text-gray-800 font-semibold text-xs px-6 py-2.5 shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-1.5"
          style={{
            left: '50%',
            top: '96.2%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span>Explore Ingredients</span>
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </div>

      {/* =========================================================================
          MOBILE VIEW (md:hidden):
          Responsive layout with zero gap, matching arch, and swipeable carousel.
          ========================================================================= */}
      <div className="md:hidden w-full bg-[#fbfaf5]">
        {/* Mobile Hero Banner */}
        <div className="relative w-full">
          <img
            src={getAssetUrl("/images/hero-mobile-hd.jpg?v=single_stone_perfect")}
            alt="Vazra Herbal Hair Oil - Stronger, Healthier, Naturally You"
            className="w-full h-auto block select-none"
            loading="eager"
          />
        </div>

        {/* Mobile Quick Action Buttons */}
        <div className="px-4 py-3 bg-[#fbfaf5] flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-vazra-purple-700 hover:bg-vazra-purple-800 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
          >
            <span>Shop Our Oils</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={() => setShowStoryModal(true)}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-gray-800 hover:text-vazra-green-800 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-vazra-green-800 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-vazra-green-900 transition-all">
              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
            </div>
            <span>Watch Our Story</span>
          </button>
        </div>

        {/* Mobile Arch Header */}
        <div id="ingredients" className="pt-6 pb-2 px-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
            ROOTED IN NATURE
          </span>
          <h2 className="text-2xl font-display font-bold text-gray-900 mt-1">
            Nature’s Goodness for Beautiful Hair
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Time-tested herbs for stronger, thicker and healthier hair.
          </p>
          <div className="flex justify-center mt-2">
            <span className="text-emerald-700 text-sm">❧</span>
          </div>
        </div>

        {/* Mobile Smooth Infinite Rotating Ingredients Carousel */}
        <div className="relative w-full py-5 overflow-hidden select-none">
          {/* Edge fade masks */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#fbfaf5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#fbfaf5] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-marquee-infinite">
            {[...rotatingHerbs, ...rotatingHerbs].map((herb, idx) => (
              <div
                key={`mob-herb-${herb.name}-${idx}`}
                onClick={() => setSelectedIngredient(herb)}
                className="flex flex-col items-center text-center mx-3.5 shrink-0 active:scale-95 transition-transform cursor-pointer"
              >
                <div className="w-[74px] h-[74px] rounded-full bg-white border-2 border-emerald-600/70 shadow-md overflow-hidden flex items-center justify-center shrink-0 ring-2 ring-emerald-500/20">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover object-center rounded-full"
                    loading="lazy"
                  />
                </div>
                {/* Scientific Botanical Name Prior */}
                <h4 className="mt-1.5 text-xs font-serif italic font-bold text-gray-900 truncate max-w-[125px]">
                  {herb.botanicalName || herb.name}
                </h4>
                {/* Common Name & Short Benefit */}
                <p className="text-[10px] text-emerald-800 font-sans font-semibold mt-0.5 leading-tight truncate max-w-[125px]">
                  {herb.commonName ? `${herb.commonName} • ` : ''}{herb.shortRole}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Explore Button */}
        <div className="pb-8 text-center">
          <button
            onClick={() => setShowAllHerbs(true)}
            className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full border border-gray-400 bg-white hover:bg-gray-900 hover:text-white text-gray-800 font-medium text-xs shadow-2xs"
          >
            Explore Ingredients →
          </button>
        </div>
      </div>

      {/* =========================================================================
          EXPANDED FULL 15 BOTANICAL INGREDIENTS MODAL
          ========================================================================= */}
      {showAllHerbs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setShowAllHerbs(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                100% HERBAL INFUSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mt-1">
                All 15 Botanical Ingredients in Vazra
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Handcrafted from Afzal Bee’s heritage recipe in Khammam, Telangana. Slow-cooked in cold-pressed pure coconut oil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SITE_CONFIG.ingredients.map((herb, idx) => (
                <div
                  key={herb.name}
                  onClick={() => {
                    setShowAllHerbs(false);
                    setSelectedIngredient(herb);
                  }}
                  className="bg-[#fafbf7] p-4 rounded-2xl border border-gray-200 hover:border-vazra-purple-600 transition-all cursor-pointer flex items-center gap-3.5 group shadow-2xs hover:shadow-xs"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-emerald-600/60 shadow-sm shrink-0 flex items-center justify-center ring-1 ring-emerald-500/20">
                    <img
                      src={herb.image}
                      alt={herb.name}
                      className="w-full h-full object-cover scale-135 rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-800">#{idx + 1}</span>
                      <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                        {herb.shortRole}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif italic font-bold text-gray-900 group-hover:text-vazra-purple-700 transition-colors truncate">
                      {herb.botanicalName || herb.name}
                    </h4>
                    {herb.commonName && (
                      <div className="text-[11px] font-sans font-semibold text-emerald-800 -mt-0.5">
                        Common: {herb.commonName}
                      </div>
                    )}
                    <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                      {herb.traditionalRole}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setShowAllHerbs(false)}
                className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white rounded-full font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Ingredients List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SINGLE INGREDIENT DETAIL MODAL
          ========================================================================= */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pt-2">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-lg flex items-center justify-center ring-2 ring-emerald-500/20">
                <img
                  src={selectedIngredient.image}
                  alt={selectedIngredient.name}
                  className="w-full h-full object-cover scale-135 rounded-full"
                />
              </div>
              <h3 className="mt-3 text-2xl font-serif italic font-bold text-gray-900">
                {selectedIngredient.botanicalName || selectedIngredient.name}
              </h3>
              {selectedIngredient.commonName && (
                <div className="text-sm font-sans font-semibold text-emerald-900 mt-1">
                  Common Name: <span className="text-gray-900 font-bold">{selectedIngredient.commonName}</span>
                </div>
              )}
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

      {/* =========================================================================
          WATCH OUR STORY MODAL
          ========================================================================= */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-emerald-100">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-vazra-purple-700">
                Our Heritage & Roots
              </span>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                The Vazra Journey: From Afzal Bee’s Kitchen
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Prepared with love and generations of traditional herbal wisdom in Ballepalli, Khammam, Telangana.
                Our mother, Afzal Bee, simmered 15 time-tested botanicals in pure cold-pressed coconut oil.
              </p>
              <div className="bg-[#f7f9f4] p-4 rounded-2xl border border-emerald-100 text-xs text-gray-700 space-y-2">
                <p className="font-semibold text-vazra-green-900">✨ What makes Vazra genuine:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Small batch, slow heat extraction</li>
                  <li>Zero mineral oils, parabens, or artificial scents</li>
                  <li>Trusted by regular patrons across Telangana and Andhra Pradesh</li>
                </ul>
              </div>
              <div className="pt-2 flex justify-end">
                <a
                  href="#products"
                  onClick={() => setShowStoryModal(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-vazra-purple-700 hover:bg-vazra-purple-800 shadow-sm cursor-pointer"
                >
                  Explore Our Herbal Oils →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
