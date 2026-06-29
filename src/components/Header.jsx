import umaiLogo from '../assets/umai-logo.svg';

export default function Header({
  activeTab,
  setActiveTab,
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
            <a href="#store-detail" onClick={() => setActiveTab('stores')}>Giới Thiệu</a>
            <a href="#franchise" onClick={() => setActiveTab('franchise')}>Nhượng Quyền</a>
            <a href="tel:19003076">Hotline: 1900.3076</a>
          </div>
        </div>
      </div>
      <div className="container main-header">
        <a href="#" className="logo-container" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
          <img src={umaiLogo} className="header-logo" alt="UmaiTea Logo" />
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
              <option value="MILK TEA">Trà sữa</option>
              <option value="FRUIT TEA">Trà trái cây</option>
              <option value="MATCHA">Matcha</option>
              <option value="COFFEE">Coffee</option>
              <option value="TOPPING">Topping</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Tìm hương vị trà bạn yêu thích..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Tìm kiếm">
            </button>
          </div>
        </form>

        {/* Actions (Cart & Hotline & Dark/Light Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="tel:19003076" className="hotline-btn hide-for-mobile">
            0974200611
          </a>

          <button
            className="theme-toggle-header"
            onClick={toggleTheme}
            aria-label="Đổi giao diện"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-sun-icon">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M22 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-moon-icon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
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
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('stores'); }}>Giới Thiệu</a>
            </li>
            <li className={activeTab === 'franchise' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('franchise'); }}>Nhượng Quyền</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
