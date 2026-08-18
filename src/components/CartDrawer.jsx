
export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  // Format currency in VND
  const formatPrice = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalDrinksQty = cartItems.reduce((sum, item) => {
    if (item.product && item.product.category === 'TOPPING') return sum;
    return sum + item.qty;
  }, 0);
  const freeShipThresholdQty = 5;
  const shippingFee = subtotal === 0 ? 0 : (totalDrinksQty >= freeShipThresholdQty ? 0 : 20000);
  const total = subtotal + shippingFee;

  return (
    <>
      <div className="cart-backdrop" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title-area" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="cart-icon-drawer" style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 2 3 h 4 l 2.5 12 h 9.5" />
                <path d="M 21 6 L 18 15 H 8.5" />
                <path d="M 6.6 6 h 14.4" />
                <path d="M 7.7 11 h 11.6" />
                <path d="M 11.4 6 L 11.7 15" />
                <path d="M 16.2 6 L 14.8 15" />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="cart-title">Giỏ Hàng Của Bạn</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Đóng giỏ hàng">
            ✕
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🍵</span>
              <p>Giỏ hàng của bạn đang trống.</p>
              <button
                onClick={onClose}
                style={{
                  marginTop: '10px',
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}
              >
                Đặt trà sữa ngay!
              </button>
            </div>
          ) : (
            <div className="cart-item-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    className="cart-item-img"
                    src={item.product.image}
                    alt={item.name}
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-spec">
                      {item.product.category === 'TOPPING' ? (
                        'Topping thêm'
                      ) : (
                        `Size: ${item.size} | Đá: ${item.ice} | Đường: ${item.sugar}`
                      )}
                      {item.toppings.length > 0 && (
                        <>
                          <br />
                          Toppings: {item.toppings.map(t => t.name).join(', ')}
                        </>
                      )}
                    </p>
                    <div className="cart-item-footer">
                      <div className="modal-qty-control" style={{ transform: 'scale(0.85)' }}>
                        <button
                          className="modal-qty-btn"
                          onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        >
                          -
                        </button>
                        <span className="modal-qty-val">{item.qty}</span>
                        <button
                          className="modal-qty-btn"
                          onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-price">{formatPrice(item.totalPrice)}</span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{
                          color: 'var(--accent-red)',
                          padding: '0 5px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          background: 'transparent',
                          cursor: 'pointer',
                          transition: 'transform 0.15s ease'
                        }}
                        className="cart-remove-btn"
                        aria-label="Xoá sản phẩm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M 9 5 l 1.5 -3 h 3 l 1.5 3" />
                          <path d="M 3 5.5 h 18" />
                          <path d="M 5 6 L 7 21 h 10 L 19 6" />
                          <path d="M 9.5 10 L 10.5 18" />
                          <path d="M 12 10 v 8" />
                          <path d="M 14.5 10 L 13.5 18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Tạm tính</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div className="cart-summary-row">
              <span>Phí vận chuyển</span>
              <span>
                {shippingFee === 0 ? (
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Miễn phí</span>
                ) : (
                  formatPrice(shippingFee)
                )}
              </span>
            </div>
            {totalDrinksQty < freeShipThresholdQty && (
              <p className="cart-free-ship-note">
                Mua thêm <strong>{freeShipThresholdQty - totalDrinksQty} ly</strong> để được Miễn phí giao hàng!
              </p>
            )}
            <div className="cart-summary-row total">
              <span>Tổng cộng</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="cart-checkout-btn" onClick={onCheckout}>
              TIẾN HÀNH ĐẶT HÀNG
            </button>

          </div>
        )}
      </div>
    </>
  );
}
