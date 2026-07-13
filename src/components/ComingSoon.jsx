import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-07-30T00:00:00+07:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOpened: false
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOpened: false
      };
    } else {
      timeLeft.isOpened = true;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section className="coming-soon-section">
      <div className="container">
        {/* Background Glowing Drift Blobs */}
        <div className="coming-soon-bg-blob blob-1"></div>
        <div className="coming-soon-bg-blob blob-2"></div>

        <div className="coming-soon-card">
          <div className="coming-soon-glow"></div>
          
          {/* Animated Fireworks */}
          <div className="fireworks-container">
            <div className="firework fw-1"></div>
            <div className="firework fw-2"></div>
            <div className="firework fw-3"></div>
            <div className="firework fw-4"></div>
          </div>
          
          {/* Floating animated ambient icons */}
          <div className="floating-bubble bubble-1">✨</div>
          <div className="floating-bubble bubble-2">🎁</div>
          <div className="floating-bubble bubble-3">🍵</div>
          <div className="floating-bubble bubble-4">✨</div>
          
          {timeLeft.isOpened ? (
            <>
              <div className="coming-soon-badge">🎉 CHÍNH THỨC KHAI TRƯƠNG 🎉</div>
              
              <h2 className="coming-soon-title" style={{ color: 'var(--secondary)' }}>HÔM NAY UMAI KHAI TRƯƠNG MUA 1 TẶNG 1!</h2>
              <h3 className="coming-soon-subtitle">UMAITEA CHÀO BẠN</h3>
              
              <p className="coming-soon-desc">
                Hôm nay UmaiTea chính thức khai trương chi nhánh đầu tiên! Hãy ghé ngay cửa hàng hoặc đặt trực tiếp qua website để nhận ngay ưu đãi bùng nổ <strong>MUA 1 TẶNG 1</strong> áp dụng cho toàn bộ thực đơn nước uống nguyên chất nhé!
                <span className="coming-soon-address-block">
                  Địa chỉ: Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, TP.HCM.
                </span>
              </p>

              <div className="coming-soon-promos" style={{ justifyContent: 'center' }}>
                <div className="promo-badge-item promo-buy1get1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="promo-icon-svg promo-icon-red">
                    <path d="M6 8L7 22H17L18 8H6Z" />
                    <path d="M5 8H19" />
                    <path d="M12 2L10 8" />
                  </svg>
                  <div className="promo-info-text">
                    <span className="promo-title-main">MUA 1 TẶNG 1</span>
                    <span className="promo-sub-main">Áp dụng cho ngày hôm nay</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '25px', textAlign: 'center' }}>
                <button
                  className="hero-btn"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--primary-dark)',
                    padding: '12px 32px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRadius: '30px',
                    boxShadow: '0 4px 15px rgba(204, 164, 59, 0.4)',
                    animation: 'pulse-coming-soon 1.8s infinite ease-in-out',
                    cursor: 'pointer',
                    margin: 0
                  }}
                  onClick={() => {
                    const el = document.querySelector('.menu-display-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ĐẶT NƯỚC NGAY 🍵
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="coming-soon-badge">🎉 ĐẠI TIỆC KHAI TRƯƠNG 🎉</div>
              
              <h2 className="coming-soon-title">30 . 07 . 2026</h2>
              <h3 className="coming-soon-subtitle">COMING SOON</h3>
              
              <p className="coming-soon-desc">
                UmaiTea chính thức trình làng chi nhánh đầu tiên! Hãy sẵn sàng để đánh thức vị giác với dòng Trà Sữa Pha Máy Nguyên Lá đậm đặc, béo ngậy và các thức uống Trà Trái Cây tươi mát, thanh lọc sức khỏe. Rất nhiều ưu đãi bùng nổ đang chờ đón bạn tại điểm hẹn mới!
                <span className="coming-soon-address-block">
                  Địa chỉ: Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, TP.HCM.
                </span>
              </p>

              {/* Animated Promo Badges */}
              <div className="coming-soon-promos">
                <div className="promo-badge-item promo-buy1get1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="promo-icon-svg promo-icon-red">
                    <path d="M6 8L7 22H17L18 8H6Z" />
                    <path d="M5 8H19" />
                    <path d="M12 2L10 8" />
                  </svg>
                  <div className="promo-info-text">
                    <span className="promo-title-main">MUA 1 TẶNG 1</span>
                    <span className="promo-sub-main">Áp dụng toàn thực đơn</span>
                  </div>
                </div>
              </div>

              <div className="coming-soon-countdown">
                <div className="countdown-bubble">
                  <span className="bubble-val">{formatNumber(timeLeft.days)}</span>
                  <span className="bubble-unit">Ngày</span>
                </div>
                <div className="countdown-colon">:</div>
                <div className="countdown-bubble">
                  <span className="bubble-val">{formatNumber(timeLeft.hours)}</span>
                  <span className="bubble-unit">Giờ</span>
                </div>
                <div className="countdown-colon">:</div>
                <div className="countdown-bubble">
                  <span className="bubble-val">{formatNumber(timeLeft.minutes)}</span>
                  <span className="bubble-unit">Phút</span>
                </div>
                <div className="countdown-colon">:</div>
                <div className="countdown-bubble">
                  <span className="bubble-val">{formatNumber(timeLeft.seconds)}</span>
                  <span className="bubble-unit">Giây</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
