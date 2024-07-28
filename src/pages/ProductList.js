import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';

// This is a mock product data. In a real application, you'd fetch this from an API.
const products = [
  { id: 1, name: 'Butter Chicken', price: 12.99, image: 'butter-chicken.jpg' },
  { id: 2, name: 'Vegetable Biryani', price: 10.99, image: 'veg-biryani.jpg' },
  { id: 3, name: 'Gulab Jamun', price: 5.99, image: 'gulab-jamun.jpg' },
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;