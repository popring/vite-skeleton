import React from 'react';
import './ProductItem.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>￥{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
