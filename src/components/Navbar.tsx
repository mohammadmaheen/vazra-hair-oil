import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'our-story', 'ingredients', 'how-to-use', 'contact'];
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const id = href.replace('#', '');
    if (id === 'our-story') {
      window.dispatchEvent(new CustomEvent('open-story-window'));
      setActiveSection('our-story');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const target = document.getElementById('products') || document.getElementById('ingredients');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Our Story', href: '#our-story', id: 'our-story' },
    { label: 'Ingredients', href: '#ingredients', id: 'ingredients' },
    { label: 'How to Use', href: '#how-to-use', id: 'how-to-use' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="w-full bg-[#fafbf6]/95 backdrop-blur-md border-b border-[#ecefe6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo matching Reference Image */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* 3 Leaves Emblem */}
            <svg className="w-6 h-5 text-vazra-green-800 -mb-0.5" viewBox="0 0 24 20" fill="currentColor">
              <path d="M12 2C10.5 5.5 8 8 3 9C7 11 9 14 10 19C11 15 13 11 17 9C12 8 13.5 5.5 12 2Z" opacity="0.9" />
              <path d="M7 6C5.5 8.5 4 10 1 11C4 12 5.5 14 6 18C7 15 8.5 12 11 11C7 10 8.5 8.5 7 6Z" opacity="0.6" />
              <path d="M17 6C18.5 8.5 20 10 23 11C20 12 18.5 14 18 18C17 15 15.5 12 13 11C17 10 15.5 8.5 17 6Z" opacity="0.6" />
            </svg>
            <span className="text-2xl sm:text-3xl font-display tracking-[0.22em] font-bold text-vazra-green-950 group-hover:text-vazra-green-800 transition-colors">
              VAZRA
            </span>
            <span className="text-[9px] tracking-[0.28em] font-semibold text-emerald-800 uppercase -mt-0.5 font-sans">
              NATURAL CARE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-all duration-200 relative py-1 hover:text-vazra-purple-700 ${
                    isActive
                      ? 'text-vazra-purple-800 font-semibold scale-105'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-vazra-purple-700 rounded-full animate-fade-in"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Search, Profile, Wishlist, Cart & Shop Now */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Search Input Bar (Matching Reference) */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search for natural hair care..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-60 focus:w-64 xl:focus:w-72 text-xs bg-white border border-[#dce3d8] rounded-full pl-3 pr-8 py-2 focus:outline-none focus:border-vazra-purple-700 focus:ring-2 focus:ring-vazra-purple-500/20 text-gray-800 shadow-xs transition-all duration-300"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none transition-colors group-focus-within:text-vazra-purple-600" />
            </form>

            {/* User Icon */}
            <button className="hidden sm:inline-flex p-2 text-gray-600 hover:text-vazra-purple-700 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer" title="Account">
              <User className="w-4 h-4" />
            </button>

            {/* Wishlist Heart Icon */}
            <button className="hidden sm:inline-flex p-2 text-gray-600 hover:text-rose-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer" title="Wishlist">
              <Heart className="w-4 h-4" />
            </button>

            {/* Cart Icon with Counter */}
            <button
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-vazra-purple-700 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:rotate-6 transition-transform duration-200" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-vazra-purple-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-soft-bounce shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* CTA Button "Shop Now →" matching reference purple color */}
            <a
              href="#products"
              className="group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-vazra-purple-700 hover:bg-vazra-purple-800 rounded-full shadow-sm hover:shadow-md hover:shadow-vazra-purple-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Shop Now</span>
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 active:scale-90 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2e7dd] bg-[#fafbf6] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search for natural hair care..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white border border-[#dce3d8] rounded-full pl-4 pr-9 py-2.5 text-gray-800"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3" />
          </form>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-vazra-purple-50 text-vazra-purple-800 font-bold'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
