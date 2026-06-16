import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner/1.jpg';
import banner2 from '../assets/banner/2.jpg';
import banner3 from '../assets/banner/3.jpg';

const slides = [
  {
    cursive: "Umai Bạc Xỉu",
    title: "BẠC XỈU",
    desc: "Sự hòa quyện tuyệt vời giữa hương vị cà phê phin truyền thống và vị sữa béo ngậy ngọt ngào, thơm ngon khó cưỡng.",
    bgUrl: banner1,
    actionText: "THỬ NGAY CÙNG UMAI",
  },
  {
    cursive: "Umai Signature",
    title: "TRÀ OLONG NGUYÊN LÁ",
    desc: "Vị trà oolong chát nhẹ đượm hương hoa quyện cùng sữa béo thơm vừa vặn, đánh thức mọi giác quan thưởng thức.",
    bgUrl: banner2,
    actionText: "KHÁM PHÁ THỰC ĐƠN",
  },
  {
    cursive: "100% Matcha Nhật",
    title: "MATCHA LATTE",
    desc: "Trải nghiệm lớp Matcha béo mịn sánh đặc phủ dày trên nền sữa beo béo, thơm hương tự nhiên.",
    bgUrl: banner3,
    actionText: "ĐẶT HÀNG NHANH",
  }
];

export default function Hero({ onCtaClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, idx) => (
        <div key={idx} className={`hero-slide ${idx === current ? 'active' : ''}`}>
          <div
            className="hero-bg-image"
            style={{ backgroundImage: `url(${slide.bgUrl})` }}
          />
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className="hero-content">
              <span className="hero-cursive">{slide.cursive}</span>
              <h2 className="hero-title">{slide.title}</h2>
              <p className="hero-desc">{slide.desc}</p>
              <button className="hero-btn" onClick={onCtaClick}>
                {slide.actionText} →
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button className="slider-arrow slider-prev" onClick={handlePrev} aria-label="Slide trước">
        ❮
      </button>
      <button className="slider-arrow slider-next" onClick={handleNext} aria-label="Slide tiếp theo">
        ❯
      </button>

      <div className="slider-controls">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Đi tới slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
