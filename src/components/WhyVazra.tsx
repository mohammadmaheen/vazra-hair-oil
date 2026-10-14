import React from 'react';
import { Leaf, Flower2, Heart, ShieldCheck } from 'lucide-react';

export const WhyVazra: React.FC = () => {
  const items = [
    {
      icon: <Leaf className="w-5 h-5 text-vazra-purple-700" />,
      title: '100% Natural',
    },
    {
      icon: <Flower2 className="w-5 h-5 text-vazra-purple-700" />,
      title: 'Clinically Inspired',
    },
    {
      icon: <Heart className="w-5 h-5 text-vazra-purple-700" />,
      title: '50,000+ Happy Customers',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-vazra-purple-700" />,
      title: 'Dermatologically Safe',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#fafbf6] border-b border-[#ecefe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left: Heading & Subtitle */}
          <div className="space-y-1">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-500">
              WHY VAZRA
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
              More Than Just an Oil
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-sans">
              It’s a tradition. A promise. A healthier, happier you.
            </p>
          </div>

          {/* Right: 4 Horizontal circular icons with titles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center text-center space-y-2 hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-vazra-purple-300 bg-white group-hover:bg-vazra-purple-50 group-hover:border-vazra-purple-600 group-hover:scale-110 group-hover:shadow-md flex items-center justify-center shadow-xs transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-800 group-hover:text-vazra-purple-900 leading-tight transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
