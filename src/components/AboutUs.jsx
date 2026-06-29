import imgChung from '../assets/MILKTEA/CHUNG.svg';

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
                <img src={imgChung} alt="UmaiTea Story" className="about-story-image" />
                <div className="image-decoration-badge">Since 2024</div>
              </div>
              <div className="about-story-content">
                <h3 className="story-subtitle">Tinh hoa trà sữa nguyên lá khởi nguồn từ đam mê</h3>
                <p className="story-text">
                  UmaiTea ra đời không chỉ đơn thuần là một quán trà sữa phục vụ thức uống, mà là kết quả của một hành trình tìm kiếm và gìn giữ hương vị trà sữa nguyên bản ngon đúng điệu. Giữa thị trường tràn ngập bột béo hóa học và hương liệu nhân tạo, UmaiTea kiên định lựa chọn con đường khó khăn hơn: <strong>Trà sữa nguyên lá tự nhiên</strong>.
                </p>
                <p className="story-text">
                  Chúng tôi tuyển chọn nghiêm ngặt những búp trà tươi ngon nhất từ các nông trường trà trứ danh tại Việt Nam, trải qua quy trình sấy và ủ trà thủ công chuẩn xác để giữ được trọn vị chát ngọt sâu lắng của trà. Khi kết hợp với tỷ lệ sữa béo ngậy lý tưởng, mỗi ly UmaiTea trao tay khách hàng đều là tác phẩm đong đầy sự cân bằng hoàn mỹ, tốt cho sức khỏe và tràn ngập năng lượng thư giãn.
                </p>
                <div className="story-quote">
                  "Umai trong tiếng Nhật đại diện cho sự ngon miệng và niềm hạnh phúc mộc mạc. Chúng tôi hy vọng từng giọt trà thanh khiết tại UmaiTea sẽ mang lại cảm giác bình yên ấm áp trong mỗi ngày dài làm việc của bạn."
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
                    <span>Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh</span>
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
              <div className="store-simulated-map" style={{
                backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                backgroundColor: 'var(--bg-body)'
              }}>
                <div style={{ position: 'absolute', inset: 0, border: '10px solid var(--border-color)', opacity: 0.15 }}></div>
                <div style={{ position: 'absolute', top: '30%', left: '10%', right: '10%', height: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
                <div style={{ position: 'absolute', top: '60%', left: '10%', right: '10%', height: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
                <div style={{ position: 'absolute', left: '40%', top: '5%', bottom: '5%', width: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
                <div style={{ position: 'absolute', left: '75%', top: '5%', bottom: '5%', width: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
                
                {/* Single pin marker */}
                <div
                  className="map-pin active"
                  style={{ top: '45%', left: '55%' }}
                  title="UmaiTea Nguyễn Thượng Hiền"
                />
                
                <div
                  className="map-pin-label"
                  style={{
                    top: 'calc(45% - 35px)',
                    left: 'calc(55% - 100px)'
                  }}
                >
                  📍 UmaiTea Bàn Cờ - Quận 3
                </div>

                <div className="map-overlay-detail">
                  <h4 className="map-overlay-title">UmaiTea Quận 3</h4>
                  <p style={{ fontSize: '13px', marginBottom: '8px' }}>Số 222 Nguyễn Thượng Hiền, P. Bàn Cờ, Q. 3</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.8 }}>
                    <span>☎️ 0974 200 611</span>
                    <span>⏰ 08:30 - 22:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
