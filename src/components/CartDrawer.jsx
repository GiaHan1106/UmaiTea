
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
  const freeShipThreshold = 150000;
  const shippingFee = subtotal === 0 ? 0 : (subtotal >= freeShipThreshold ? 0 : 20000);
  const total = subtotal + shippingFee;

  return (
    <>
      <div className="cart-backdrop" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title-area">
            <span className="cart-icon-drawer">🛒</span>
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
                        style={{ color: 'var(--accent-red)', fontSize: '15px', padding: '0 5px' }}
                        aria-label="Xoá sản phẩm"
                      >
                        🗑️
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
            {subtotal < freeShipThreshold && (
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '15px', textAlign: 'center' }}>
                Mua thêm <strong>{formatPrice(freeShipThreshold - subtotal)}</strong> để được Miễn phí giao hàng!
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
