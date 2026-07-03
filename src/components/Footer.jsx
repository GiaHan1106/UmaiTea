
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Địa chỉ: Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Hotline đặt hàng: 0974 200 611</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email hỗ trợ: hgia11062001@gmail.com</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                <span>Hợp tác nhượng quyền: khoanguyen24062001@gmail.com</span>
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
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('stores'); }}>Giới Thiệu</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('franchise'); }}>Hợp Tác Nhượng Quyền</a>
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
