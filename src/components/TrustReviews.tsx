import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TrustReviews: React.FC = () => {
  const allReviews = [
    {
      id: 'rev-sana',
      name: 'Sana, Hyderabad',
      comment: '“My hair fall reduced in 3 weeks! Absolutely love this oil.”',
      avatar: '/images/avatar-sana.jpg',
      rating: 5,
    },
    {
      id: 'rev-rohit',
      name: 'Rohit, Bangalore',
      comment: '“My hair feels thicker and stronger now. Highly recommended!”',
      avatar: '/images/avatar-rohit.jpg',
      rating: 5,
    },
    {
      id: 'rev-priya',
      name: 'Priya, Chennai',
      comment: '“The best herbal hair oil I’ve ever used. Smells amazing!”',
      avatar: '/images/avatar-priya.jpg',
      rating: 5,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev === allReviews.length - 1 ? 0 : prev + 1));
  };

  // Reorder reviews based on current carousel index
  const visibleReviews = [
    allReviews[startIndex % allReviews.length],
    allReviews[(startIndex + 1) % allReviews.length],
    allReviews[(startIndex + 2) % allReviews.length],
  ];

  return (
    <section id="reviews" className="pt-2 pb-12 sm:pb-16 bg-[#fbfaf5] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching mockup: "Real People. Real Results." */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 tracking-tight">
            Real People. Real Results.
          </h2>
        </div>

        {/* Unified Testimonial Pill Card with Outer Arrows */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevReview}
            className="absolute -left-2 sm:-left-5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 flex items-center justify-center text-gray-700 hover:text-vazra-purple-700 hover:border-vazra-purple-300 transition-all duration-200 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Unified White Card matching mockup */}
          <div className="w-full bg-white rounded-3xl p-5 sm:p-7 border border-[#e2e8de] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 items-center">
              {visibleReviews.map((rev) => (
                <div key={rev.id} className="pt-4 md:pt-0 md:px-5 first:pt-0 first:px-0 flex items-center gap-3.5 group cursor-default">
                  
                  {/* Customer Avatar Circle */}
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-2xs group-hover:ring-2 group-hover:ring-vazra-purple-400 group-hover:border-transparent transition-all duration-300">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Rating, Quote & Name */}
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center text-amber-400 group-hover:scale-105 transition-transform origin-left duration-200">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs text-gray-700 font-sans italic leading-snug line-clamp-2 group-hover:text-gray-900 transition-colors">
                      {rev.comment}
                    </p>

                    <div className="text-[11px] font-semibold text-gray-500 font-sans">
                      {rev.name}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextReview}
            className="absolute -right-2 sm:-right-5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:scale-110 active:scale-95 flex items-center justify-center text-gray-700 hover:text-vazra-purple-700 hover:border-vazra-purple-300 transition-all duration-200 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
