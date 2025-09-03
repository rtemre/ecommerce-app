import React from "react";
import { Product } from "@/data/products";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  // const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  // const handleIncreaseQuantity = () => {
  //   dispatch(addToCart(product));
  // };

  // const handleDecreaseQuantity = () => {
  //   if (quantity > 1) {
  //     dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
  //   } else {
  //     dispatch(removeFromCart(product.id));
  //   }
  // };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300} // Add width
          height={300} // Add height
          className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
        />
        {isInCart && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            In Cart
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>

        {!isInCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add to Cart
          </button>
        ) : (
          <div className="space-y-3">
            {/* <div className="flex items-center justify-between bg-gray-50 rounded-md p-2">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {quantity}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDecreaseQuantity}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-300 transition-colors duration-200 font-medium flex items-center justify-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
                {quantity === 1 ? "Remove" : "Less"}
              </button>

              <button
                onClick={handleIncreaseQuantity}
                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                More
              </button>
            </div> */}

            <button
              onClick={handleRemoveFromCart}
              className="w-full bg-red-50 text-red-600 py-2 px-4 rounded-md hover:bg-red-100 transition-colors duration-200 font-medium flex items-center justify-center gap-2 border border-red-200"
            >
              <svg
                className="w-4 h-4"
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
              Remove from Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
