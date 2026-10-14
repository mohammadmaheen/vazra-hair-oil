import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, Sparkles, ChevronRight, ChevronLeft, ArrowDown, ArrowUp, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const StorySection: React.FC = () => {
  // Full-screen dedicated operating window state:
  // When active, covers 100% of the screen (fixed inset-0 z-50).
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [ceoGlided, setCeoGlided] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const isCooldown = useRef(false);
  const touchStartY = useRef(0);
  const isExiting = useRef(false);
  const hasCompletedStory = useRef(false);

  // Lock body scroll with scrollbar compensation when window is open
  useEffect(() => {
    if (isOpen && !isFadingOut) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, isFadingOut]);

  // Open full-screen window
  const openStoryWindow = useCallback((initialStep: 1 | 2 | 3 = 1) => {
    hasCompletedStory.current = false;
    setIsOpen(true);
    setIsFadingIn(true);
    setStep(initialStep);
    setCeoGlided(initialStep >= 2);

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsFadingIn(false);
    }, 60);
  }, []);

  // Monitor scroll arrival from Products section
  // FIXED: Prevents re-opening or redirecting after the story section ends!
  useEffect(() => {
    const handleScrollCheck = () => {
      if (isOpen || isExiting.current) return;
      const anchor = anchorRef.current;
      if (!anchor) return;

      const rect = anchor.getBoundingClientRect();

      // If user has already finished/exited the story section, do NOT trap them!
      if (hasCompletedStory.current) {
        // Only reset if they scroll far back up to Products section
        if (rect.top > window.innerHeight * 1.2) {
          hasCompletedStory.current = false;
        }
        return;
      }

      // When anchor reaches near the center of the viewport
      if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
        openStoryWindow(1);
      }
    };

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollCheck);
  }, [isOpen, openStoryWindow]);

  // Listen for direct navigation events (e.g. from navbar "Our Story" link)
  useEffect(() => {
    const handleOpenEvent = () => {
      openStoryWindow(1);
    };

    window.addEventListener('open-story-window', handleOpenEvent);
    return () => window.removeEventListener('open-story-window', handleOpenEvent);
  }, [openStoryWindow]);

  // Step navigation helper inside the window
  const changeStep = useCallback((targetStep: 1 | 2 | 3) => {
    if (isCooldown.current) return;
    isCooldown.current = true;

    if (targetStep === 2) {
      setStep(2);
      setTimeout(() => {
        setCeoGlided(true);
      }, 70);
    } else if (targetStep === 1) {
      setCeoGlided(false);
      setStep(1);
    } else {
      setStep(targetStep);
    }

    setTimeout(() => {
      isCooldown.current = false;
    }, 700);
  }, []);

  // Exit forward to next section (#how-to-use)
  // FIXED: Immediately unlocks scrolling and scrolls directly to How To Use with zero redirect loops!
  const exitToNextSection = useCallback(() => {
    if (isExiting.current) return;
    isExiting.current = true;
    hasCompletedStory.current = true; // Mark completed so handleScrollCheck won't hijack!

    // 1. Immediately unlock document body
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setIsFadingOut(true);

    // 2. Immediately initiate smooth scroll to #how-to-use
    const nextEl = document.getElementById('how-to-use');
    if (nextEl) {
      const topOffset = nextEl.getBoundingClientRect().top + window.pageYOffset - 15;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }

    // 3. Close window cleanly after cross-fade completes
    setTimeout(() => {
      setIsOpen(false);
      setIsFadingOut(false);
      setTimeout(() => {
        isExiting.current = false;
      }, 1500);
    }, 500);
  }, []);

  // Exit backward to previous section (#products)
  const exitToPrevSection = useCallback(() => {
    if (isExiting.current) return;
    isExiting.current = true;
    hasCompletedStory.current = false;

    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setIsFadingOut(true);

    const prevEl = document.getElementById('why-vazra') || document.getElementById('products');
    if (prevEl) {
      const topOffset = prevEl.getBoundingClientRect().top + window.pageYOffset - 15;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsOpen(false);
      setIsFadingOut(false);
      setTimeout(() => {
        isExiting.current = false;
      }, 1500);
    }, 500);
  }, []);

  // Wheel interceptor inside the full-screen window with smooth step pacing
  const handleWheel = (e: React.WheelEvent) => {
    if (!isOpen || isFadingOut) return;
    e.preventDefault();
    e.stopPropagation();

    if (isCooldown.current) return;

    if (e.deltaY > 15) {
      // Scroll DOWN
      if (step === 1) {
        changeStep(2);
      } else if (step === 2) {
        changeStep(3);
      } else if (step === 3) {
        exitToNextSection();
      }
    } else if (e.deltaY < -15) {
      // Scroll UP
      if (step === 3) {
        changeStep(2);
      } else if (step === 2) {
        changeStep(1);
      } else if (step === 1) {
        exitToPrevSection();
      }
    }
  };

  // Touch swipe support inside the full-screen window
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isOpen || isFadingOut) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 40) {
      // Swipe UP (Scroll DOWN)
      if (step === 1) changeStep(2);
      else if (step === 2) changeStep(3);
      else if (step === 3) exitToNextSection();
    } else if (diff < -40) {
      // Swipe DOWN (Scroll UP)
      if (step === 3) changeStep(2);
      else if (step === 2) changeStep(1);
      else if (step === 1) exitToPrevSection();
    }
  };

  return (
    <>
      {/* 
        ANCHOR IN THE NORMAL DOCUMENT FLOW:
        Placed right after Products. Modern sans typography and balanced font size.
      */}
      <div id="our-story" ref={anchorRef} className="relative w-full py-10 sm:py-12 bg-[#fafbf6] border-y border-[#e2e8de]/80 scroll-mt-6 select-none">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#210226] via-[#33053c] to-[#1a011f] text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-sans font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>THE HERITAGE OF VAZRA</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white tracking-tight">
              About Vazra & Our Story
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 font-sans max-w-lg leading-relaxed">
              A generational formula born from mother Afzal Bee’s kitchen in Khammam, Telangana.
            </p>
          </div>

          <button
            onClick={() => openStoryWindow(1)}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-sans font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95 shrink-0 group"
          >
            <span>Explore Our Story</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 
        =========================================================================
        TRUE FULL-SCREEN DEDICATED WINDOW (Fixed inset-0, z-50, w-screen h-screen)
        - Modern clean sans font style across the entire section.
        - Refined, decreased font sizes for clean readability.
        - Step 1: Centered luxury title & subtitle.
        - Step 2: CEO photo glides to right-middle corner; About Vazra card unfolds.
        - Step 3: Our Story card unfolds; CEO photo stays settled.
        - Step 4 (Next scroll): Releases cleanly to How to Use with ZERO re-trap!
        =========================================================================
      */}
      {isOpen && (
        <div
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`fixed inset-0 z-50 w-screen h-screen bg-gradient-to-b from-[#140118] via-[#28042e] to-[#120117] text-white select-none overflow-hidden flex flex-col justify-between py-5 sm:py-6 px-4 sm:px-8 transition-all duration-500 ease-out font-sans ${
            isFadingOut
              ? 'opacity-0 scale-102 pointer-events-none'
              : isFadingIn
              ? 'opacity-0 scale-98'
              : 'opacity-100 scale-100'
          }`}
        >
          {/* Ambient Velvety Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/12 rounded-full blur-[130px] pointer-events-none" />

          {/* Top Header Bar inside the Window */}
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between border-b border-purple-400/20 pb-2.5 relative z-40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-purple-200">
                {step === 1 && 'STAGE 1 • PROLOGUE (ABOUT VAZRA & OUR STORY)'}
                {step === 2 && 'STAGE 2 • ABOUT VAZRA (MOTHER AFZAL BEE’S RECIPE)'}
                {step === 3 && 'STAGE 3 • OUR STORY (FOUNDER’S JOURNEY & TRUST)'}
              </span>
            </div>

            {/* Stage Switcher Pills & Close */}
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-purple-300/25 text-xs shadow-lg">
                <button
                  onClick={() => changeStep(1)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer font-sans text-xs ${
                    step === 1 ? 'bg-purple-700 text-white font-bold shadow-md' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  1. Prologue
                </button>
                <button
                  onClick={() => changeStep(2)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer font-sans text-xs ${
                    step === 2 ? 'bg-emerald-600 text-white font-bold shadow-md' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  2. About Vazra
                </button>
                <button
                  onClick={() => changeStep(3)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer font-sans text-xs ${
                    step === 3 ? 'bg-amber-400 text-gray-950 font-bold shadow-md' : 'text-purple-200 hover:text-white'
                  }`}
                >
                  3. Our Story
                </button>
              </div>

              <button
                onClick={exitToNextSection}
                title="Close Full Screen"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-purple-300/30 text-purple-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 
            =========================================================================
            STORY ARENA:
            - Step 1: Refined, modern sans title & prologue.
            - Step 2: CEO settles right-middle, About Vazra card unfolds.
            - Step 3: Our Story card unfolds, CEO stays settled.
            =========================================================================
          */}
          <div className="max-w-6xl mx-auto w-full relative z-20 flex-1 flex flex-col justify-center my-auto min-h-[440px]">

            {/* -------------------------------------------------------------
                STEP 1: ONLY "ABOUT VAZRA & OUR STORY" TEXT
                (Modern sans font style, decreased balanced font size)
                ------------------------------------------------------------- */}
            {step === 1 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 my-auto animate-fade-in z-20">
                <div className="max-w-2xl flex flex-col items-center">
                  <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-purple-300/25 text-purple-200 text-[11px] font-sans font-bold uppercase tracking-[0.2em] shadow-lg">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>THE HERITAGE OF VAZRA</span>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight drop-shadow-xl">
                      About Vazra <span className="text-amber-300 font-serif italic font-normal px-1">&</span> Our Story
                    </h2>
                  </div>

                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-lg text-center shadow-xl space-y-1.5">
                    <p className="text-xs sm:text-sm text-purple-100 font-sans leading-relaxed font-normal">
                      A cherished generational formula born from mother <strong className="text-white font-semibold">Afzal Bee’s</strong> kitchen in Khammam, Telangana — crafted into an honest brand of pure, traditional herbal hair care.
                    </p>
                  </div>

                  <div
                    onClick={() => changeStep(2)}
                    className="mt-8 flex flex-col items-center gap-2 text-purple-200 hover:text-amber-300 transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full border border-purple-300/40 group-hover:border-amber-300 flex items-center justify-center animate-bounce shadow-md bg-purple-950/40">
                      <ArrowDown className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-purple-200 group-hover:text-amber-200">
                      Scroll down to settle CEO portrait & unveil About Vazra ↓
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                STEP 2 & STEP 3:
                - Left side: About Vazra Card (Step 2) -> Our Story Card (Step 3).
                - Right side: CEO photo settled at right middle corner.
                ------------------------------------------------------------- */}
            {(step === 2 || step === 3) && (
              <div className="w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 my-auto py-2 z-20">
                
                {/* LEFT COLUMN: CARDS (Modern Sans, decreased balanced typography) */}
                <div className="w-full lg:max-w-xl xl:max-w-2xl relative">
                  
                  {/* CARD 1: ABOUT VAZRA (Step 2) */}
                  {step === 2 && (
                    <div className="w-full rounded-2xl p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-white/14 via-white/8 to-white/4 backdrop-blur-2xl border border-white/20 shadow-xl space-y-3 animate-fade-in relative overflow-hidden transition-all duration-500">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                      
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-sans font-bold uppercase tracking-wider">
                          <span>🌿</span>
                          <span>STAGE 2 • ABOUT VAZRA</span>
                        </div>
                        <span className="text-xs font-sans font-medium text-purple-200">
                          Traditional Kitchen Recipe
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white tracking-tight leading-snug">
                        Rooted in a Mother’s Care
                      </h2>

                      <div className="space-y-2 text-xs sm:text-[13px] text-purple-100 font-sans leading-relaxed">
                        <p>
                          <strong className="text-white font-semibold">Vazra Hair Oil</strong> is a traditional herbal hair oil formulated from a family recipe passed down through generations.
                        </p>

                        <div className="p-3 sm:p-3.5 rounded-xl bg-white/8 backdrop-blur-sm border-l-3 border-emerald-400 space-y-1">
                          <p className="text-amber-100 text-xs sm:text-[13px] font-sans leading-relaxed">
                            “The idea behind Vazra came from my mother, <strong className="text-white font-bold">Afzal Bee</strong>, who has been using and preparing this traditional hair-oil formula at home for decades. Seeing how effective and nourishing her natural remedy was for family and friends, I wanted to take that traditional maternal care and bring it to people through our own brand.”
                          </p>
                        </div>

                        <p>
                          Vazra is carefully prepared in Khammam, Telangana by slow-cooking 15 time-tested botanical herbs in pure cold-pressed coconut oil with zero mineral oils, parabens, or artificial scents.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                        <button
                          onClick={() => changeStep(3)}
                          className="px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-sans font-bold text-xs sm:text-[13px] shadow-md transition-all flex items-center gap-1.5 cursor-pointer group active:scale-95"
                        >
                          <span>Next: Unfold Our Story</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <span className="text-[11px] text-purple-300 font-sans hidden sm:inline">
                          (Scroll down to unfold Our Story ↓)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CARD 2: OUR STORY (Step 3) */}
                  {step === 3 && (
                    <div className="w-full rounded-2xl p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-[#2a0532]/95 via-[#1e0224]/95 to-[#130118]/98 backdrop-blur-2xl border border-amber-300/40 shadow-xl space-y-3 animate-fade-in relative overflow-hidden ring-1 ring-amber-300/40 transition-all duration-500">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent animate-pulse" />

                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/30 text-amber-300 border border-amber-300/30 text-[11px] font-sans font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          <span>STAGE 3 • OUR STORY</span>
                        </div>
                        <span className="text-xs font-sans font-medium text-purple-200">
                          Founder’s Journey & Trust
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-white tracking-tight leading-snug">
                        Building with Honesty and Trust
                      </h2>

                      <div className="space-y-2 text-xs sm:text-[13px] text-purple-100 font-sans leading-relaxed">
                        <p>
                          I started Vazra because I wanted to build something of my own rather than simply continue working standard jobs.
                        </p>

                        <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border-l-3 border-amber-400 space-y-1">
                          <p className="text-amber-100 text-xs sm:text-[13px] font-sans leading-relaxed">
                            “The formula has its roots deep in my mother's traditional preparation. With the wholehearted support and blessings of my family, I decided to turn that family tradition into a proper product and brand.”
                          </p>
                        </div>

                        <p>
                          The name <strong className="text-white font-bold">Vazra</strong> represents strength, generational trust, and our sacred commitment to pure honesty with zero false promises.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                        <button
                          onClick={() => changeStep(2)}
                          className="text-xs text-purple-200 hover:text-white flex items-center gap-1 font-sans font-semibold cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>← Back to About Vazra</span>
                        </button>

                        <button
                          onClick={exitToNextSection}
                          className="px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-sans font-bold text-xs sm:text-[13px] shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                        >
                          <span>Continue to How to Use</span>
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* RIGHT COLUMN: CEO FOUNDER PICTURE */}
                <div
                  className="w-full lg:w-auto flex justify-center shrink-0 transition-all duration-700 ease-out"
                  style={{
                    transform: ceoGlided ? 'translateX(0) scale(1)' : 'translateX(-70px) scale(0.92)',
                    opacity: 1,
                  }}
                >
                  <div className="relative group animate-fade-in">
                    <div className="absolute -inset-4 sm:-inset-5 rounded-full border-2 border-dashed border-amber-300/70 animate-spin [animation-duration:32s] pointer-events-none" />
                    <div className="absolute -inset-2 rounded-full bg-amber-400/25 blur-lg pointer-events-none" />

                    <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-400 via-purple-300 to-emerald-400 shadow-[0_0_40px_rgba(217,119,6,0.4)] relative">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#24052a] relative">
                        <img
                          src="/images/ceo-founder-real.jpg"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (!target.src.includes('ceo-founder.jpg')) {
                              target.src = '/images/ceo-founder.jpg';
                            }
                          }}
                          alt="Founder & CEO - Vazra Natural Care"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-5 pb-2 px-3 text-center">
                          <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-300">
                            Founder & CEO
                          </div>
                          <div className="text-xs sm:text-sm font-sans font-bold text-white leading-tight">
                            Vazra Natural Care
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -top-2 -left-2 bg-white/95 backdrop-blur-md text-gray-900 px-2.5 py-0.5 rounded-full shadow-md border border-white text-[10px] sm:text-[11px] font-sans font-bold flex items-center gap-1">
                      <span>🌿</span>
                      <span>Afzal Bee’s Tradition</span>
                    </div>

                    <div className="absolute -bottom-2 -right-2 bg-white/95 backdrop-blur-md text-gray-900 px-2.5 py-0.5 rounded-full shadow-md border border-white text-[10px] font-sans font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      <span>Khammam, Telangana</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Bar: Direct WhatsApp Link & Step Navigation */}
          <div className="max-w-6xl mx-auto w-full pt-2.5 border-t border-purple-400/20 flex flex-wrap items-center justify-between gap-4 text-xs text-purple-200 relative z-30 font-sans">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (step === 3) changeStep(2);
                  else if (step === 2) changeStep(1);
                  else exitToPrevSection();
                }}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 border border-purple-300/20 flex items-center justify-center transition-colors cursor-pointer"
                title="Previous"
              >
                <ArrowUp className="w-3 h-3" />
              </button>
              <button
                onClick={() => {
                  if (step === 1) changeStep(2);
                  else if (step === 2) changeStep(3);
                  else exitToNextSection();
                }}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 border border-purple-300/20 flex items-center justify-center transition-colors cursor-pointer"
                title="Next"
              >
                <ArrowDown className="w-3 h-3" />
              </button>
              <span className="text-[11px] text-purple-300 ml-1">
                {step === 1 && 'Step 1: About Vazra & Our Story • Scroll down to settle CEO portrait & unveil About Vazra'}
                {step === 2 && 'Step 2: About Vazra • Scroll down to unveil Our Story'}
                {step === 3 && 'Step 3: Our Story • Scroll down to release to How to Use'}
              </span>
            </div>

            <div>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vazra, I loved reading your story and would like to learn more about the oil.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                Message Founder on WhatsApp ({SITE_CONFIG.contact.displayPhone}) →
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
