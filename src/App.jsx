import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import OrderModal from './components/OrderModal.jsx';
import StoreLocator from './components/StoreLocator.jsx';
import Franchise from './components/Franchise.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';
import ReceiptModal from './components/ReceiptModal.jsx';
import { PRODUCTS } from './data/products.js';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentOrder, setCurrentOrder] = useState(null);

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOrderDirect = (orderItem) => {
    setSelectedProduct(null);
    setCurrentOrder(orderItem);
  };

  // Filtering products for the MENU page
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory =
      selectedCategory === 'ALL' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Home Featured Products (e.g. 5 best/hot products)
  const featuredProducts = PRODUCTS.filter(p => p.badge === 'BEST' || p.badge === 'HOT').slice(0, 5);

  return (
    <>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <>
            {/* Banner promotion slider */}
            <Hero onCtaClick={() => setActiveTab('menu')} />

            {/* Featured Section */}
            <section className="menu-display-section container">
              <div className="section-header">
                <span className="section-cursive">Bestsellers</span>
                <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
              </div>
              <div className="product-grid">
                {featuredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOrderClick={setSelectedProduct}
                  />
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                  className="hero-btn"
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                    setActiveTab('menu');
                  }}
                >
                  XEM TOÀN BỘ THỰC ĐƠN
                </button>
              </div>
            </section>

            {/* Simulated Mid-Promo banner */}
            <section style={{
              background: 'linear-gradient(rgba(var(--primary-dark-rgb), 0.95), rgba(var(--primary-dark-rgb), 0.95)), url("https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1200")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#ffffff',
              padding: '80px 20px',
              textAlign: 'center'
            }}>
              <div className="container" style={{ maxWidth: '800px' }}>
                <span className="hero-cursive" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '15px' }}>UmaiTea Franchise</span>
                <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>HỢP TÁC NHƯỢNG QUYỀN THƯƠNG HIỆU UMAITEA</h2>
                <p style={{ fontSize: '15px', opacity: 0.85, marginBottom: '30px', lineHeight: '1.7' }}>
                  Cơ hội đầu tư kinh doanh trà sữa phát triển vững chắc. Đồng hành cùng UmaiTea sở hữu cửa hàng tiêu chuẩn chất lượng cao, tiếp cận tệp khách hàng yêu thích vị trà sữa nguyên lá đậm đà béo ngậy.
                </p>
                <button
                  className="hero-btn"
                  style={{ background: 'var(--secondary)', color: 'var(--primary-dark)' }}
                  onClick={() => setActiveTab('franchise')}
                >
                  TÌM HIỂU CHÍNH SÁCH NHƯỢNG QUYỀN
                </button>
              </div>
            </section>

            {/* Store and News Quick Previews */}
            <StoreLocator />
            <BlogSection />
          </>
        )}

        {activeTab === 'menu' && (
          <div className="container">
            {/* Category tabs sticky bar */}
            <div className="category-tabs-container">
              <div className="category-tabs">
                {[
                  { key: 'ALL', name: 'Tất cả' },
                  { key: 'MILK TEA', name: 'Trà sữa' },
                  { key: 'FRUIT TEA', name: 'Trà trái cây' },
                  { key: 'MATCHA', name: 'Matcha' },
                  { key: 'COFFEE', name: 'Coffee' },
                  { key: 'TOPPING', name: 'Topping' }
                ].map(cat => (
                  <button
                    key={cat.key}
                    className={`category-tab ${selectedCategory === cat.key ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(cat.key);
                      // Clear search query on category switch to prevent empty grid confusion
                      setSearchQuery('');
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search feedback */}
            {searchQuery && (
              <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
                Kết quả tìm kiếm cho: <strong>"{searchQuery}"</strong> trong <strong>{selectedCategory === 'ALL' ? 'Tất cả danh mục' : selectedCategory}</strong>
              </p>
            )}

            {/* Filtered Products Section */}
            <section className="menu-display-section">
              {filteredProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
                  <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>🍵</span>
                  <p>Không tìm thấy sản phẩm phù hợp. Vui lòng thử tìm từ khoá khác.</p>
                </div>
              ) : (
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onOrderClick={setSelectedProduct}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === 'stores' && <StoreLocator />}

        {activeTab === 'franchise' && <Franchise />}

        {activeTab === 'blog' && <BlogSection />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Interactive custom product customizer modal */}
      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOrderDirect={handleOrderDirect}
        />
      )}

      {/* Receipt & Zalo QR Scan Modal */}
      {currentOrder && (
        <ReceiptModal
          order={currentOrder}
          onClose={() => setCurrentOrder(null)}
        />
      )}
    </>
  );
}
