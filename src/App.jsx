import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import OrderModal from './components/OrderModal.jsx';
import AboutUs from './components/AboutUs.jsx';
import Franchise from './components/Franchise.jsx';
import Recruitment from './components/Recruitment.jsx';

import Footer from './components/Footer.jsx';
import ReceiptModal from './components/ReceiptModal.jsx';
import { PRODUCTS } from './data/products.js';
import './App.css';
import CartDrawer from './components/CartDrawer.jsx';
import CheckoutModal from './components/CheckoutModal.jsx';
import OrderChannelModal from './components/OrderChannelModal.jsx';

export default function App() {
  const getTabFromPath = (path) => {
    switch (path) {
      case '/trang-chu':
        return 'home';
      case '/san-pham':
        return 'menu';
      case '/cua-hang':
        return 'stores';
      case '/nhuong-quyen':
        return 'franchise';
      case '/tuyen-dung':
        return 'recruitment';
      default:
        return 'home';
    }
  };

  const getPathFromTab = (tab) => {
    switch (tab) {
      case 'home':
        return '/trang-chu';
      case 'menu':
        return '/san-pham';
      case 'stores':
        return '/cua-hang';
      case 'franchise':
        return '/nhuong-quyen';
      case 'recruitment':
        return '/tuyen-dung';
      default:
        return '/trang-chu';
    }
  };

  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      window.history.replaceState(null, '', '/trang-chu');
      return 'home';
    }
    return getTabFromPath(path);
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentOrder, setCurrentOrder] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('umaitea_cart');
      if (saved) {
        const { items, timestamp } = JSON.parse(saved);
        if (Date.now() - timestamp < 30 * 60 * 1000) {
          return items;
        } else {
          localStorage.removeItem('umaitea_cart');
        }
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderChannel, setOrderChannel] = useState(() => {
    try {
      const saved = localStorage.getItem('umaitea_cart');
      if (saved) {
        const { timestamp } = JSON.parse(saved);
        if (Date.now() - timestamp < 30 * 60 * 1000) {
          return 'web';
        }
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  });
  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  const [pendingProduct, setPendingProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Sync cart items to localStorage with timestamp
  useEffect(() => {
    try {
      if (cartItems.length > 0) {
        const data = {
          items: cartItems,
          timestamp: Date.now()
        };
        localStorage.setItem('umaitea_cart', JSON.stringify(data));
      } else {
        localStorage.removeItem('umaitea_cart');
      }
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Sync tab switching state with browser address bar pathnames
  useEffect(() => {
    const currentPath = window.location.pathname;
    const targetPath = getPathFromTab(activeTab);
    if (currentPath !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    // Scroll page back to top smoothly on tab switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle browser back and forward actions (history navigation)
  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Automatically scroll the active category tab to the center of the mobile list container
  useEffect(() => {
    if (activeTab === 'menu') {
      const timer = setTimeout(() => {
        const activeEl = document.querySelector('.category-tab.active');
        const container = document.querySelector('.category-tabs');
        if (activeEl && container) {
          const activeRect = activeEl.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollLeft = container.scrollLeft + (activeRect.left - containerRect.left) - (containerRect.width / 2) + (activeRect.width / 2);
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory, activeTab]);

  // Force dark mode active states on HTML tag for consistent theme engine integration
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Filter 4 fruit teas and 4 milk teas as featured items on homepage
  const featuredFruitTeas = PRODUCTS.filter(p => p.category === 'FRUIT TEA').slice(2, 6); // f3, f4, f6, f7
  const featuredMilkTeas = PRODUCTS.filter(p => p.category === 'MILK TEA').slice(0, 4); // m1, m3, m4, m5
  
  // Symmetrical layout order: fruit teas first row, milk teas second row
  const featuredProducts = [...featuredFruitTeas, ...featuredMilkTeas];

  const addToCart = (newItem) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === newItem.id);
      if (existingItemIndex > -1) {
        const updated = [...prev];
        const existingItem = updated[existingItemIndex];
        const newQty = existingItem.qty + newItem.qty;
        updated[existingItemIndex] = {
          ...existingItem,
          qty: newQty,
          totalPrice: existingItem.price * newQty
        };
        return updated;
      }
      return [...prev, newItem];
    });
    setToastMessage(`Đã thêm ${newItem.qty}x ${newItem.name} vào giỏ hàng thành công!`);
    setShowToast(true);
  };

  const updateCartQty = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: newQty, totalPrice: item.price * newQty }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSubmit = (name, phone) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const totalDrinksQty = cartItems.reduce((sum, item) => {
      if (item.product && item.product.category === 'TOPPING') return sum;
      return sum + item.qty;
    }, 0);
    const freeShipThresholdQty = 5;
    const shippingFee = subtotal === 0 ? 0 : (totalDrinksQty >= freeShipThresholdQty ? 0 : 20000);
    const totalPrice = subtotal + shippingFee;

    const order = {
      orderId: 'UT-' + Math.floor(100000 + Math.random() * 900000),
      orderTime: new Date().toLocaleString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      customerName: name,
      customerPhone: phone,
      items: [...cartItems],
      subtotal,
      shippingFee,
      totalPrice
    };

    setCurrentOrder(order);
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const handleProductClick = (product) => {
    if (!orderChannel && cartItems.length === 0) {
      setPendingProduct(product);
      setIsChannelModalOpen(true);
    } else {
      setSelectedProduct(product);
    }
  };

  const handleSelectWeb = () => {
    setOrderChannel('web');
    setIsChannelModalOpen(false);
    if (pendingProduct) {
      setSelectedProduct(pendingProduct);
      setPendingProduct(null);
    }
  };

  // Quick category search handler
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartTotalDrinksQty = cartItems.reduce((sum, item) => {
    if (item.product && item.product.category === 'TOPPING') return sum;
    return sum + item.qty;
  }, 0);
  const cartShippingFee = cartSubtotal === 0 ? 0 : (cartTotalDrinksQty >= 5 ? 0 : 20000);
  const cartTotal = cartSubtotal + cartShippingFee;

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
        cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <>
            {/* Banner promotion slider */}
            <Hero onCtaClick={() => setActiveTab('menu')} />



            {/* Featured Section */}
            <section className="menu-display-section container">
              <div className="section-header">
                <span className="section-cursive">Món được yêu thích nhất</span>
                <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
              </div>
              <div className="product-grid">
                {featuredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOrderClick={handleProductClick}
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
            <section className="franchise-section" style={{
              background: 'linear-gradient(rgba(var(--primary-dark-rgb), 0.95), rgba(var(--primary-dark-rgb), 0.95)), url("https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1200")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#ffffff',
              padding: '80px 20px',
              textAlign: 'center'
            }}>
              <div className="container" style={{ maxWidth: '800px' }}>
                <span className="hero-cursive" style={{ color: 'var(--secondary)', display: 'block', marginBottom: '15px' }}>Nhượng quyền UmaiTea</span>
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
            <AboutUs isHomePage={true} />
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
                      onOrderClick={handleProductClick}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === 'stores' && <AboutUs />}

        {activeTab === 'franchise' && <Franchise />}

        {activeTab === 'recruitment' && <Recruitment />}


      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Interactive custom product customizer modal */}
      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* Cart Drawer Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={updateCartQty}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Info Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleCheckoutSubmit}
        totalAmount={cartTotal}
      />

      {/* Order Channel Selection Modal */}
      <OrderChannelModal
        isOpen={isChannelModalOpen}
        onClose={() => setIsChannelModalOpen(false)}
        onSelectWeb={handleSelectWeb}
      />

      {/* Receipt & Zalo QR Scan Modal */}
      {currentOrder && (
        <ReceiptModal
          order={currentOrder}
          onClose={() => setCurrentOrder(null)}
        />
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <span style={{ marginRight: '8px' }}>✅</span>
          {toastMessage}
        </div>
      )}
    </>
  );
}
