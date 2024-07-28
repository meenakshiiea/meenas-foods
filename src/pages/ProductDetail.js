import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

// Mock product data
const products = [
  { id: 1, name: 'Butter Chicken', price: 12.99, image: 'butter-chicken.jpg', description: 'Tender chicken in a rich, creamy tomato sauce.' },
  { id: 2, name: 'Vegetable Biryani', price: 10.99, image: 'veg-biryani.jpg', description: 'Fragrant rice dish with mixed vegetables and aromatic spices.' },
  { id: 3, name: 'Gulab Jamun', price: 5.99, image: 'gulab-jamun.jpg', description: 'Sweet milk-solid balls soaked in rose-scented syrup.' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;