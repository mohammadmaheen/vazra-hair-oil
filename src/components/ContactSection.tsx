import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send, CheckCircle2, ShoppingBag, Truck } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppLink } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState(SITE_CONFIG.products[1].id); // Combo default
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const selectedProduct = SITE_CONFIG.products.find(p => p.id === selectedProductId) || SITE_CONFIG.products[0];
  const orderSubtotal = selectedProduct.price * quantity;
  const isFreeDelivery = orderSubtotal >= SITE_CONFIG.freeShippingThreshold;
  const deliveryCharge = isFreeDelivery ? 0 : SITE_CONFIG.defaultShippingFee;
  const totalAmount = orderSubtotal + deliveryCharge;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(
      [{ name: selectedProduct.name, volume: selectedProduct.volume, quantity, price: selectedProduct.price }],
      { name: customerName, phone: customerPhone, address: deliveryAddress }
    );
    window.open(link, '_blank');
  };

  const handleDirectOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <section id="contact" className="pt-2 sm:pt-4 pb-8 sm:pb-12 bg-gradient-to-b from-[#fbfaf5] to-[#f7f5ed] relative overflow-hidden select-none">
      
      {/* Floating Ambient Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-duration:9s]" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-vazra-purple-400/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-duration:11s]" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-amber-300/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-duration:13s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vazra-purple-100 text-vazra-purple-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5 text-vazra-purple-600" />
            <span>DIRECT ORDER & INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-vazra-green-950">
            Order Vazra Hair Oil
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Place your order directly via WhatsApp or fill the quick order form below. We dispatch safely to your doorstep from Khammam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact & Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Location & Workshop Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#e5ded1] shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900">
                    Our Location
                  </h3>
                  <p className="text-sm font-medium text-emerald-900 mt-1">
                    {SITE_CONFIG.contact.location.addressLine1}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {SITE_CONFIG.contact.location.city}, {SITE_CONFIG.contact.location.state} – {SITE_CONFIG.contact.location.pincode}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Direct Ordering & Support
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent("Hello Vazra Team, I would like to order Vazra Hair Oil.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/25 transition-all duration-200 group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Call Us Button */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneNumber}`}
                  className="w-full py-3.5 px-5 rounded-2xl bg-vazra-green-800 hover:bg-vazra-green-900 active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-green-900/25 transition-all duration-200 group cursor-pointer"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Call Us: {SITE_CONFIG.contact.displayPhone}</span>
                </a>
              </div>

              {/* Delivery Assurance */}
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3 hover:bg-emerald-50 transition-colors">
                <Truck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-600">
                  <span className="font-bold text-gray-900 block">Fast Dispatch Across India</span>
                  Orders are dispatched within 24–48 hours with secure leak-proof packaging.
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Quick Order Builder (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-9 border border-[#e4ded0] shadow-xl hover:shadow-2xl transition-all duration-300 relative">
              
              {orderPlaced ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    Thank You for Your Order Request!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    We have received your order details for <strong>{quantity}× {selectedProduct.name} ({selectedProduct.volume})</strong>. Our team in Khammam will contact you on <strong>{customerPhone}</strong> to confirm dispatch.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setOrderPlaced(false)}
                      className="px-6 py-2.5 bg-vazra-green-800 hover:bg-vazra-green-900 text-white rounded-full text-xs font-bold active:scale-95 transition-all"
                    >
                      Place Another Order
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppOrder} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h3 className="text-lg font-serif font-bold text-gray-900">
                      Quick Order Builder
                    </h3>
                    <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Step-by-Step
                    </span>
                  </div>

                  {/* Bottle Size Selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      1. Select Bottle Size / Pack *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SITE_CONFIG.products.map((p) => {
                        const isSelected = p.id === selectedProductId;
                        return (
                          <button
                            type="button"
                            key={p.id}
                            onClick={() => setSelectedProductId(p.id)}
                            className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between active:scale-[0.99] cursor-pointer ${
                              isSelected
                                ? 'border-vazra-purple-700 bg-vazra-purple-50/70 ring-2 ring-vazra-purple-700/25 shadow-sm'
                                : 'border-gray-200 bg-white/70 hover:border-emerald-300 hover:bg-emerald-50/20'
                            }`}
                          >
                            <div>
                              <div className="text-xs font-bold text-gray-900">
                                {p.volume}
                              </div>
                              <div className="text-[11px] text-gray-500">
                                {p.badge || p.subtitle}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-vazra-purple-800">
                                ₹{p.price}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quantity selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      2. Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-800 font-bold flex items-center justify-center transition-all cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-base font-bold text-gray-900 w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-800 font-bold flex items-center justify-center transition-all cursor-pointer"
                      >
                        +
                      </button>
                      <span className="text-xs text-gray-500">
                        ({selectedProduct.volume} × {quantity})
                      </span>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      3. Your Delivery Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full text-xs sm:text-sm p-3 border border-gray-200 bg-gray-50/60 focus:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-vazra-purple-600/25 focus:border-vazra-purple-700 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone / WhatsApp Number *"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full text-xs sm:text-sm p-3 border border-gray-200 bg-gray-50/60 focus:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-vazra-purple-600/25 focus:border-vazra-purple-700 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        required
                        rows={2}
                        placeholder="Complete Delivery Address with Pincode *"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full text-xs sm:text-sm p-3 border border-gray-200 bg-gray-50/60 focus:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-vazra-purple-600/25 focus:border-vazra-purple-700 transition-all duration-200 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Price Summary Breakdown */}
                  <div className="bg-[#faf8f4] p-4 rounded-2xl border border-[#ede5d8] space-y-1.5 text-xs text-gray-600 shadow-xs">
                    <div className="flex justify-between">
                      <span>Subtotal ({quantity} item{quantity > 1 ? 's' : ''}):</span>
                      <span className="font-semibold text-gray-900">₹{orderSubtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Shipping:</span>
                      <span className="font-semibold text-emerald-700">
                        {isFreeDelivery ? 'FREE' : `₹${deliveryCharge}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                      <span>Total Payable:</span>
                      <span className="text-base text-vazra-purple-900 font-extrabold">
                        ₹{totalAmount}
                      </span>
                    </div>
                  </div>

                  {/* Order Submission Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      className="py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1fae52] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectOrder}
                      className="py-3.5 px-4 rounded-full bg-vazra-purple-700 hover:bg-vazra-purple-800 active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-vazra-purple-700/25 transition-all duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Order Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Packaging Notice Disclaimer */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-3xl mx-auto text-center shadow-xs transition-transform duration-300 hover:scale-[1.005]">
          <p className="text-xs sm:text-[13px] text-amber-950/80 leading-relaxed font-sans">
            📦 <strong className="font-semibold text-amber-950">Packaging Notice:</strong> Actual packaging design, bottle shape, or printed label may vary or may not be identical to the illustrative renders shown on the website. The authentic traditional formula and 100% natural herbal oil quality remain strictly pure and uncompromised.
          </p>
        </div>

      </div>
    </section>
  );
};
