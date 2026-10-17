import { getAssetUrl } from '../utils/assets';
import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, CheckCircle, ChevronRight, ChevronLeft, Play, Pause, ShieldCheck, Heart, Sparkle } from 'lucide-react';

interface RitualStep {
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tip: string;
  duration: string;
  frequency: string;
  image: string;
  badge: string;
}

export const HowToUse: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps: RitualStep[] = [
    {
      number: '01',
      tag: 'STEP 01 • PREPARATION',
      title: 'Dispense & Warm the Oil',
      shortDesc: 'Pour 5 to 10 ml into your palms and warm gently between your hands.',
      fullDesc: 'Pour an appropriate amount of Vazra Hair Oil into the palm of your hand, tailored to your hair length and density. Rub your palms together gently for a few seconds to warm the oil and activate the natural botanical herbs before application.',
      tip: 'Warming the oil slightly between your palms helps release the aromatic coconut and herbal essence, preparing it for deeper absorption into your scalp follicles.',
      duration: '1 - 2 mins',
      frequency: '2-3 times a week',
      image: getAssetUrl('/images/how-to-use-step1.jpg'),
      badge: 'Heat Activation'
    },
    {
      number: '02',
      tag: 'STEP 02 • APPLICATION',
      title: 'Gentle Scalp Massage',
      shortDesc: 'Massage roots and scalp with fingertips in soothing circular motions.',
      fullDesc: 'Using the soft pads of your fingertips (avoid using nails), gently massage your scalp in slow, circular motions for 5 to 10 minutes. Focus on the crown, temples, and nape to stimulate circulation and deliver herbs directly to the roots.',
      tip: 'Circular massage promotes blood circulation to hair follicles and provides a deeply calming, stress-relieving ritual after a busy day.',
      duration: '5 - 10 mins',
      frequency: 'Gentle pressure',
      image: getAssetUrl('/images/how-to-use-step2.jpg'),
      badge: 'Root Stimulation'
    },
    {
      number: '03',
      tag: 'STEP 03 • DEEP NOURISHMENT',
      title: 'Allow Herbs to Absorb',
      shortDesc: 'Leave the oil for at least 1-2 hours, or overnight for intensive care.',
      fullDesc: 'Allow the carefully infused herbal ingredients—Bhringraj, Amla, Methi, and Curry Leaves—to penetrate deep into the hair shafts. For daytime use, keep it for 1 to 2 hours; for intensive root nourishment, wrap your hair and leave overnight.',
      tip: 'Wrapping your hair in a warm damp towel for 10 minutes helps open the cuticle scales slightly, allowing herbs to nourish deep into the roots.',
      duration: '1-2 hrs / Overnight',
      frequency: 'Deep penetration',
      image: getAssetUrl('/images/how-to-use-step3.jpg'),
      badge: 'Herbal Infusion'
    },
    {
      number: '04',
      tag: 'STEP 04 • CLEANSE & GLOW',
      title: 'Rinse with Mild Cleanser',
      shortDesc: 'Wash with a gentle sulfate-free shampoo to reveal radiant shine.',
      fullDesc: 'Rinse thoroughly using lukewarm water and a gentle, mild herbal shampoo. Gently pat dry with a soft microfiber towel without aggressive rubbing to preserve natural hair strength and reveal glossy, frizz-free texture.',
      tip: 'Lukewarm or cool water seals the hair cuticles, locking in moisture and leaving a natural, healthy shine throughout the day.',
      duration: 'Lukewarm rinse',
      frequency: 'Soft & lustrous finish',
      image: getAssetUrl('/images/how-to-use-step4.jpg'),
      badge: 'Silky Gloss & Bounce'
    }
  ];

  // Auto-play ritual carousel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="how-to-use" className="pt-8 sm:pt-12 pb-3 bg-gradient-to-b from-[#fcfbf7] to-[#fbfaf5] relative overflow-hidden select-none">
      
      {/* Subtle Ambient Background Accents & Floating Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-duration:8s]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-duration:10s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            HEADER: Luxury Title with Traditional Ritual Badge
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
            <span>TRADITIONAL 4-STEP RITUAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-vazra-green-950 tracking-tight">
            How to Use Vazra Hair Oil
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans max-w-xl mx-auto leading-relaxed">
            Follow our time-honored, 4-step herbal ritual to nourish your scalp from the roots and restore natural strength and shine.
          </p>

          {/* Interactive Progress Indicators / Step Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {steps.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-vazra-green-950 text-white shadow-md scale-105'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-[#e5dfd1] hover:bg-emerald-50/50'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  activeStep === idx ? 'bg-amber-400 text-gray-950' : 'bg-gray-100 text-gray-700'
                }`}>
                  {s.number}
                </span>
                <span>{s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}</span>
              </button>
            ))}

            {/* Play/Pause Auto Demonstration */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause auto-play' : 'Play auto-presentation'}
              className="p-2 rounded-full bg-white border border-[#e5dfd1] text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors shadow-2xs cursor-pointer ml-1"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-700" /> : <Play className="w-3.5 h-3.5 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            FEATURED INTERACTIVE STAGE:
            Balanced Layout -> Prominent Matter (7 Cols) + Animated Picture (5 Cols)
            ========================================================================= */}
        <div className="mt-6 sm:mt-8 bg-white rounded-3xl border border-[#e5dfd1] shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Prominent Matter (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Step Top Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-serif font-extrabold text-emerald-800 leading-none">
                      {current.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                      {current.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Traditional Method</span>
                  </div>
                </div>

                {/* Main Step Headline & Full Explanation */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-vazra-green-950 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed font-sans">
                    {current.fullDesc}
                  </p>
                </div>

                {/* Timing & Frequency Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/70 text-amber-900 font-semibold border border-amber-200">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Duration: {current.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100/70 text-emerald-900 font-semibold border border-emerald-200">
                    <Sparkle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{current.frequency}</span>
                  </div>
                </div>

                {/* Traditional Pro-Tip Callout Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    <span>💡</span>
                    <span>Ayurvedic Pro-Tip</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                    {current.tip}
                  </p>
                </div>
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  className="text-xs font-semibold text-gray-500 hover:text-emerald-800 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeStep === i ? 'w-7 bg-emerald-700' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      title={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-full bg-vazra-green-950 hover:bg-vazra-green-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <span>{activeStep === steps.length - 1 ? 'Start Over' : 'Next Step'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Reduced Size Animated Picture Container (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
                
                {/* Rotating Dashed Botanical Accent Ring */}
                <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-emerald-500/40 animate-spin [animation-duration:40s] pointer-events-none" />
                
                {/* Soft Glowing Ambient Shadow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-amber-400/20 to-purple-500/20 blur-lg pointer-events-none" />

                {/* The Picture Frame with Gentle Floating Animation */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-stone-100 shadow-xl border border-white/60 animate-float-slow">
                  <img
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover object-center animate-fade-in group-hover:scale-106 transition-transform duration-700"
                  />

                  {/* Gentle Gradient Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Step Number Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/20 shadow-xs">
                      Step {current.number}
                    </span>
                  </div>

                  {/* Floating Feature Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 text-[11px]">
                      {current.badge}
                    </span>
                    <span className="text-amber-300 text-[11px] font-sans">
                      {current.duration}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4-STEP GALLERY OVERVIEW (Compact & Clean with Clickable States)
            ========================================================================= */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-vazra-green-950 flex items-center gap-2">
              <span>Complete Ritual Overview</span>
              <span className="text-xs font-sans font-semibold text-gray-500">(Click any step to view)</span>
            </h3>
            <span className="text-xs font-semibold text-emerald-800 hidden sm:inline">
              ✨ Practice 2–3 times weekly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`group rounded-2xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-600 ring-2 ring-emerald-600/30 shadow-lg -translate-y-1'
                      : 'border-[#e5dfd1] hover:border-emerald-300 hover:shadow-md'
                  }`}
                >
                  {/* Compact Step Thumbnail Photo */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-stone-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    {/* Step Number Badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                        isSelected ? 'bg-amber-400 text-gray-950' : 'bg-black/60 text-white backdrop-blur-sm'
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Timing Badge */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-medium">
                      <span className="flex items-center gap-1 drop-shadow-md">
                        <Clock className="w-3 h-3 text-amber-300" />
                        <span>{step.duration}</span>
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold">
                          Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content - Prominent Matter */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className={`text-sm font-serif font-bold transition-colors leading-snug ${
                        isSelected ? 'text-emerald-800' : 'text-gray-900 group-hover:text-emerald-800'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                        {step.shortDesc}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-medium text-emerald-700">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>{step.badge}</span>
                      </span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CALLOUT: Ritual Frequency & Direct Shop Anchor
            ========================================================================= */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-emerald-900 via-vazra-green-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Recommended Care Frequency</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Apply 2 to 3 Times Weekly for Best Results
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl font-sans">
              Consistency and gentle scalp stimulation allow the 15 herbal ingredients to nourish follicles deeply, promoting healthy growth, shine, and natural thickness.
            </p>
          </div>

          <a
            href="#products"
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer group active:scale-95"
          >
            <span>Order Vazra Hair Oil</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
