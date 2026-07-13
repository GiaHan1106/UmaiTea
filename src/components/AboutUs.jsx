import imgPoster from '../assets/POSTER.png';

export default function AboutUs({ isHomePage = false }) {
  return (
    <section className="about-us-section">
      <div className="container">
        {!isHomePage && (
          <>
            {/* Section Header */}
            <div className="section-header">
              <span className="section-cursive">Câu chuyện của chúng tôi</span>
              <h2 className="section-title">VỀ UMAITEA</h2>
            </div>

            {/* Story Grid */}
            <div className="about-story-grid">
              <div className="about-story-image-wrapper">
                <img src={imgPoster} alt="UmaiTea Story" className="about-story-image" />
              </div>
              <div className="about-story-content">
                <h3 className="story-subtitle">Trải nghiệm khác biệt từ công nghệ trà sữa pha máy</h3>
                <p className="story-text">
                  UmaiTea tự hào mang đến một góc nhìn mới mẻ về thưởng trà hiện đại: <strong>Trà sữa pha máy nguyên lá</strong>. Với tôn chỉ ưu tiên sức khỏe và sự thanh khiết tự nhiên, chúng tôi lựa chọn con đường kết hợp giữa nguồn nông sản Việt hảo hạng và công nghệ chiết xuất áp suất tân tiến.
                </p>
                <p className="story-text">
                  Bằng cách sử dụng máy pha chuyên dụng áp suất cao, từng lá trà nguyên bản được chiết xuất ngay tại quầy khi khách gọi món. Áp suất lớn từ máy giúp giải phóng trọn vẹn lớp dầu trà thơm ngát, vị chát ngọt sâu lắng cùng hương thơm tự nhiên trong thời gian tối ưu, tránh hiện tượng oxy hóa làm mất chất dinh dưỡng của trà. Khi quyện cùng tỷ lệ sữa béo ngậy lý tưởng, mỗi ly UmaiTea trao tay khách hàng đều giữ trọn vẹn vị tươi mới nguyên bản, đậm đà và tốt cho sức khỏe.
                </p>
                <div className="story-quote">
                  "Umai trong tiếng Nhật đại diện cho sự ngon miệng và niềm hạnh phúc mộc mạc. Chúng tôi hy vọng từng ly trà sữa pha máy tươi mới tại UmaiTea sẽ mang lại cảm giác bình yên ấm áp trong mỗi ngày dài làm việc của bạn."
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="about-values-section">
              <h3 className="values-main-title">GIÁ TRỊ CỐT LÕI</h3>
              <div className="values-grid">
                <div className="value-card">
                  <span className="value-icon">🍃</span>
                  <h4 className="value-title">Trà Nguyên Lá Hảo Hạng</h4>
                  <p className="value-desc">Cam kết sử dụng 100% lá trà tươi sấy khô nguyên bản, hoàn toàn không sử dụng phẩm màu hay hóa chất độc hại tạo mùi vị giả tạo.</p>
                </div>
                <div className="value-card">
                  <span className="value-icon">🍵</span>
                  <h4 className="value-title">Pha Chế Thủ Công Tỉ Mỉ</h4>
                  <p className="value-desc">Mọi mẻ trà đều được ủ mới theo từng giờ trong ngày để đảm bảo độ tươi mới tuyệt hảo và hậu vị mượt mà nhất.</p>
                </div>
                <div className="value-card">
                  <span className="value-icon">✨</span>
                  <h4 className="value-title">Trải Nghiệm Thư Giãn</h4>
                  <p className="value-desc">Chúng tôi kiến tạo không gian mộc mạc, tĩnh lặng lý tưởng để đọc sách, làm việc hoặc tâm tình ấm áp cùng người thân thương.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Single Store Info and Map */}
        <div className="single-store-section" id="store-detail">
          <div className="section-header">
            <span className="section-cursive">Ghé thăm chi nhánh của chúng tôi</span>
            <h2 className="section-title">CỬA HÀNG DUY NHẤT</h2>
          </div>
          
          <div className="store-detail-grid">
            <div className="store-detail-info">
              <h3 className="store-detail-name">UmaiTea Quận 3 - Nguyễn Thượng Hiền</h3>
              <p className="store-detail-intro">
                Nằm nép mình bình yên trên con phố Nguyễn Thượng Hiền, cửa hàng duy nhất của UmaiTea mang phong cách kiến trúc mộc mạc, pha chút hơi hướng vintage. Không gian ngập tràn ánh đèn vàng ấm cúng, bàn ghế gỗ thân thuộc cùng hương thơm nhẹ dịu từ trà ủ mới, đây là địa điểm lý tưởng để bạn đắm chìm vào những trang sách, tập trung làm việc hoặc cùng bạn bè chuyện trò thư thả sau ngày dài.
              </p>
              
              <div className="store-detail-list">
                <div className="store-detail-item">
                  <span className="item-icon">📍</span>
                  <div className="item-text">
                    <strong>Địa chỉ cửa hàng:</strong>
                    <span>Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, TP.HCM</span>
                  </div>
                </div>
                <div className="store-detail-item">
                  <span className="item-icon">📞</span>
                  <div className="item-text">
                    <strong>Hotline liên hệ:</strong>
                    <span>0974 200 611</span>
                  </div>
                </div>
                <div className="store-detail-item">
                  <span className="item-icon">🕒</span>
                  <div className="item-text">
                    <strong>Thời gian mở cửa:</strong>
                    <span>08:30 - 22:30 (Mở cửa tất cả các ngày lễ Tết)</span>
                  </div>
                </div>
              </div>

              <div className="customer-commitment-box">
                <h4 className="commitment-title">🤝 Cam kết dịch vụ từ UmaiTea</h4>
                <p className="commitment-text">
                  Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi. Nếu có bất kỳ điều gì về sản phẩm hoặc thái độ phục vụ của nhân viên làm bạn chưa ưng ý, xin vui lòng liên hệ trực tiếp với Chủ cửa hàng qua Hotline/Zalo: <strong>0974 200 611</strong>. Chúng tôi luôn sẵn sàng lắng nghe, phản hồi nhanh chóng và phục vụ bạn tốt nhất!
                </p>
              </div>
            </div>

            {/* Map Area */}
            <div className="store-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.9614325295925!2d106.68131407443484!3d10.774446089374187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f000dbb1a3d%3A0x8b2af0c7ed9008fe!2sUmai%20Tea!5e0!3m2!1sen!2s!4v1783915295501!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Umai Tea Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
