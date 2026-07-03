import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-07-27T00:00:00+07:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
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
          
          <div className="coming-soon-badge">🎉 ĐẠI TIỆC KHAI TRƯƠNG 🎉</div>
          
          <h2 className="coming-soon-title">27 . 07 . 2026</h2>
          <h3 className="coming-soon-subtitle">COMING SOON</h3>
          
          <p className="coming-soon-desc">
            UMAI Tea hân hoan khai trương chi nhánh đầu tiên! Trải nghiệm trà sữa pha máy hiện đại & trà trái cây thanh mát nói không với đường, cùng nhiều ưu đãi hấp dẫn trong dịp khai trương.
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
            <div className="promo-badge-item promo-gifts">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="promo-icon-svg promo-icon-gold">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect width="20" height="5" x="2" y="7" rx="1" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
              </svg>
              <div className="promo-info-text">
                <span className="promo-title-main">NHẬN QUÀ MIỄN PHÍ</span>
                <span className="promo-sub-main">Nhiều phần quà khai trương</span>
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
        </div>
      </div>
    </section>
  );
}
