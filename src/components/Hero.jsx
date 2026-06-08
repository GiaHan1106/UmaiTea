import React, { useState, useEffect } from 'react';

const slides = [
  {
    cursive: "Umai Signature Fruit Tea",
    title: "TRÀ TRÁI CÂY TƯƠI MÁT",
    desc: "Giải nhiệt ngày hè với sự kết hợp tuyệt vời từ trà hoa lài thượng hạng và trái cây nhiệt đới tươi ngon mát lành.",
    bgUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200",
    actionText: "THỬ NGAY CÙNG UMAI",
  },
  {
    cursive: "Premium Oolong Series",
    title: "TRÀ SỮA OLONG NGUYÊN LÁ",
    desc: "Vị trà oolong chát nhẹ đượm hương hoa quyện cùng sữa béo thơm vừa vặn, đánh thức mọi giác quan thưởng thức.",
    bgUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1200",
    actionText: "KHÁM PHÁ THỰC ĐƠN",
  },
  {
    cursive: "Creamy Cheese Foam",
    title: "ĐỘC ĐÁO LỚP KEM BÉO MỊN",
    desc: "Trải nghiệm lớp kem mặn phô mai béo mịn sánh đặc phủ dày trên nền trà ô long đậm đà hậu vị ngọt êm dịu.",
    bgUrl: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=1200",
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
