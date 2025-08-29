export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    title: "Smart Watch Series 5",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    description: "Advanced smartwatch with health monitoring features"
  },
  {
    id: 3,
    title: "Mechanical Gaming Keyboard",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
    description: "RGB mechanical keyboard for gaming enthusiasts"
  },
  {
    id: 4,
    title: "Wireless Mouse Pro",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking"
  },
  {
    id: 5,
    title: "USB-C Hub Adapter",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop",
    description: "Multi-port USB-C hub for laptops and tablets"
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    description: "Portable Bluetooth speaker with 360-degree sound"
  },
  {
    id: 7,
    title: "Laptop Stand Adjustable",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    description: "Ergonomic laptop stand for better posture"
  },
  {
    id: 8,
    title: "Phone Case with Stand",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    description: "Protective phone case with built-in kickstand"
  },
  {
    id: 9,
    title: "Wireless Charging Pad",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    description: "Fast wireless charging pad for smartphones"
  },
  {
    id: 10,
    title: "HD Webcam 1080p",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop",
    description: "High-definition webcam for video calls and streaming"
  },
  {
    id: 11,
    title: "Gaming Mouse Pad",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop",
    description: "Large gaming mouse pad with RGB lighting"
  },
  {
    id: 12,
    title: "Tablet Stand Foldable",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    description: "Portable foldable stand for tablets and phones"
  }
];
