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

// Helper function to render badge with dynamic SVG icon
const renderBadge = (badge) => {
  if (!badge) return null;
  const badgeLower = badge.toLowerCase();
  
  let icon = null;
  if (badgeLower === 'best') {
    icon = (
      <svg className="badge-icon icon-crown" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3 6 6-1-4 7 1 6h-12l1-6-4-7 6 1 3-6z" />
      </svg>
    );
  } else if (badgeLower === 'hot') {
    icon = (
      <svg className="badge-icon icon-fire" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.687 9.58c-1.393-2.653-3.69-4.707-6.027-6.242a.5.5 0 0 0-.825.438c.112 1.487-.193 2.986-.884 4.316-1.157 2.222-3.418 3.6-4.786 5.742a9 9 0 0 0 13.882 10.742c3.155-3.323 2.378-8.835-1.37-15.062z" />
      </svg>
    );
  } else if (badgeLower === 'new') {
    icon = (
      <svg className="badge-icon icon-sparkle" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 Q12 12, 22 12 Q12 12, 12 22 Q12 12, 2 12 Q12 12, 12 2Z" />
      </svg>
    );
  }

  return (
    <span className={`product-badge badge-${badgeLower}`}>
      {icon}
      <span className="badge-text">{badge}</span>
    </span>
  );
};

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
        {renderBadge(product.badge)}
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
