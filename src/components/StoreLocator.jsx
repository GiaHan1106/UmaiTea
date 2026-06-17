import { useState } from 'react';

const STORES = [
  {
    id: 1,
    name: "UmaiTea Quận 1 - Đề Thám",
    address: "120 Đề Thám, Phường Cầu Ông Lãnh, Quận 1, TP. HCM",
    phone: "028.7300.7301",
    hours: "08:30 - 22:30",
    lat: "35%",
    lng: "40%"
  },
  {
    id: 2,
    name: "UmaiTea Quận 3 - Cao Thắng",
    address: "340 Cao Thắng, Phường 12, Quận 3, TP. HCM",
    phone: "028.7300.7302",
    hours: "09:00 - 22:00",
    lat: "50%",
    lng: "45%"
  },
  {
    id: 3,
    name: "UmaiTea Bình Thạnh - D2",
    address: "58 Nguyễn Gia Trí (D2 cũ), Phường 25, Bình Thạnh, TP. HCM",
    phone: "028.7300.7303",
    hours: "08:00 - 23:00",
    lat: "25%",
    lng: "65%"
  },
  {
    id: 4,
    name: "UmaiTea Cầu Giấy - Hà Nội",
    address: "89 Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
    phone: "024.7300.7304",
    hours: "08:30 - 22:30",
    lat: "15%",
    lng: "30%"
  }
];

export default function StoreLocator() {
  const [activeStore, setActiveStore] = useState(STORES[0]);

  return (
    <section className="store-locator" id="store">
      <div className="container">
        <div className="section-header">
          <span className="section-cursive">Hệ Thống Cửa Hàng</span>
          <h2 className="section-title">GHÉ THĂM UMAITEA</h2>
        </div>

        <div className="store-grid">
          {/* List panel */}
          <div className="store-list">
            {STORES.map(store => (
              <div
                key={store.id}
                className={`store-card ${activeStore.id === store.id ? 'active' : ''}`}
                onClick={() => setActiveStore(store)}
              >
                <h3 className="store-name">{store.name}</h3>
                <div className="store-info-line">
                  <span>📍</span>
                  <span>{store.address}</span>
                </div>
                <div className="store-info-line">
                  <span>📞</span>
                  <span>{store.phone}</span>
                </div>
                <div className="store-info-line">
                  <span>🕒</span>
                  <span>{store.hours}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Map display */}
          <div className="store-map-container">
            <div className="store-simulated-map" style={{
              backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundColor: 'var(--bg-body)'
            }}>
              {/* Map grid decoration */}
              <div style={{ position: 'absolute', inset: 0, border: '10px solid var(--border-color)', opacity: 0.15 }}></div>
              <div style={{ position: 'absolute', top: '20%', left: '10%', right: '10%', height: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
              <div style={{ position: 'absolute', left: '30%', top: '5%', bottom: '5%', width: '3px', background: 'rgba(8,72,71,0.06)' }}></div>
              <div style={{ position: 'absolute', left: '70%', top: '5%', bottom: '5%', width: '3px', background: 'rgba(8,72,71,0.06)' }}></div>

              {/* Pins representation */}
              {STORES.map(store => (
                <div
                  key={store.id}
                  className={`map-pin ${activeStore.id === store.id ? 'active' : ''}`}
                  style={{ top: store.lat, left: store.lng }}
                  onClick={() => setActiveStore(store)}
                  title={store.name}
                />
              ))}

              {/* Pin Active labels */}
              <div
                className="map-pin-label"
                style={{
                  top: `calc(${activeStore.lat} - 35px)`,
                  left: `calc(${activeStore.lng} - 45px)`
                }}
              >
                📍 UmaiTea ở đây!
              </div>

              {/* Detailed Overlay box */}
              <div className="map-overlay-detail">
                <h4 className="map-overlay-title">{activeStore.name}</h4>
                <p style={{ fontSize: '13px', marginBottom: '8px' }}>{activeStore.address}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.8 }}>
                  <span>☎️ {activeStore.phone}</span>
                  <span>⏰ {activeStore.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
