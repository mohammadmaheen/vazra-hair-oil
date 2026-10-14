import React from 'react';
import { Truck, Users, Tag } from 'lucide-react';

export const TopBanner: React.FC = () => {
  return (
    <aside aria-label="Announcement" className="bg-[#345d47] text-[#f4f8f5] text-xs py-2 px-4 border-b border-[#2d523e]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-7 flex-1 text-[11px] sm:text-xs">
          
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className="text-emerald-300">🌿</span> 100% Natural Ingredients
          </span>

          <span className="inline-flex items-center gap-1.5 text-emerald-100/90">
            <Truck className="w-3.5 h-3.5 text-emerald-300" /> Free Shipping above ₹499
          </span>

          <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-100/90">
            <Users className="w-3.5 h-3.5 text-emerald-300" /> Loved by 50,000+ Customers
          </span>

        </div>

        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-medium text-amber-200">
          <Tag className="w-3 h-3 text-amber-300" />
          <span>Get 10% Off on Your First Order</span>
          <span className="ml-1 text-emerald-200">Use Code:</span>
          <span className="font-bold text-white tracking-wide">NATURAL10</span>
        </div>
      </div>
    </aside>
  );
};
