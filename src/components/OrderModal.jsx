import { useState } from 'react';
import { PRODUCTS } from '../data/products.js';

const TOPPINGS = PRODUCTS.filter(p => p.category === 'TOPPING');

export default function OrderModal({ product, onClose, onOrderDirect }) {
  const [size, setSize] = useState('M'); // 'M' or 'L'
  const [sugar, setSugar] = useState('100%');
  const [ice, setIce] = useState('100%');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const isToppingProduct = product.category === 'TOPPING';

  const toppingsCost = isToppingProduct
    ? 0
    : selectedToppings.reduce((total, id) => {
        const topping = TOPPINGS.find(t => t.id === id);
        return total + (topping ? topping.price : 0);
      }, 0);
  const basePrice = product.price;
  const sizeCost = (!isToppingProduct && size === 'L') ? 6000 : 0;
  const unitPrice = basePrice + sizeCost + toppingsCost;

  const handleToppingToggle = (id) => {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(tId => tId !== id) : [...prev, id]
    );
  };

  const handleOrderSubmit = () => {
    const toppingsDetails = isToppingProduct
      ? []
      : selectedToppings.map(id => TOPPINGS.find(t => t.id === id));
    const orderItem = {
      id: isToppingProduct
        ? `${product.id}-${qty}`
        : `${product.id}-${size}-${sugar}-${ice}-${selectedToppings.sort().join('-')}`,
      orderId: 'UT-' + Math.floor(100000 + Math.random() * 900000),
      orderTime: new Date().toLocaleString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      product,
      name: product.name,
      size: isToppingProduct ? '' : size,
      sugar: isToppingProduct ? '' : sugar,
      ice: isToppingProduct ? '' : ice,
      toppings: toppingsDetails,
      qty,
      price: unitPrice,
      totalPrice: unitPrice * qty
    };
    onOrderDirect(orderItem);
  };

  // Format currency in VND
  const formatPrice = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>
        
        <div className="modal-body">
          {/* Left panel: Product info */}
          <div className="modal-left">
            <img
              className="modal-product-img"
              src={product.image}
              alt={product.name}
            />
            <h3 className="modal-product-name">{product.name}</h3>
            <p className="modal-product-desc">
              {product.description || 'Hương vị thơm béo nguyên bản từ UmaiTea.'}
            </p>
          </div>

          {/* Right panel: Custom Options */}
          <div className="modal-right">
            {isToppingProduct ? (
              <div className="modal-option-section" style={{ padding: '20px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Sản phẩm này là <strong>Topping thêm</strong>.<br />
                  Bạn có thể chọn số lượng bên dưới để đặt trực tiếp hoặc chọn sản phẩm nước uống để kết hợp thêm.
                </p>
              </div>
            ) : (
              <>
                {/* Size options */}
                <div className="modal-option-section">
                  <h4 className="modal-option-title">
                    CHỌN KÍCH CỠ <span className="modal-option-required">BẮT BUỘC</span>
                  </h4>
                  <div className="modal-option-grid">
                    <button
                      type="button"
                      className={`modal-btn-option ${size === 'M' ? 'selected' : ''}`}
                      onClick={() => setSize('M')}
                    >
                      Size M
                    </button>
                    <button
                      type="button"
                      className={`modal-btn-option ${size === 'L' ? 'selected' : ''}`}
                      onClick={() => setSize('L')}
                    >
                      Size L (+6.000 ₫)
                    </button>
                  </div>
                </div>

                {/* Sugar options */}
                <div className="modal-option-section">
                  <h4 className="modal-option-title">CHỌN MỨC ĐƯỜNG</h4>
                  <div className="modal-option-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(75px, 1fr))' }}>
                    {['100%', '70%', '50%', '30%', '0%'].map(level => (
                      <button
                        key={level}
                        type="button"
                        className={`modal-btn-option ${sugar === level ? 'selected' : ''}`}
                        onClick={() => setSugar(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ice options */}
                <div className="modal-option-section">
                  <h4 className="modal-option-title">CHỌN MỨC ĐÁ</h4>
                  <div className="modal-option-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(75px, 1fr))' }}>
                    {['100%', '70%', '50%', 'Nóng'].map(level => (
                      <button
                        key={level}
                        type="button"
                        className={`modal-btn-option ${ice === level ? 'selected' : ''}`}
                        onClick={() => setIce(level)}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topping selections */}
                <div className="modal-option-section">
                  <h4 className="modal-option-title">CHỌN TOPPING (TÙY CHỌN)</h4>
                  <div className="modal-topping-list" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {TOPPINGS.map(topping => (
                      <div
                        key={topping.id}
                        className={`modal-topping-item ${selectedToppings.includes(topping.id) ? 'selected' : ''}`}
                        onClick={() => handleToppingToggle(topping.id)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <input
                            type="checkbox"
                            checked={selectedToppings.includes(topping.id)}
                            onChange={() => {}} // handled by parent div click
                            style={{ pointerEvents: 'none' }}
                          />
                          <img 
                            src={topping.image} 
                            alt={topping.name} 
                            style={{ width: '28px', height: '28px', borderRadius: '4px', objectFit: 'cover' }} 
                          />
                          <span>{topping.name}</span>
                        </div>
                        <strong>+{formatPrice(topping.price)}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Modal Footer: Qty, Total and Add Button */}
        <div className="modal-footer">
          <div className="modal-qty-control">
            <button
              className="modal-qty-btn"
              onClick={() => setQty(prev => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="modal-qty-val">{qty}</span>
            <button
              className="modal-qty-btn"
              onClick={() => setQty(prev => prev + 1)}
            >
              +
            </button>
          </div>

          <div className="modal-submit-container">
            <div className="modal-total-price">
              <div className="modal-price-label">Tổng cộng</div>
              <div className="modal-price-val">{formatPrice(unitPrice * qty)}</div>
            </div>
            <button className="modal-add-cart-btn" onClick={handleOrderSubmit}>
              ĐẶT HÀNG NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
