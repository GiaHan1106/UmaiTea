import { useState, useEffect } from 'react';
import umaiLogo from '../assets/umai-logo.svg';

const CATEGORIES = [
  { value: 'ALL', label: 'Tất cả' },
  { value: 'MILK TEA', label: 'Trà sữa' },
  { value: 'FRUIT TEA', label: 'Trà trái cây' },
  { value: 'MATCHA', label: 'Matcha' },
  { value: 'COFFEE', label: 'Cà phê' },
  { value: 'TOPPING', label: 'Topping' }
];

export default function Header({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  onCartClick
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('menu');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Automatically scroll the active tab to the center of the mobile navbar container
  useEffect(() => {
    const activeEl = document.querySelector('.bottom-nav .nav-links li.active');
    const container = document.querySelector('.bottom-nav .nav-links');
    if (activeEl && container) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollLeft = container.scrollLeft + (activeRect.left - containerRect.left) - (containerRect.width / 2) + (activeRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeTab]);

  const currentLabel = CATEGORIES.find(c => c.value === selectedCategory)?.label || 'Tất cả';

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
            <a href="tel:0974200611">Hotline: 0974 200 611</a>
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
            <div className="custom-dropdown-container">
              <button
                type="button"
                className="custom-dropdown-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{currentLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="custom-dropdown-list">
                  {CATEGORIES.map(category => (
                    <li
                      key={category.value}
                      className={`custom-dropdown-item ${selectedCategory === category.value ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category.value);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Tìm hương vị trà bạn yêu thích..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" aria-label="Tìm kiếm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="search-icon-svg">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>

        {/* Actions (Cart & Hotline & Dark/Light Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {/* Cart Icon Button */}
          <button
            className="nav-cart-btn"
            onClick={onCartClick}
            aria-label="Xem giỏ hàng"
            style={{ border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'block' }}
            >
              <path d="M 2 3 h 4 l 2.5 12 h 9.5" />
              <path d="M 21 6 L 18 15 H 8.5" />
              <path d="M 6.6 6 h 14.4" />
              <path d="M 7.7 11 h 11.6" />
              <path d="M 11.4 6 L 11.7 15" />
              <path d="M 16.2 6 L 14.8 15" />
              <circle cx="10" cy="20" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </button>

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
            <li className={activeTab === 'recruitment' ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('recruitment'); }}>Tuyển Dụng</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
