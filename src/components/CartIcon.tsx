import React from "react";
import { useAppSelector } from "@/store/hooks";

const CartIcon: React.FC = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);

  return (
    <div className="relative">
      <svg
        className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 32 32"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M29.4 8.85A2.48 2.48 0 0 0 27.53 8H14a1 1 0 0 0 0 2h13.53a.47.47 0 0 1 .36.16.48.48 0 0 1 .11.36l-1.45 10a1.71 1.71 0 0 1-1.7 1.48H14.23a1.72 1.72 0 0 1-1.68-1.33L10 8.79l-.5-1.92A3.79 3.79 0 0 0 5.82 4H3a1 1 0 0 0 0 2h2.82a1.8 1.8 0 0 1 1.74 1.36L8 9.21l2.6 11.88A3.72 3.72 0 0 0 14.23 24h10.62a3.74 3.74 0 0 0 3.68-3.16l1.45-10a2.45 2.45 0 0 0-.58-1.99zM16 25h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM25 25h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
        />
      </svg>
      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
