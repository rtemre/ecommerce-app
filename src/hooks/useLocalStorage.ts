import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loadCartFromStorage } from "@/store/cartSlice";

export const useLocalStorage = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("ecommerce-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch(loadCartFromStorage(parsedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, [dispatch]);

  // Save cart to localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("ecommerce-cart", JSON.stringify(cartState));
  }, [cartState]);
};
