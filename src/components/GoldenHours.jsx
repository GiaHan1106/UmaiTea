import { useEffect, useRef, useState } from 'react';

const TIME_SLOTS = [
  { label: '16:00 – 19:00', peak: true },
  { label: '21:00 – 22:30', peak: false },
];

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="gh-clock-svg">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// Simple live-clock hook
function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function isGoldenHour(date) {
  const h = date.getHours();
  const m = date.getMinutes();
  const total = h * 60 + m;
  return (total >= 16 * 60 && total < 19 * 60) || (total >= 21 * 60 && total < 22 * 60 + 30);
}

export default function GoldenHours() {
  const sectionRef = useRef(null);
  const now = useClock();
  const active = isGoldenHour(now);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('gh-visible')),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gh-section" ref={sectionRef}>
      {/* Ambient glow */}
      <div className="gh-glow gh-glow--top" />
      <div className="gh-glow gh-glow--bottom" />

      <div className="gh-wrapper container">

        {/* Left column: headline */}
        <div className="gh-left">
          <span className="gh-eyebrow">Ưu đãi giờ cao điểm</span>
          <h2 className="gh-title">
            Khung Giờ<br />
            <span className="gh-title-gold">Vàng</span>
          </h2>
          <p className="gh-tagline">Ghé đúng giờ – nhận ngay phần thưởng!</p>

          {/* Live status badge */}
          <div className={`gh-status ${active ? 'gh-status--on' : 'gh-status--off'}`}>
            <span className="gh-status-dot" />
            {active ? 'Đang áp dụng ngay bây giờ!' : 'Chưa đến khung giờ vàng'}
          </div>
        </div>

        {/* Right column: info cards */}
        <div className="gh-right">

          {/* Time slots */}
          <div className="gh-card gh-card--times">
            <div className="gh-card-label">
              <ClockIcon />
              Áp dụng khung giờ
            </div>
            <div className="gh-slots">
              {TIME_SLOTS.map((slot) => (
                <div key={slot.label} className="gh-slot">
                  <span className="gh-slot-time">{slot.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reward card */}
          <div className="gh-card gh-card--reward">
            <span className="gh-reward-tag">TẶNG NGAY</span>
            <p className="gh-reward-name">Topping Trân Châu Bất Kì</p>
            <p className="gh-reward-sub">Chọn bất cứ loại trân châu nào trong menu</p>
          </div>

          {/* Note */}
          <div className="gh-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Chỉ áp dụng khi <strong>mua trực tiếp tại cửa hàng</strong></span>
          </div>

        </div>
      </div>
    </section>
  );
}
