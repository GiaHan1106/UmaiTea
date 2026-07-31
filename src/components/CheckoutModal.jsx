import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, onSubmit, totalAmount }) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [formError, setFormError] = useState({});

  if (!isOpen) return null;

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!customerName.trim()) tempErrors.name = 'Vui lòng nhập họ và tên';
    if (!customerPhone.trim()) {
      tempErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(customerPhone.trim())) {
      tempErrors.phone = 'Số điện thoại không hợp lệ (10-11 số)';
    }

    if (Object.keys(tempErrors).length > 0) {
      setFormError(tempErrors);
      return;
    }

    onSubmit(customerName.trim(), customerPhone.trim());
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
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', padding: '25px 20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px', textAlign: 'center', color: 'var(--primary-dark)', width: '100%' }}>
            THÔNG TIN GIAO HÀNG
          </h3>

          <form onSubmit={handleFinalSubmit} style={{ width: '100%' }}>
            <div className="form-group" style={{ marginBottom: '15px', width: '100%' }}>
              <label className="form-label">Họ và Tên người nhận *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ và tên của bạn..."
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {formError.name && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{formError.name}</span>}
            </div>

            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label className="form-label">Số điện thoại liên hệ *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại..."
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
              {formError.phone && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{formError.phone}</span>}
            </div>

            <div className="modal-hotline-box" style={{
              background: 'rgba(95, 58, 42, 0.05)',
              border: '1px dashed var(--primary)',
              borderRadius: '8px',
              padding: '12px 15px',
              textAlign: 'center',
              marginBottom: '15px',
              width: '100%'
            }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Tổng thanh toán: </span>
              <strong style={{ fontSize: '18px', color: 'var(--primary)', display: 'block', margin: '5px 0' }}>
                {formatPrice(totalAmount)}
              </strong>
              <p style={{ fontSize: '11px', margin: 0, color: 'var(--text-muted)', opacity: 0.8 }}>
                (Gọi Hotline 0974.200.611 nếu cần hỗ trợ gấp)
              </p>
            </div>

            <p style={{ fontSize: '11px', color: 'var(--accent-red)', textAlign: 'center', marginBottom: '15px', fontStyle: 'italic', fontWeight: 600, lineHeight: '1.4' }}>
              * Lưu ý: Đơn hàng đặt qua Website không áp dụng chương trình Mua 1 Tặng 1 (chỉ áp dụng khi mua trực tiếp tại quán).
            </p>

            <div style={{ display: 'flex', gap: '15px', width: '100%', marginTop: '10px' }}>
              <button 
                type="button" 
                className="modal-btn-option" 
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', margin: 0 }}
                onClick={onClose}
              >
                Quay lại
              </button>
              <button 
                type="submit" 
                className="modal-add-cart-btn" 
                style={{ flex: 2, padding: '12px', borderRadius: '8px', background: 'var(--primary)', color: '#fff', fontWeight: 'bold', margin: 0 }}
              >
                XÁC NHẬN ĐƠN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
