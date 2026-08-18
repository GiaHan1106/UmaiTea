import { useEffect, useRef } from 'react';

const TIERS = [
  {
    id: 'tier-5',
    qty: 5,
    unit: 'ly',
    reward: '1 phần Topping Trân Châu',
    desc: 'Thêm vào bất kỳ ly nào bạn thích',
    accent: '#7c4a2d',
    bg: 'linear-gradient(135deg, #fff8f2 0%, #fdecd9 100%)',
    pill: '#f5dfc0',
  },
  {
    id: 'tier-10',
    qty: 10,
    unit: 'ly',
    reward: '1 ly bất kì',
    desc: 'Tự chọn bất cứ sản phẩm nào trong thực đơn',
    accent: '#5a3820',
    bg: 'linear-gradient(135deg, #f7f0e6 0%, #ecdcc6 100%)',
    pill: '#d4b896',
  },
];

export default function PromoBanner() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pb-card--visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-section">
      <div className="pb-wrapper container">

        {/* Section label */}
        <div className="pb-eyebrow">
          <span className="pb-eyebrow-line" />
          <span className="pb-eyebrow-text">Chương trình tích điểm</span>
          <span className="pb-eyebrow-line" />
        </div>

        {/* Heading */}
        <div className="pb-heading">
          <h2 className="pb-title">Mua nhiều<span className="pb-title-accent"> – Quà càng nhiều</span></h2>
          <p className="pb-subtitle">Tích lũy mỗi lần uống, nhận ngay phần quà xứng đáng từ UmaiTea 🎁</p>
        </div>

        {/* Tier cards */}
        <div className="pb-cards">
          {TIERS.map((tier, i) => (
            <div
              key={tier.id}
              className="pb-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                '--pb-accent': tier.accent,
                '--pb-bg': tier.bg,
                '--pb-pill': tier.pill,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Left: qty badge */}
              <div className="pb-badge">
                <span className="pb-badge-num">{tier.qty}</span>
                <span className="pb-badge-unit">{tier.unit}</span>
              </div>

              {/* Divider */}
              <div className="pb-divider">
                <span className="pb-arrow">→</span>
              </div>

              {/* Right: reward info */}
              <div className="pb-reward">
                <div className="pb-reward-top">
                  <div>
                    <span className="pb-reward-tag">TẶNG NGAY</span>
                    <p className="pb-reward-name">{tier.reward}</p>
                  </div>
                </div>
                <p className="pb-reward-desc">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="pb-footnote">* Áp dụng khi mua trực tiếp tại quán · Không giới hạn số lần tích lũy</p>
      </div>
    </section>
  );
}
