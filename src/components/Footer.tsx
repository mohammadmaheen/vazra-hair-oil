import { getAssetUrl } from '../utils/assets';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [subscribed1, setSubscribed1] = useState(false);
  const [subscribed2, setSubscribed2] = useState(false);

  const handleSub1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email1) return;
    setSubscribed1(true);
    setTimeout(() => setSubscribed1(false), 3000);
  };

  const handleSub2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email2) return;
    setSubscribed2(true);
    setTimeout(() => setSubscribed2(false), 3000);
  };

  return (
    <footer className="w-full bg-[#fbfaf5] select-none">
      
      {/* =========================================================================
          1. "JOIN THE VAZRA FAMILY" LILAC PILL BANNER - Exact Match to Mockup
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-2">
        <div className="relative rounded-3xl sm:rounded-full bg-gradient-to-r from-[#e7d6f5] via-[#f2e7f9] to-[#ebdcf7] py-4 sm:py-4.5 px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-4 border border-purple-200/60 shadow-xs overflow-hidden">
          
          {/* Left Leaf Accent */}
          <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 w-16 opacity-50 pointer-events-none select-none">
            <img src={getAssetUrl('/images/ingredients-leaves-left.png')} alt="" className="w-full h-auto object-contain" />
          </div>

          {/* Left: Headline & Subtitle */}
          <div className="text-center lg:text-left space-y-0.5 relative z-10 sm:pl-4">
            <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 leading-tight">
              Join the Vazra Family
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-600 font-sans">
              Get exclusive offers, hair care tips and natural wellness updates.
            </p>
          </div>

          {/* Middle: Email Input & Subscribe Button */}
          <div className="w-full lg:w-auto flex-1 max-w-sm relative z-10">
            {subscribed1 ? (
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs bg-white/90 py-2 px-4 rounded-full justify-center shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSub1} className="flex items-center bg-white rounded-full p-1 border border-purple-200 shadow-2xs">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  className="flex-1 text-xs bg-transparent px-3.5 py-1 text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-vazra-purple-700 hover:bg-vazra-purple-800 text-white rounded-full text-xs font-semibold shadow-xs transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <span className="text-[10px]">→</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Script Callout "Healthy Hair Happier You ♡" with green leaf */}
          <div className="flex items-center gap-2 relative z-10 sm:pr-4">
            <span className="text-xl sm:text-2xl font-serif italic text-vazra-purple-800 font-bold tracking-wide">
              Healthy Hair Happier You ♡
            </span>
            <span className="text-emerald-700 text-lg">🌿</span>
          </div>

          {/* Right Leaf Accent */}
          <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-16 opacity-50 pointer-events-none select-none">
            <img src={getAssetUrl('/images/ingredients-leaves-right.png')} alt="" className="w-full h-auto object-contain" />
          </div>

        </div>
      </div>

      {/* =========================================================================
          2. MAIN DARK FOREST GREEN FOOTER
          ========================================================================= */}
      <div className="w-full bg-[#0d2818] text-[#d6e5dc] pt-12 sm:pt-14 pb-8 sm:pb-10 border-t border-[#091f13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            
            {/* Col 1: Brand & Cursive Sub-label (3 cols) */}
            <div className="lg:col-span-3 space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-5 text-emerald-300" viewBox="0 0 24 20" fill="currentColor">
                  <path d="M12 2C10.5 5.5 8 8 3 9C7 11 9 14 10 19C11 15 13 11 17 9C12 8 13.5 5.5 12 2Z" opacity="0.9" />
                  <path d="M7 6C5.5 8.5 4 10 1 11C4 12 5.5 14 6 18C7 15 8.5 12 11 11C7 10 8.5 8.5 7 6Z" opacity="0.6" />
                  <path d="M17 6C18.5 8.5 20 10 23 11C20 12 18.5 14 18 18C17 15 15.5 12 13 11C17 10 15.5 8.5 17 6Z" opacity="0.6" />
                </svg>
                <span className="text-2xl font-display font-bold tracking-[0.22em] text-white">
                  VAZRA
                </span>
              </div>
              <div className="text-[9px] tracking-[0.28em] font-semibold text-emerald-200 uppercase -mt-0.5 font-sans">
                NATURAL CARE
              </div>

              <div className="pt-2">
                <span className="text-lg font-serif italic text-emerald-200/90 block font-light">
                  Nature's Care For Generations
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-100/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#ingredients" className="hover:text-white transition-colors">Ingredients</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: Customer Care (2 cols) */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Customer Care
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-100/80">
                <li><a href="#how-to-use" className="hover:text-white transition-colors">How to Use</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Return & Support</a></li>
              </ul>
            </div>

            {/* Col 4: Stay Connected & Newsletter (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Stay Connected
              </h4>

              {/* Social Icons matching reference: Instagram, Facebook, YouTube, Pinterest */}
              <div className="flex items-center gap-2.5 text-emerald-200">
                <a href="#" className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center transition-colors" title="Instagram">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center transition-colors" title="Facebook">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center transition-colors" title="YouTube">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/60 hover:bg-emerald-800 flex items-center justify-center transition-colors" title="Pinterest">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.224-.176.271-.406.165-1.499-.69-2.436-2.858-2.436-4.601 0-3.743 2.72-7.182 7.844-7.182 4.118 0 7.318 2.934 7.318 6.858 0 4.093-2.581 7.388-6.163 7.388-1.203 0-2.334-.625-2.722-1.366l-.742 2.828c-.269 1.045-1.001 2.352-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <div className="pt-1">
                <p className="text-[11px] text-emerald-200/90 mb-1.5">
                  Subscribe to our newsletter for exclusive offers
                </p>
                {subscribed2 ? (
                  <div className="text-xs text-emerald-300 font-medium">
                    Subscribed successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSub2} className="flex gap-1.5 items-center bg-white/10 p-1 rounded-full border border-emerald-800">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email2}
                      onChange={(e) => setEmail2(e.target.value)}
                      className="flex-1 text-xs bg-transparent px-3 py-1 text-white placeholder-emerald-300/60 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-7 h-7 rounded-full bg-vazra-purple-700 hover:bg-vazra-purple-800 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Col 5: Far Right Botanical Leaves & "GOOD HAIR BRIGHTER TOMORROW" (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between pt-2">
              <div className="flex items-center gap-3">
                <img
                  src={getAssetUrl('/images/ingredients-leaves-right.png')}
                  alt=""
                  className="w-12 h-12 object-contain opacity-80 filter brightness-125"
                />
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200/90 leading-tight font-sans">
                  GOOD<br />
                  HAIR<br />
                  BRIGHTER<br />
                  TOMORROW
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Terms */}
          <div className="mt-10 pt-5 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-300/70 gap-3 font-sans">
            <div>
              © 2024 Vazra Natural Care. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
