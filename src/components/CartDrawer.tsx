import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, Truck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SITE_CONFIG, buildWhatsAppLink } from '../config/siteConfig';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    isFreeShipping,
    amountUntilFreeShipping,
    clearCart
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);

  if (!isCartOpen) return null;

  const shippingFee = isFreeShipping || items.length === 0 ? 0 : SITE_CONFIG.defaultShippingFee;
  const grandTotal = subtotal + shippingFee;

  const handleWhatsAppCheckout = () => {
    const link = buildWhatsAppLink(
      items.map((i) => ({
        name: i.product.name,
        volume: i.product.volume,
        quantity: i.quantity,
        price: i.product.price,
      })),
      {
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
      }
    );
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-in-right">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#fcfbf7]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-vazra-green-800" />
              <h2 className="text-lg font-serif font-bold text-gray-900">
                Your Shopping Bag ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 hover:rotate-90 active:scale-90 transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {items.length > 0 && (
            <div className="px-5 py-3 bg-[#f3f8f5] border-b border-emerald-100 text-xs">
              <div className="flex items-center justify-between font-semibold text-emerald-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  {isFreeShipping ? 'You unlocked FREE Shipping! 🎉' : `Add ₹${amountUntilFreeShipping} more for FREE Shipping`}
                </span>
                <span>₹{SITE_CONFIG.freeShippingThreshold} Goal</span>
              </div>
              <div className="w-full h-2 bg-emerald-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / SITE_CONFIG.freeShippingThreshold) * 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-800">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Add our traditional herbal hair oil bottles or combo pack to begin your natural hair care ritual.
                </p>
                <a
                  href="#products"
                  onClick={closeCart}
                  className="inline-block px-6 py-2.5 bg-vazra-purple-700 text-white rounded-full text-xs font-bold"
                >
                  Explore Products
                </a>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-[#faf9f5] border border-[#eee8da] relative"
                >
                  <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-lg shrink-0">
                    🌿
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-gray-900 truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-emerald-800 font-semibold mt-0.5">
                      {item.product.volume}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-sm font-bold text-gray-900">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Optional Customer Delivery Address Toggle */}
            {items.length > 0 && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddressForm(!showAddressForm)}
                  className="text-xs font-bold text-vazra-green-800 hover:underline flex items-center gap-1"
                >
                  <span>{showAddressForm ? 'Hide address form' : '+ Add delivery details for WhatsApp order'}</span>
                </button>

                {showAddressForm && (
                  <div className="mt-3 p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2.5 animate-fade-in text-xs">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Phone / WhatsApp"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs"
                    />
                    <textarea
                      rows={2}
                      placeholder="Street address, colony, city, pincode"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-xs resize-none"
                    ></textarea>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-gray-200 bg-[#fcfbf7] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-semibold text-emerald-700">
                    {isFreeShipping ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total Payable:</span>
                  <span className="text-vazra-purple-900 font-extrabold text-lg">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>

              {/* 1-Click WhatsApp Checkout */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Complete Order on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                <button
                  onClick={clearCart}
                  className="hover:text-red-600 transition-colors"
                >
                  Clear Bag
                </button>
                <span className="flex items-center gap-1 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Dispatched from Khammam
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
