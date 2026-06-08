import React from 'react';

export default function Header({
  activeTab,
  setActiveTab,
  cartCount,
  setCartOpen,
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('menu');
  };

  return (
    <header className="header-wrapper">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <span>Chào mừng đến với UmaiTea - Tinh hoa trà sữa nguyên chất!</span>
          </div>
          <div className="top-bar-links">
            <a href="#store" onClick={() => setActiveTab('stores')}>Hệ Thống Cửa Hàng</a>
            <a href="#franchise" onClick={() => setActiveTab('franchise')}>Nhượng Quyền</a>
            <a href="tel:19003076">Hotline: 1900.3076</a>
          </div>
        </div>
      </div>

      <div className="container main-header">
        {/* Brand Logo */}
        <a href="#" className="logo-container" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
          <div className="logo-icon">U</div>
          <div className="logo-text">
            <span className="logo-title">UMAITEA</span>
            <span className="logo-subtitle">The Art of Premium Tea</span>
          </div>
        </a>

        {/* Search Bar - Crane Tea Replica style */}
        <form className="search-action-container" onSubmit={handleSearchSubmit}>
          <div className="search-box">
            <select
              className="search-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">Tất cả</option>
              <option value="FRUIT TEA">FRUIT TEA</option>
              <option value="MILK TEA">MILK TEA</option>
              <option value="CREAMY">CREAMY</option>
              <option value="COFFEE">COFFEE</option>
              <option value="TOPPING">TOPPING</option>
              <option value="SNACK">ĂN VẶT</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Bạn cần tìm trà gì?..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Tìm kiếm">
              🔍
            </button>
          </div>
        </form>

        {/* Actions (Cart & Hotline & Dark/Light Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="tel:19003076" className="hotline-btn hide-for-mobile">
            📞 1900.3076
          </a>

          <button
            className="nav-cart-btn"
            onClick={() => setCartOpen(true)}
            aria-label="Xem giỏ hàng"
          >
            🛒
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </button>

          <button
            className="theme-toggle-header"
            onClick={toggleTheme}
            aria-label="Đổi giao diện"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Main Bottom Tabs Navigation */}
      <nav className="bottom-nav">
        <div className="container">
          <ul className="nav-links">
            <li className={activeTab === 'home' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>Trang Chủ</a>
            </li>
            <li className={activeTab === 'menu' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('menu'); }}>Thực Đơn</a>
            </li>
            <li className={activeTab === 'stores' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('stores'); }}>Cửa Hàng</a>
            </li>
            <li className={activeTab === 'franchise' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('franchise'); }}>Nhượng Quyền</a>
            </li>
            <li className={activeTab === 'blog' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('blog'); }}>Tin Tức</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
