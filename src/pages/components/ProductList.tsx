import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'iPhone 16',
    price: 6999,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJnPT0=&traceId=1',
  },
  {
    id: 2,
    name: 'MacBook Air',
    price: 9999,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
  },
  {
    id: 3,
    name: 'Apple Watch Series 7',
    price: 2999,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724620940808',
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 1999,
    imageUrl:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502554118',
  },
];

const ProductList: React.FC = () => {
  console.log('ProductList render')
  return (
    <div className='product-list'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
