import { useState, useEffect, useRef } from 'react';

function LazyImage({ src, alt, className }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load image 200px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`lazy-image-container ${!isLoaded ? 'placeholder-pulse' : ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#eae7db',
        overflow: 'hidden',
      }}
    >
      {isIntersecting && (
        <img
          className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}
    </div>
  );
}

export default function ProductCard({ product, onOrderClick }) {
  // Format currency in VND
  const formatPrice = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <LazyImage
          className="product-img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description || 'Thức uống tươi mát đậm vị tự nhiên từ UmaiTea.'}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button
            className="order-btn"
            onClick={() => onOrderClick(product)}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
