import React, { useState } from 'react';

export default function Franchise() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Số điện thoại không hợp lệ (10-11 số)';
    }
    if (!formData.city.trim()) tempErrors.city = 'Vui lòng nhập tỉnh thành';
    if (!formData.budget) tempErrors.budget = 'Vui lòng chọn mức ngân sách';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const budgetText = {
        under500: 'Dưới 500 triệu VND',
        '500to1b': '500 triệu - 1 tỷ VND',
        '1bto2b': '1 tỷ - 2 tỷ VND',
        above2b: 'Trên 2 tỷ VND'
      }[formData.budget] || formData.budget;

      const subject = `ĐĂNG KÝ NHƯỢNG QUYỀN UMAITEA - Đối tác: ${formData.fullName}`;
      const body = `Kính gửi Ban quản trị UmaiTea,\n\nTôi muốn đăng ký nhận tư vấn nhượng quyền thương hiệu với thông tin chi tiết dưới đây:\n\n` +
                   `- Họ và Tên: ${formData.fullName}\n` +
                   `- Số điện thoại: ${formData.phone}\n` +
                   `- Khu vực dự kiến: ${formData.city}\n` +
                   `- Ngân sách đầu tư: ${budgetText}\n` +
                   `- Ghi chú / Yêu cầu thêm: ${formData.message || 'Không có'}\n\n` +
                   `Trân trọng!`;

      const mailtoUrl = `mailto:hgia11062001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open user's email client
      window.location.href = mailtoUrl;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', phone: '', city: '', budget: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="franchise-section" id="franchise">
      <div className="container">
        <div className="section-header">
          <span className="section-cursive">Hợp Tác Phát Triển</span>
          <h2 className="section-title">NHƯỢNG QUYỀN THƯƠNG HIỆU</h2>
        </div>

        <div className="franchise-intro">
          <p style={{ fontSize: '16px', opacity: 0.9 }}>
            Đồng hành cùng <strong>UmaiTea</strong> để mang tinh hoa trà sữa nguyên chất đến gần hơn với khách hàng. Với hệ thống vận hành chuyên nghiệp, nguyên liệu độc quyền chất lượng và quy trình hỗ trợ tối đa, chúng tôi cam kết khả năng sinh lời bền vững.
          </p>
        </div>

        <div className="franchise-grid">
          {/* Details list */}
          <div className="franchise-details-box">
            <div className="franchise-card">
              <h3 className="franchise-card-title">Chính Sách Hỗ Trợ Toàn Diện</h3>
              <p style={{ fontSize: '14px', opacity: 0.85 }}>
                UmaiTea hỗ trợ thiết kế cửa hàng 3D, cung cấp trang thiết bị độc quyền, đào tạo nghiệp vụ quản lý pha chế, tư vấn chiến lược marketing khai trương và hỗ trợ vận hành định kỳ.
              </p>
            </div>

            <div className="franchise-card">
              <h3 className="franchise-card-title">Tiêu Chí Chọn Địa Điểm</h3>
              <p style={{ fontSize: '14px', opacity: 0.85 }}>
                Mặt bằng có chiều ngang tối thiểu 4m, nằm ở các khu vực đông dân cư, gần trường học, văn phòng hoặc trung tâm thương mại. Ưu tiên các vị trí góc đường hoặc ngã tư.
              </p>
            </div>

            <div className="franchise-card">
              <h3 className="franchise-card-title">Chi Phí & Lợi Nhuận Dự Kiến</h3>
              <p style={{ fontSize: '14px', opacity: 0.85 }}>
                Tổng mức đầu tư ban đầu dao động từ 400 triệu đến 1.2 tỷ VND tùy quy mô diện tích. Thời gian hoàn vốn trung bình dự kiến từ 8 - 14 tháng hoạt động hiệu quả.
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="franchise-form-box">
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '25px', textAlign: 'center' }}>
              ĐĂNG KÝ TƯ VẤN NHƯỢNG QUYỀN
            </h3>

            {submitted ? (
              <div className="form-success-alert">
                🎉 Đăng ký thành công! Đơn đăng ký nhượng quyền đã được chuẩn bị và chuyển tiếp tới hgia11062001@gmail.com. Đội ngũ UmaiTea sẽ liên hệ với quý đối tác trong vòng 24h làm việc. Xin cảm ơn!
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Họ và Tên đối tác *</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Nhập họ tên của bạn..."
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Số điện thoại liên hệ *</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Nhập số điện thoại..."
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Khu vực dự kiến mở cửa hàng *</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="Ví dụ: Quận 1 TP.HCM, Cầu Giấy Hà Nội..."
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{errors.city}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Ngân sách đầu tư dự kiến *</label>
                <select
                  name="budget"
                  className="form-control"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn mức ngân sách phù hợp --</option>
                  <option value="under500">Dưới 500 triệu VND</option>
                  <option value="500to1b">500 triệu - 1 tỷ VND</option>
                  <option value="1bto2b">1 tỷ - 2 tỷ VND</option>
                  <option value="above2b">Trên 2 tỷ VND</option>
                </select>
                {errors.budget && <span style={{ color: 'var(--accent-red)', fontSize: '11px', fontWeight: 'bold' }}>{errors.budget}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Ghi chú / Yêu cầu thêm (Nếu có)</label>
                <textarea
                  name="message"
                  rows="3"
                  className="form-control"
                  placeholder="Chia sẻ thêm về mặt bằng, mong muốn hợp tác..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-form-btn">
                GỬI THÔNG TIN ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
