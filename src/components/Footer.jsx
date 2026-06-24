
export default function Footer({ setActiveTab }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand details */}
          <div>
            <h3 className="footer-col-title">VỀ UMAITEA</h3>
            <p className="footer-about-desc">
              UmaiTea tự hào là thương hiệu trà sữa Việt Nam mang hương vị nguyên chất truyền thống kết hợp quy chuẩn pha chế hiện đại, tạo nên tách trà sữa đậm chát ngọt ngào, mát lành an toàn sức khỏe.
            </p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-btn" aria-label="Facebook">FB</a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">IG</a>
              <a href="#" className="footer-social-btn" aria-label="Youtube">YT</a>
              <a href="#" className="footer-social-btn" aria-label="Zalo">ZL</a>
            </div>
          </div>

          {/* Column 2: Contact details */}
          <div>
            <h3 className="footer-col-title">LIÊN HỆ VỚI UMAITEA</h3>
            <ul className="footer-contact-list">
              <li>
                <span>📍</span>
                <span>Trụ sở chính: Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <span>📞</span>
                <span>Hotline đặt hàng: 0974 200 611</span>
              </li>
              <li>
                <span>✉️</span>
                <span>Email hỗ trợ: support@umaitea.vn</span>
              </li>
              <li>
                <span>💼</span>
                <span>Hợp tác nhượng quyền: franchise@umaitea.vn</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Links */}
          <div>
            <h3 className="footer-col-title">DANH MỤC LIÊN KẾT</h3>
            <ul className="footer-menu">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>Trang Chủ</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('menu'); }}>Thực Đơn Đồ Uống</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('stores'); }}>Hệ Thống Cửa Hàng</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('franchise'); }}>Hợp Tác Nhượng Quyền</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('blog'); }}>Tin Tức & Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} UmaiTea. Toàn bộ bản quyền được bảo lưu.</p>
          <p>Code by Gia Hân</p>
        </div>
      </div>
    </footer>
  );
}
