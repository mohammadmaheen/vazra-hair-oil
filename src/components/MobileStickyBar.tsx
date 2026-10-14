import React from 'react';
import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../config/siteConfig';
import { useCart } from '../context/CartContext';

export const MobileStickyBar: React.FC = () => {
  const { totalItems, openCart } = useCart();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2dcce] py-2 px-3 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        
        {/* Call Us Button */}
        <a
          href={`tel:${SITE_CONFIG.contact.phoneNumber}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-vazra-green-100 hover:bg-vazra-green-200 active:scale-95 text-vazra-green-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150"
        >
          <Phone className="w-3.5 h-3.5 text-vazra-green-800" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Us Button */}
        <a
          href={buildWhatsAppLink([])}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all duration-150"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Order Now / Bag Button */}
        <button
          onClick={openCart}
          className={`flex-1 py-2.5 px-2 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs relative active:scale-95 transition-all duration-150 cursor-pointer ${
            totalItems > 0
              ? 'bg-vazra-purple-800 ring-2 ring-vazra-purple-400/50 shadow-md'
              : 'bg-vazra-purple-700 hover:bg-vazra-purple-800'
          }`}
        >
          <ShoppingBag className={`w-3.5 h-3.5 ${totalItems > 0 ? 'animate-soft-bounce' : ''}`} />
          <span>Bag {totalItems > 0 && `(${totalItems})`}</span>
        </button>

      </div>
    </div>
  );
};
