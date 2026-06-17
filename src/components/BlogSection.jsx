import { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    category: "KINH NGHIỆM",
    date: "05/06/2026",
    title: "Quy trình ủ trà ô long chuẩn vị đậm đà hậu ngọt đặc trưng",
    excerpt: "Làm sao để ủ trà ô long không bị đắng chát mà vẫn đượm hương hoa? UmaiTea bật mí phương pháp khống chế nhiệt độ nước và thời gian ủ chuẩn mực của chuyên gia pha chế...",
    content: "Trà ô long là loại trà bán lên men độc đáo. Để đánh thức trọn vẹn hương vị hoa lan thoang thoảng cùng hậu vị ngọt êm dịu, UmaiTea sử dụng nước lọc tinh khiết đun sôi đến chính xác 90-92 độ C, tỷ lệ trà và nước là 1:30. Thời gian ủ tối ưu dao động từ 10 đến 12 phút tùy thuộc vào độ xoắn của lá trà ô long. Sau khi ủ, trà cần được làm lạnh nhanh bằng đá để khóa chặt hương thơm tự nhiên và ngăn quá trình oxy hóa tiếp diễn làm sẫm màu nước.",
    imgUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    category: "TIN TỨC",
    date: "01/06/2026",
    title: "UmaiTea khai trương chi nhánh mới tại Cầu Giấy Hà Nội",
    excerpt: "Mừng cột mốc tiếp theo trên hành trình phát triển, UmaiTea Cầu Giấy chính thức khai trương với chương trình Mua 1 Tặng 1 toàn bộ menu cùng hàng ngàn quà tặng độc quyền...",
    content: "Tọa lạc tại địa chỉ số 89 Cầu Giấy, Hà Nội, chi nhánh mới sở hữu không gian mở 2 tầng ngập tràn ánh sáng tự nhiên với phong cách thiết kế hiện đại đan xen sắc xanh thông ấm áp. Nhân dịp khai trương từ 05/06 đến 07/06, khách hàng ghé thăm sẽ được tham gia chương trình 'Mua 1 Tặng 1', check-in nhận ly giữ nhiệt Umai giới hạn và thưởng thức trà sữa ngon chuẩn vị.",
    imgUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    category: "KINH NGHIỆM",
    date: "28/05/2026",
    title: "Bí quyết kết hợp topping phô mai tươi cho từng dòng trà",
    excerpt: "Topping phô mai tươi béo ngậy đang làm mưa làm gió tại UmaiTea. Hãy cùng tìm hiểu cách kết hợp loại topping độc đáo này với trà sữa và trà trái cây sao cho ngon miệng nhất...",
    content: "Topping phô mai tươi được làm từ kem phô mai Pháp thượng hạng nên có độ mềm mịn như tuyết, béo ngậy mặn ngọt nhẹ. Khi kết hợp với các dòng trà đậm chát nhẹ như Trà Thiết Quan Âm hoặc Hồng Trà sữa nguyên lá sẽ tạo nên sự cân bằng hoàn hảo. Tuy nhiên, nếu dùng chung với trà trái cây chua thanh như Trà Cam Quýt, hãy yêu cầu giảm ngọt để vị thanh mát của trái cây không bị độ béo lấn át.",
    imgUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600"
  }
];

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-cursive">Góc Trà Chiêm Nghiệm</span>
          <h2 className="section-title">TIN TỨC & KINH NGHIỆM</h2>
        </div>

        <div className="blog-grid">
          {ARTICLES.map(article => (
            <div key={article.id} className="blog-card">
              <div className="blog-img-wrapper">
                <span className="blog-tag">{article.category}</span>
                <img
                  className="blog-img"
                  src={article.imgUrl}
                  alt={article.title}
                />
              </div>
              <div className="blog-body">
                <span className="blog-date">📅 {article.date}</span>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <button
                  className="blog-more"
                  onClick={() => setSelectedArticle(article)}
                >
                  Xem thêm ➜
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Article Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '600px', maxHeight: '80vh' }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedArticle(null)}
              aria-label="Đóng"
            >
              ✕
            </button>
            <div style={{ overflowY: 'auto', padding: '30px' }}>
              <span
                style={{
                  fontSize: '11px',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}
              >
                {selectedArticle.category}
              </span>
              <span style={{ fontSize: '13px', marginLeft: '12px', color: 'var(--text-muted)' }}>
                📅 {selectedArticle.date}
              </span>
              <h2 style={{ fontSize: '22px', margin: '15px 0', color: 'var(--primary)' }}>
                {selectedArticle.title}
              </h2>
              <img
                src={selectedArticle.imgUrl}
                alt={selectedArticle.title}
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
              />
              <p style={{ fontSize: '14px', lineHeight: '1.7', whiteSpace: 'pre-line', color: 'var(--text-main)' }}>
                {selectedArticle.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
