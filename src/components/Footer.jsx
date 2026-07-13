
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
              <a href="https://www.facebook.com/share/1FyEpcv9A1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@umai.tea?_r=1&_t=ZS-97zOu7QZS8D" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://zalo.me/0974200611" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Zalo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  <path d="M9 10h6l-6 5h6" />
                </svg>
              </a>
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
                <span>Địa chỉ: Số 222 Nguyễn Thượng Hiền, Phường Bàn Cờ, TP.HCM</span>
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
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('recruitment'); }}>Tuyển Dụng</a>
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
