import { useEffect, useRef } from 'react';

const REWARDS = [
  {
    points: 50,
    label: 'Tặng 1 ly bất kỳ',
    desc: 'Đổi điểm lấy bất cứ sản phẩm nào trong thực đơn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l1 6H7L8 2z" /><path d="M7 8c0 5 2 9 5 9s5-4 5-9" />
        <path d="M10 17v3" /><path d="M14 17v3" /><path d="M8 20h8" />
      </svg>
    ),
  },
  {
    points: 100,
    label: 'Giảm 5% hóa đơn',
    desc: 'Áp dụng cho tất cả hóa đơn tiếp theo của bạn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    points: 200,
    label: 'Giảm 7% hóa đơn',
    desc: 'Ưu đãi cao nhất dành cho khách hàng thân thiết',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" />
        <path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
];

export default function LoyaltySection() {
  const rowRefs = useRef([]);
  const headerRef = useRef(null);
  const ruleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('ls-visible')),
      { threshold: 0.15 }
    );
    [headerRef, ruleRef, ...rowRefs.current.map((r) => ({ current: r }))]
      .forEach((ref) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ls-section">
      {/* Soft blobs */}
      <div className="ls-blob ls-blob--a" />
      <div className="ls-blob ls-blob--b" />

      <div className="ls-wrapper container">

        {/* Header */}
        <div className="ls-header ls-reveal" ref={headerRef}>
          <div className="ls-eyebrow">
            <span className="ls-eyebrow-line" />
            <span className="ls-eyebrow-text">Tích điểm · Đổi quà</span>
            <span className="ls-eyebrow-line" />
          </div>
          <h2 className="ls-title">Chương trình <span className="ls-title-accent">Tích Điểm</span></h2>
          <p className="ls-subtitle">Tích lũy điểm mỗi lần mua — đổi thành phần quà giá trị</p>
        </div>

        {/* Earn rule card */}
        <div className="ls-earn-card ls-reveal" ref={ruleRef} style={{ transitionDelay: '0.1s' }}>
          <div className="ls-earn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M9 7h6M9 11h6M9 15h4" />
            </svg>
          </div>
          <div className="ls-earn-body">
            <strong className="ls-earn-rule">Mỗi 10.000 ₫ = <span>1 điểm</span></strong>
            <p className="ls-earn-note">Điểm được tự động cộng qua số điện thoại của khách hàng</p>
          </div>
          <div className="ls-earn-badge">★</div>
        </div>

        {/* Redeem label */}
        <div className="ls-redeem-label ls-reveal" style={{ transitionDelay: '0.18s' }}>
          <span className="ls-redeem-line" />
          <span className="ls-redeem-text">✦ Ưu đãi đổi điểm ✦</span>
          <span className="ls-redeem-line" />
        </div>

        {/* Reward rows */}
        <div className="ls-rewards">
          {REWARDS.map((r, i) => (
            <div
              key={r.points}
              className="ls-reward-row ls-reveal"
              ref={(el) => (rowRefs.current[i] = el)}
              style={{ transitionDelay: `${0.24 + i * 0.1}s` }}
            >
              {/* Points pill */}
              <div className="ls-points-pill">
                <span className="ls-points-num">{r.points}</span>
                <span className="ls-points-unit">điểm</span>
              </div>

              {/* Arrow */}
              <span className="ls-row-arrow">→</span>

              {/* Icon */}
              <span className="ls-row-icon">{r.icon}</span>

              {/* Text */}
              <div className="ls-row-text">
                <strong className="ls-row-label">{r.label}</strong>
                <span className="ls-row-desc">{r.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="ls-note ls-reveal" style={{ transitionDelay: '0.56s' }}>
          <span className="ls-note-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <p><strong>Lưu ý:</strong> Điểm tích lũy có hiệu lực trong <strong>1 năm</strong> và sẽ được reset sau 1 năm.</p>
        </div>

      </div>
    </section>
  );
}
