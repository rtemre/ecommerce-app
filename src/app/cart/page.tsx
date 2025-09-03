"use client";
import { updateQuantity, removeFromCart, clearCart } from "@/store/cartSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function CartPage() {
  useLocalStorage();
  const { items, totalCount, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Shopping Cart
          </h2>
          <p className="text-lg text-gray-700">
            Review your items and proceed to checkout
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-700 text-lg mb-6">Your cart is empty</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cart Items ({totalCount})
                  </h3>
                </div>

                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-medium text-gray-900 truncate">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-700 mt-1">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center justify-center font-semibold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center justify-center font-semibold"
                          >
                            +
                          </button>
                        </div>

                        <div className="w-20 text-right">
                          <div className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-800 p-2"
                          aria-label={`Remove ${item.title}`}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handleClearCart}
                      className="text-red-700 hover:text-red-900 font-medium"
                    >
                      Clear Cart
                    </button>
                    <div className="text-gray-800">
                      Total Items:{" "}
                      <span className="font-semibold text-gray-900">
                        {totalCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order Summary
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-medium text-green-700">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Tax</span>
                    <span className="font-medium text-gray-900">
                      Calculated at checkout
                    </span>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                    Proceed to Checkout
                  </button>

                  <Link
                    href="/"
                    className="block w-full text-center text-blue-700 hover:text-blue-900 py-2 font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
