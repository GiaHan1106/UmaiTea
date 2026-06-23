import qrZalo from '../assets/QRZALO.png';

export default function ReceiptModal({ order, onClose }) {
  if (!order) return null;

  // Format currency in VND
  const formatPrice = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  };

  const orderId = order.orderId;
  const orderTime = order.orderTime;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="receipt-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        <div className="receipt-modal-content">
          <div className="receipt-modal-grid">
            
            {/* Left: Thermal printed slip */}
            <div className="receipt-paper-col">
              <div className="receipt-paper">
                <div className="receipt-header">
                  <h3 className="receipt-brand">UMAITEA</h3>
                  <p className="receipt-shop-info">Tinh Hoa Trà Sữa Nguyên Chất</p>
                  <p className="receipt-shop-detail">182 Sư Vạn Hạnh, Q.10, TP.HCM</p>
                  <p className="receipt-shop-detail">Hotline: 0974.200.611</p>
                </div>

                <div className="receipt-divider"></div>

                <div className="receipt-meta">
                  <div><strong>Mã đơn hàng:</strong> {orderId}</div>
                  <div><strong>Thời gian:</strong> {orderTime}</div>
                  <div><strong>Hình thức:</strong> Mang về (Zalo Order)</div>
                </div>

                <div className="receipt-divider"></div>

                <div className="receipt-items-list">
                  <div className="receipt-item-row header">
                    <span className="receipt-item-name">Sản phẩm</span>
                    <span className="receipt-item-qty">SL</span>
                    <span className="receipt-item-price">Thành tiền</span>
                  </div>
                  
                  <div className="receipt-item-row body">
                    <span className="receipt-item-name bold">{order.name}</span>
                    <span className="receipt-item-qty">x{order.qty}</span>
                    <span className="receipt-item-price">{formatPrice(order.price * order.qty)}</span>
                  </div>

                  <div className="receipt-item-options">
                    {order.size && <div>- Cỡ: Size {order.size}</div>}
                    {order.sugar && <div>- Đường: {order.sugar}</div>}
                    {order.ice && <div>- Đá: {order.ice}</div>}
                    {order.toppings && order.toppings.length > 0 && (
                      <div>
                        - Topping: {order.toppings.map(t => t.name).join(', ')}
                      </div>
                    )}
                  </div>
                </div>

                <div className="receipt-divider"></div>

                <div className="receipt-total-row">
                  <span className="receipt-total-label">TỔNG CỘNG</span>
                  <span className="receipt-total-val">{formatPrice(order.totalPrice)}</span>
                </div>

                <div className="receipt-divider"></div>

                <div className="receipt-footer">
                  <p>Cảm ơn quý khách!</p>
                  <p>Quét mã QR bên cạnh để gửi đơn nước nhé!</p>
                </div>
              </div>

              <div className="receipt-actions">
                <button className="receipt-action-btn print-btn" onClick={handlePrint}>
                  🖨️ In Phiếu Đơn Hàng
                </button>
              </div>
            </div>

            {/* Right: Zalo QR details */}
            <div className="zalo-qr-col">
              <h3 className="zalo-qr-title">QUÉT MÃ ZALO ĐỂ GỬI ĐƠN</h3>
              <p className="zalo-qr-desc">
                Chụp ảnh phiếu thông tin hoặc bấm <strong>In Phiếu Đơn Hàng</strong>, sau đó quét mã QR bên dưới để gửi thông tin đặt hàng trực tiếp cho cửa hàng qua Zalo.
              </p>

              <div className="zalo-qr-wrapper">
                <div className="zalo-qr-container">
                  <div className="zalo-scan-line"></div>
                  <img
                    className="zalo-qr-image"
                    src={qrZalo}
                    alt="Zalo QR Code"
                  />
                </div>
              </div>

              <div className="zalo-steps">
                <div className="zalo-step">
                  <span className="zalo-step-num">1</span>
                  <span>Chụp ảnh màn hình phiếu đơn bên trái (hoặc bấm In Phiếu).</span>
                </div>
                <div className="zalo-step">
                  <span className="zalo-step-num">2</span>
                  <span>Mở ứng dụng Zalo trên điện thoại, chọn Quét mã QR.</span>
                </div>
                <div className="zalo-step">
                  <span className="zalo-step-num">3</span>
                  <span>Gửi hình ảnh phiếu thông tin và nhận xác nhận giao hàng!</span>
                </div>
              </div>
              
              <button className="zalo-action-btn" onClick={() => window.open('https://zalo.me', '_blank')}>
                Mở Zalo Trên Web
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
