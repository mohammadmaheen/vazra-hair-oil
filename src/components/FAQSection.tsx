import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#f8f6f0] border-b border-[#e8e2d2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-vazra-green-950">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Clear, honest answers about our ingredients, ordering process, and hair-care routine.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e4ded0] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-emerald-50/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 text-center bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs">
          <p className="text-xs sm:text-sm text-gray-600">
            Have another question not answered here?
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.contact.phoneNumber}`}
              className="text-xs font-bold text-vazra-green-800 hover:underline"
            >
              Call Us: {SITE_CONFIG.contact.displayPhone}
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
