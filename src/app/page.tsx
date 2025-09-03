"use client";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { products, Product } from "@/data/products";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ITEMS_PER_PAGE = 6;

function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Initialize localStorage persistence
  useLocalStorage();

  // Filter products based on search term
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover amazing products at great prices
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="h-12 w-12 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-gray-500 text-lg">{`No products found matching "${searchTerm}"`}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-md ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            <div className="text-center mt-4 text-gray-600">
              Showing {startIndex + 1}-
              {Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Provider store={store}>
      <ProductListing />
    </Provider>
  );
}
