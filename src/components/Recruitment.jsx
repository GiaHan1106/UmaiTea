import qrZalo from '../assets/QRZALO.png';

export default function Recruitment() {
  return (
    <section className="recruitment-section" style={{ padding: '60px 0', backgroundColor: 'var(--bg-body)' }}>
      <div className="recruitment-container">
        {/* Title Section */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-cursive">Gia Nhập Đội Ngũ UmaiTea</span>
          <h2 className="section-title">CƠ HỘI NGHỀ NGHIỆP</h2>
        </div>

        {/* Intro Card */}
        <div className="recruitment-intro-card">
          <p style={{ fontSize: '15.5px', opacity: 0.95, lineHeight: '1.8', color: 'var(--text-color)', margin: 0 }}>
            UmaiTea không chỉ mang đến những ly trà sữa hảo hạng, mà còn kiến tạo một môi trường làm việc năng động, sáng tạo và ngập tràn niềm vui. Hãy đồng hành cùng chúng tôi để phát triển bản thân và cùng trao gửi những ly trà tràn đầy hạnh phúc tới khách hàng!
          </p>
        </div>

        {/* Job Details Card */}
        <div className="recruitment-job-card">
          <span className="job-badge">Part-time</span>
          <h3 className="job-title">Nhân viên Pha chế Take-away (Barista)</h3>
          
          <div className="job-meta">
            <div className="job-meta-item">
              <span>📍</span> <span>Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, TP.HCM</span>
            </div>
            <div className="job-meta-item">
              <span>⏰</span> <span>Xoay ca linh hoạt (4h - 6h/ngày)</span>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(95, 58, 42, 0.08)', paddingTop: '20px' }}>
            <h4 className="job-section-title">📋 Mô tả công việc</h4>
            <ul className="job-list">
              <li>Pha chế các loại trà sữa pha máy, trà trái cây, matcha... theo đúng quy chuẩn công thức của UmaiTea.</li>
              <li>Đóng gói đồ uống cẩn thận, bàn giao cho khách hàng hoặc các tài xế dịch vụ giao hàng (take-away).</li>
              <li>Chuẩn bị nguyên vật liệu pha chế và giữ gìn vệ sinh sạch sẽ, ngăn nắp khu vực quầy bar.</li>
            </ul>

            <h4 className="job-section-title">⚡ Yêu cầu tuyển dụng</h4>
            <ul className="job-list">
              <li><strong>Ưu tiên các bạn học sinh, sinh viên</strong> (hỗ trợ sắp xếp xoay ca linh hoạt theo lịch học).</li>
              <li>Tác phong diện mạo: <strong>Đầu tóc gọn gàng, sạch sẽ</strong>, luôn chỉn chu trong ca làm việc.</li>
              <li>Nhanh nhẹn, trung thực, có thái độ làm việc tích cực, trách nhiệm và luôn vui vẻ với khách hàng.</li>
              <li>Chưa có kinh nghiệm sẽ được đội ngũ UmaiTea hướng dẫn và đào tạo bài bản từ đầu.</li>
            </ul>

            <h4 className="job-section-title">🎁 Quyền lợi hấp dẫn</h4>
            <ul className="job-list job-benefit-list">
              <li><strong>Cam kết: Hoàn toàn KHÔNG ĐÓNG BẤT KỲ KHOẢN PHÍ NÀO</strong> khi nộp hồ sơ, ứng tuyển và nhận việc.</li>
              <li><strong>Được cấp phát đồng phục</strong> UmaiTea năng động, chuyên nghiệp.</li>
              <li>Lương cơ bản cạnh tranh theo giờ làm việc.</li>
              <li><strong>Thưởng chuyên cần</strong> hấp dẫn hàng tháng cho nhân viên làm việc chăm chỉ.</li>
              <li><strong>Thưởng doanh số theo cá nhân</strong> dựa trên số lượng ly phục vụ thực tế trong ca.</li>
              <li>Được làm việc trong môi trường năng động, thoải mái, có cơ hội học hỏi kỹ năng pha chế chuyên nghiệp.</li>
            </ul>
          </div>
        </div>

        {/* Premium Apply Box */}
        <div className="apply-container-premium">
          <div className="apply-info-side">
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--secondary)', marginBottom: '15px' }}>
              ỨNG TUYỂN NGAY QUA ZALO
            </h3>
            <p style={{ fontSize: '15px', opacity: 0.9, lineHeight: '1.7', marginBottom: '25px' }}>
              Quét mã QR Zalo bên cạnh để liên hệ trực tiếp với bộ phận nhân sự của UmaiTea. Hãy kết nối và nhắn tin trao đổi thông tin (Họ tên, năm sinh, vị trí ứng tuyển) để chúng ta hẹn lịch phỏng vấn nhé!
            </p>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--secondary)' }}>
              📞 Hotline nhân sự: 0974 200 611
            </div>
          </div>
          
          <div className="apply-qr-side">
            <div className="apply-qr-card">
              <img 
                src={qrZalo} 
                alt="Mã QR Zalo ứng tuyển UmaiTea" 
                className="apply-qr-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
