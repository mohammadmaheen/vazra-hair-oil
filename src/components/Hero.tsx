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
      name: 'Nigella sativa (Kalonji)',
      botanicalName: 'Nigella sativa',
      commonName: 'Kalonji',
      shortRole: 'Follicle Nourishment',
      image: getAssetUrl('/images/botanical/nigella-sativa.jpg'),
      traditionalRole: 'Cold-pressed black seed oil packed with natural fatty acids that deeply invigorate roots and restore bounce.',
      icon: '✨',
      badgeColor: 'bg-stone-100 text-stone-800'
    },
  ];

  return (
    <section id="home" className="relative w-full bg-[#fbfaf5] overflow-hidden select-none">
      
      {/* =========================================================================
          DESKTOP & TABLET VIEW (md: and above):
          - Master clean photography backdrop with authentic Vazra bottle on stone pedestal.
          - 100% REAL CRISP VECTOR HTML/CSS TYPOGRAPHY, BUTTONS & BADGES (ZERO BLUR).
          - Matching reference layout with 1:1 precision.
          ========================================================================= */}
      <div className="hidden md:block relative w-full max-w-[1920px] mx-auto select-none">
        {/* The Pristine Clean Photographic Backdrop Image */}
        <img
          src={getAssetUrl('/images/hero-clean-backdrop-hd.jpg?v=clean2')}
          alt="Vazra Herbal Hair Oil - Stronger, Healthier, Naturally You"
          className="w-full h-auto block select-none pointer-events-none"
          loading="eager"
        />

        {/* 1. Header Pill: "PURE HERBAL CARE" */}
        <div
          className="absolute z-20 flex items-center gap-1.5"
          style={{ left: '6.8%', top: '8.5%' }}
        >
          <span className="text-[11px] sm:text-[12px] md:text-[13px] font-sans font-extrabold uppercase tracking-[0.26em] text-[#345d47]">
            PURE HERBAL CARE
          </span>
        </div>

        {/* 2. Main Headline: "Stronger, Healthier, Naturally You" */}
        <div
          className="absolute z-20 space-y-0.5"
          style={{ left: '6.8%', top: '11.8%' }}
        >
          <h1 className="font-display font-bold text-[#1c2a21] leading-[1.04] tracking-[-0.02em] text-[34px] sm:text-[44px] md:text-[54px] lg:text-[68px] xl:text-[82px] 2xl:text-[90px] drop-shadow-xs">
            <span>Stronger,</span><br />
            <span>Healthier,</span><br />
            <span className="font-serif italic font-normal text-[#59267c] hover:text-[#451b62] transition-colors">
              Naturally You
            </span>
          </h1>
        </div>

        {/* 3. Subtitle */}
        <div
          className="absolute z-20"
          style={{ left: '6.8%', top: '30.8%' }}
        >
          <p className="font-sans font-medium text-[#33463a] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] leading-relaxed max-w-sm sm:max-w-md">
            Traditional herbs. Modern care.<br />
            For hair that tells your story.
          </p>
        </div>

        {/* 4. CTA Action Buttons */}
        <div
          className="absolute z-20 flex items-center gap-3 sm:gap-4"
          style={{ left: '6.8%', top: '37.8%' }}
        >
          {/* Shop Our Oils Button */}
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-[15px] font-sans font-bold text-white bg-gradient-to-r from-[#59267c] to-[#451b62] hover:from-[#481d66] hover:to-[#36134f] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Shop Our Oils</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Watch Our Story Button */}
          <button
            onClick={() => setShowStoryModal(true)}
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 py-2 text-xs sm:text-sm md:text-[15px] font-sans font-semibold text-[#1c2a21] hover:text-[#59267c] transition-colors cursor-pointer active:scale-95"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1b3d2b] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#59267c] transition-all shadow-sm">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white ml-0.5" />
            </div>
            <span>Watch Our Story</span>
          </button>
        </div>

        {/* 5. Four Circular Feature Badges */}
        <div
          className="absolute z-20 flex items-start gap-4 sm:gap-6 md:gap-7 lg:gap-8"
          style={{ left: '6.8%', top: '46.2%' }}
        >
          {/* Badge 1: 100% Natural Ingredients */}
          <a href="#ingredients" className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full border border-[#1c2a21]/80 bg-white/60 backdrop-blur-xs flex items-center justify-center group-hover:border-[#59267c] group-hover:bg-white group-hover:shadow-md transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1c2a21] group-hover:text-[#59267c] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-sans font-semibold text-[#1c2a21] leading-tight max-w-[70px] sm:max-w-[85px] group-hover:text-[#59267c] transition-colors">
              100% Natural<br />Ingredients
            </span>
          </a>

          {/* Badge 2: No Harmful Chemicals */}
          <a href="#ingredients" className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full border border-[#1c2a21]/80 bg-white/60 backdrop-blur-xs flex items-center justify-center group-hover:border-[#59267c] group-hover:bg-white group-hover:shadow-md transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1c2a21] group-hover:text-[#59267c] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.31L4.62 18.6A2 2 0 0 0 6.38 21h11.24a2 2 0 0 0 1.76-2.4L14 9.31V2" />
                <path d="M8.5 2h7" />
                <path d="M7 16h10" />
              </svg>
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-sans font-semibold text-[#1c2a21] leading-tight max-w-[70px] sm:max-w-[85px] group-hover:text-[#59267c] transition-colors">
              No Harmful<br />Chemicals
            </span>
          </a>

          {/* Badge 3: Cruelty Free */}
          <a href="#ingredients" className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full border border-[#1c2a21]/80 bg-white/60 backdrop-blur-xs flex items-center justify-center group-hover:border-[#59267c] group-hover:bg-white group-hover:shadow-md transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1c2a21] group-hover:text-[#59267c] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-sans font-semibold text-[#1c2a21] leading-tight max-w-[70px] sm:max-w-[85px] group-hover:text-[#59267c] transition-colors">
              Cruelty<br />Free
            </span>
          </a>

          {/* Badge 4: Suitable for All Hair Types */}
          <a href="#ingredients" className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full border border-[#1c2a21]/80 bg-white/60 backdrop-blur-xs flex items-center justify-center group-hover:border-[#59267c] group-hover:bg-white group-hover:shadow-md transition-all">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1c2a21] group-hover:text-[#59267c] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m4.5 3a4.5 4.5 0 1 1-4.5 4.5M16.5 12H15m-7.5 0a4.5 4.5 0 1 0 4.5 4.5M9 12h3m0 0v3" />
              </svg>
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-sans font-semibold text-[#1c2a21] leading-tight max-w-[70px] sm:max-w-[85px] group-hover:text-[#59267c] transition-colors">
              Suitable for<br />All Hair Types
            </span>
          </a>
        </div>

        {/* 6. Three Badges on Right Column (Interactive Hotspots with Smooth Hover) */}
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
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-story-window'));
          }}
          title="Real Results"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-white/10 transition-colors"
          style={{
            left: '90%',
            top: '15.5%',
            width: '9%',
            height: '8.5%',
          }}
        />
        <a
          href="#our-story"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-story-window'));
          }}
          title="A Healthier You"
          className="absolute z-20 cursor-pointer rounded-xl hover:bg-white/10 transition-colors"
          style={{
            left: '90%',
            top: '26.2%',
            width: '9%',
            height: '8.5%',
          }}
        />

        {/* 7. Bottom Curved Archway Header in Real Crisp Typography */}
        <div
          className="absolute z-20 text-center"
          style={{
            left: '50%',
            top: '67.0%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
          }}
        >
          <span className="text-[11px] sm:text-[12px] font-sans font-extrabold uppercase tracking-[0.24em] text-[#345d47]">
            ROOTED IN NATURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-display font-bold text-[#1c2a21] tracking-tight mt-1">
            Nature’s Goodness for Beautiful Hair
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#4d5e53] font-sans mt-1">
            Time-tested herbs for stronger, thicker and healthier hair.
          </p>
          <div className="flex justify-center mt-1.5">
            <span className="text-emerald-700 text-sm">❧</span>
          </div>
        </div>

        {/* 8. Infinite Rotating Botanical Ingredients Marquee (Inside Arch) */}
        <div
          className="absolute z-20 overflow-hidden"
          style={{
            left: '50%',
            top: '83.5%',
            width: '92%',
            height: '14.5%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Edge gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fcfbf7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fcfbf7] to-transparent z-10 pointer-events-none" />

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

        {/* 9. "Explore Ingredients ->" Pill Button in Arch */}
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
          - Clean responsive mobile photographic banner with authentic Vazra bottle.
          - 100% REAL CRISP VECTOR HTML/CSS TYPOGRAPHY, BUTTONS & BADGES (ZERO BLUR).
          - Rotating botanical cards carousel.
          ========================================================================= */}
      <div className="md:hidden w-full bg-[#fbfaf5]">
        {/* Mobile Hero Banner Image */}
        <div className="relative w-full">
          <img
            src={getAssetUrl('/images/hero-mobile-clean.jpg?v=clean2')}
            alt="Vazra Herbal Hair Oil - Stronger, Healthier, Naturally You"
            className="w-full h-auto block select-none"
            loading="eager"
          />
        </div>

        {/* Mobile Crisp Headline & Text */}
        <div className="px-5 pt-4 pb-2 text-center space-y-2">
          <span className="text-[11px] font-sans font-extrabold uppercase tracking-[0.24em] text-[#345d47]">
            PURE HERBAL CARE
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1c2a21] leading-tight">
            Stronger, Healthier,<br />
            <span className="font-serif italic font-normal text-[#59267c]">
              Naturally You
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-[#4d5e53] font-sans max-w-sm mx-auto leading-relaxed">
            Traditional herbs. Modern care. For hair that tells your story.
          </p>
        </div>

        {/* Mobile Action Buttons */}
        <div className="px-4 py-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#59267c] to-[#451b62] hover:from-[#481d66] hover:to-[#36134f] shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            <span>Shop Our Oils</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={() => setShowStoryModal(true)}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-gray-800 hover:text-[#59267c] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-full bg-[#1b3d2b] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#59267c] transition-all">
              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
            </div>
            <span>Watch Our Story</span>
          </button>
        </div>

        {/* Mobile 4 Circular Feature Badges */}
        <div className="px-4 py-3 flex items-center justify-around max-w-sm mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-2xs">
              <span className="text-lg">🌿</span>
            </div>
            <span className="text-[10px] font-sans font-semibold text-gray-800 mt-1 max-w-[65px] leading-tight">
              100% Natural
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-2xs">
              <span className="text-lg">⚗️</span>
            </div>
            <span className="text-[10px] font-sans font-semibold text-gray-800 mt-1 max-w-[65px] leading-tight">
              Chemical Free
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-2xs">
              <span className="text-lg">🤍</span>
            </div>
            <span className="text-[10px] font-sans font-semibold text-gray-800 mt-1 max-w-[65px] leading-tight">
              Cruelty Free
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-2xs">
              <span className="text-lg">🌸</span>
            </div>
            <span className="text-[10px] font-sans font-semibold text-gray-800 mt-1 max-w-[65px] leading-tight">
              All Hair Types
            </span>
          </div>
        </div>

        {/* Mobile Arch Header */}
        <div id="ingredients" className="pt-6 pb-2 px-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#345d47]">
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
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fbfaf5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fbfaf5] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-marquee-infinite">
            {[...rotatingHerbs, ...rotatingHerbs].map((herb, idx) => (
              <div
                key={`mob-herb-${herb.name}-${idx}`}
                onClick={() => setSelectedIngredient(herb)}
                className="flex flex-col items-center text-center mx-3.5 shrink-0 select-none cursor-pointer group active:scale-95 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-emerald-500 shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                {/* Botanical Name Prior */}
                <h4 className="mt-1.5 text-xs font-serif italic font-bold text-gray-900 leading-tight">
                  {herb.botanicalName || herb.name}
                </h4>
                <p className="text-[9px] text-emerald-800 font-sans font-semibold mt-0.5 leading-tight">
                  {herb.commonName ? `${herb.commonName} • ` : ''}{herb.shortRole}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile "Explore Ingredients ->" Button */}
        <div className="pb-6 text-center">
          <button
            onClick={() => setShowAllHerbs(true)}
            className="px-6 py-2.5 rounded-full border border-gray-400 bg-white hover:bg-gray-900 hover:text-white text-gray-800 font-semibold text-xs shadow-xs transition-colors cursor-pointer"
          >
            <span>Explore Ingredients →</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE INGREDIENT DETAIL MODAL
          ========================================================================= */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-emerald-100 relative overflow-hidden animate-scale-in">
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-200 shrink-0 shadow-xs">
                <img src={selectedIngredient.image} alt={selectedIngredient.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  100% Traditional Botanical
                </span>
                <h3 className="text-xl font-display font-bold text-gray-900 mt-1">
                  {selectedIngredient.name}
                </h3>
                <p className="text-xs text-emerald-700 font-semibold">
                  {selectedIngredient.shortRole}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-600 leading-relaxed font-sans border-t border-gray-100 pt-3">
              <p>{selectedIngredient.traditionalRole}</p>
              <div className="p-3 rounded-xl bg-[#f8faf6] border border-[#e4ede0] flex items-center gap-2 text-emerald-900 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hand-infused into pure cold-pressed coconut oil.</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedIngredient(null)}
              className="w-full mt-5 py-2.5 rounded-full bg-vazra-purple-700 hover:bg-vazra-purple-800 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          ALL 15 HERBS CATALOG MODAL
          ========================================================================= */}
      {showAllHerbs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 shrink-0">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-emerald-700">
                  COMPLETE BOTANICAL FORMULA
                </span>
                <h3 className="text-2xl font-display font-bold text-gray-900 mt-0.5">
                  15 Time-Tested Ayurvedic Herbs
                </h3>
              </div>
              <button
                onClick={() => setShowAllHerbs(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pr-1">
              {SITE_CONFIG.ingredients.map((herb, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#f9fbf7] border border-[#e5ece2] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shrink-0 border border-emerald-100">
                    <img src={herb.image} alt={herb.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-serif italic font-bold text-gray-900 truncate">{herb.botanicalName || herb.name}</h4>
                    <p className="text-[10px] text-gray-500 truncate">{herb.commonName ? `${herb.commonName} • ` : ''}{herb.shortRole}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end shrink-0">
              <button
                onClick={() => setShowAllHerbs(false)}
                className="px-6 py-2 rounded-full bg-vazra-purple-700 hover:bg-vazra-purple-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          WATCH OUR STORY VIDEO / MODAL
          ========================================================================= */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#1a0520] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-purple-400/30 relative">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-300 bg-purple-900/60 px-3 py-1 rounded-full border border-purple-400/30">
              TRADITIONAL HERITAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
              From Our Kitchen in Khammam
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 mt-2 font-sans leading-relaxed">
              Vazra Hair Oil is born from a traditional formula prepared by our mother, Afzal Bee. Slow-infused in cold-pressed coconut oil with 15 hand-selected herbal botanicals — no artificial silicones, mineral oil, or fake claims.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#our-story"
                onClick={() => {
                  setShowStoryModal(false);
                  window.dispatchEvent(new CustomEvent('open-story-window'));
                }}
                className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Read Full Story →
              </a>
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
