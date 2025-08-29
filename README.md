# E-Commerce Product Listing App

A modern React/Next.js application with product listing, search functionality, and shopping cart features.

## Features

### ✅ Core Requirements
- **Search Bar**: Client-side filtering by product name
- **Product List**: Displays title, price, and image for each product
- **Add to Cart**: Button to add products to shopping cart
- **State Management**: Redux Toolkit for cart state management
- **Cart Counter**: Shows total item count in header

### ✅ Bonus Features
- **Pagination**: Navigate through products with page controls
- **LocalStorage Persistence**: Cart state persists across browser sessions
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Cart Modal**: View and manage cart items in a modal dialog
- **Quantity Management**: Increase/decrease item quantities in cart

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: Custom React components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   └── page.tsx          # Main product listing page
├── components/
│   ├── Header.tsx        # App header with cart icon
│   ├── SearchBar.tsx     # Product search input
│   ├── ProductCard.tsx   # Individual product display
│   ├── CartIcon.tsx      # Cart icon with item count
│   └── CartModal.tsx     # Shopping cart modal
├── data/
│   └── products.ts       # Mock product data
├── store/
│   ├── index.ts          # Redux store configuration
│   ├── cartSlice.ts      # Cart state management
│   └── hooks.ts          # Typed Redux hooks
└── hooks/
    └── useLocalStorage.ts # LocalStorage persistence hook
```

## Key Features Implementation

### Redux State Management
- Cart slice handles add/remove/update operations
- Automatic total calculation (count and price)
- Type-safe with TypeScript

### Search Functionality
- Real-time client-side filtering
- Case-insensitive search
- Resets pagination when searching

### Cart Persistence
- Automatically saves cart to localStorage
- Restores cart state on page refresh
- Handles JSON parsing errors gracefully

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layout adapts to screen size
- Touch-friendly buttons and interactions

## Demo Data

The app includes 12 mock products with:
- High-quality product images from Unsplash
- Realistic pricing
- Product descriptions
- Unique IDs for cart management

## Testing the App

1. **Search**: Type in the search bar to filter products
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the header
4. **Manage Items**: Adjust quantities or remove items
5. **Persistence**: Refresh the page - cart state is preserved
6. **Pagination**: Navigate through multiple pages of products
