
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
        <img
          className="product-img"
          src={product.image}
          alt={product.name}
          loading="lazy"
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
