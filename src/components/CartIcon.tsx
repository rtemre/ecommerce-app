import React from 'react';
import { useAppSelector } from '@/store/hooks';

const CartIcon: React.FC = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);

  return (
    <div className="relative">
      <svg
        className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
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
