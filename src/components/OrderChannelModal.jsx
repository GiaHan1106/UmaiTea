export default function OrderChannelModal({ isOpen, onClose, onSelectWeb, grabLink = 'https://food.grab.com' }) {
  if (!isOpen) return null;

  const handleGrabSelect = () => {
    window.open(grabLink, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', borderRadius: '16px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', padding: '30px 24px', textAlign: 'center', alignItems: 'center' }}>
          <span style={{ marginBottom: '15px', color: 'var(--primary)' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
          <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--primary-dark)' }}>
            BẠN MUỐN ĐẶT HÀNG QUA KÊNH NÀO?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '25px', lineHeight: '1.6' }}>
            UmaiTea hiện đã có mặt trên các nền tảng. Vui lòng chọn phương thức đặt hàng tiện lợi nhất cho bạn!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
            {/* Grab Option */}
            <button
              onClick={handleGrabSelect}
              className="channel-btn-grab"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid #00B14F',
                background: '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <strong style={{ display: 'block', color: '#00B14F', fontSize: '15px', marginBottom: '4px' }}>
                  Đặt qua GrabFood
                </strong>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Nhiều chương trình ưu đãi, mã giảm giá hấp dẫn
                </span>
              </div>
              <span style={{ fontSize: '24px' }}>💚</span>
            </button>

            {/* Direct Web Option */}
            <button
              onClick={onSelectWeb}
              className="channel-btn-web"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid var(--primary)',
                background: '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)', fontSize: '15px', marginBottom: '4px' }}>
                  Đặt trực tiếp qua Website
                </strong>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Phù hợp đặt số lượng lớn, giao nhanh, phục vụ chu đáo
                </span>
              </div>
              <span style={{ fontSize: '24px' }}>🍵</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
