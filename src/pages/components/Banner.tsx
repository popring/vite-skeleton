import React, { useState, useEffect } from 'react';
import './Banner.css';

const banners = [
  'https://via.placeholder.com/600x200/FF5733/FFFFFF?text=Promotions-1',
  'https://via.placeholder.com/600x200/33CFFF/FFFFFF?text=Promotions-2',
  'https://via.placeholder.com/600x200/FFC300/FFFFFF?text=Promotions-3'
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // 每3秒切换一张图片
    return () => clearInterval(interval); // 清除定时器防止内存泄漏
  }, []);

  return (
    <div className="banner">
      <img
        src={banners[currentIndex]}
        alt={`促销图片${currentIndex + 1}`}
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
