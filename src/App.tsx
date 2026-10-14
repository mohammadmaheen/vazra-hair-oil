import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { StorySection } from './components/StorySection';
import { HowToUse } from './components/HowToUse';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { useCart } from './context/CartContext';
import { Check } from 'lucide-react';

export const App: React.FC = () => {
  const { notification } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf5] text-[#1f2b23] relative">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-vazra-green-950 text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-2.5 animate-fade-in text-xs sm:text-sm font-medium">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{notification}</span>
        </div>
      )}

      {/* Smooth Scroll-Away Header (TopBanner + Navbar) */}
      <Header />

      <main className="flex-grow pb-16 sm:pb-0">
        {/* 1 & 2. Unified Hero & Ingredients Presentation (Zero Gap, Matching Mockup) */}
        <Hero />

        {/* 3. Section 3: Our Bestsellers (5 Cards) & Why Vazra Banner */}
        <ProductGrid />

        {/* 4. About Vazra & Our Story (Afzal Bee's Kitchen Formula) */}
        <StorySection />

        {/* 5. How to Use Section (4-Step Hair Oil Routine) */}
        <HowToUse />

        {/* 6. Order Now & Contact Us (Khammam Location & Direct WhatsApp) */}
        <ContactSection />
      </main>

      {/* Cart Drawer Slide-over */}
      <CartDrawer />

      {/* Join the Vazra Family Banner & Dark Forest Green Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
};

export default App;
