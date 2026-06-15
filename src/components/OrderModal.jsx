import React, { useState, useEffect } from 'react';

const TOPPINGS = [
  { id: 't_black', name: 'Trân Châu Đen', price: 6000 },
  { id: 't_white', name: 'Trân Châu Trắng', price: 7000 },
  { id: 't_cheese', name: 'Phô Mai Tươi (3 viên)', price: 9000 },
  { id: 't_flan', name: 'Bánh Flan Trứng', price: 10000 },
  { id: 't_foam', name: 'Kem Creamy Phô Mai', price: 10000 }
];

export default function OrderModal({ product, onClose, onOrderDirect }) {
  if (!product) return null;

  const [size, setSize] = useState('M'); // 'M' or 'L'
  const [sugar, setSugar] = useState('100%');
  const [ice, setIce] = useState('100%');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [qty, setQty] = useState(1);
  const [unitPrice, setUnitPrice] = useState(product.price);

  // Re-calculate unit price when selections change
  useEffect(() => {
    let price = product.price;
    if (size === 'L') {
      price += 6000;
    }
    const toppingsCost = selectedToppings.reduce((total, id) => {
      const topping = TOPPINGS.find(t => t.id === id);
      return total + (topping ? topping.price : 0);
    }, 0);
    setUnitPrice(price + toppingsCost);
  }, [size, selectedToppings, product.price]);

  const handleToppingToggle = (id) => {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(tId => tId !== id) : [...prev, id]
    );
  };

  const handleOrderSubmit = () => {
    const toppingsDetails = selectedToppings.map(id => TOPPINGS.find(t => t.id === id));
    const orderItem = {
      id: `${product.id}-${size}-${sugar}-${ice}-${selectedToppings.sort().join('-')}`,
      product,
      name: product.name,
      size,
      sugar,
      ice,
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
              <div className="modal-topping-list">
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
                      <span>{topping.name}</span>
                    </div>
                    <strong>+{formatPrice(topping.price)}</strong>
                  </div>
                ))}
              </div>
            </div>
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
