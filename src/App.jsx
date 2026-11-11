import { useState } from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [pin, setPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const CORRECT_PIN = "6767";

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Services", label: "Services" },
    { id: "Contact", label: "Contact" },
    { id: "Student ID", label: "Student ID" }
  ];

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePinChange = (e) => {
    const val = e.target.value.replace(/\D/g, ""); // digits only
    if (val.length <= 4) {
      setPin(val);
      if (errorMsg) setErrorMsg("");
      // Auto-unlock when 4 digits match 6767
      if (val === CORRECT_PIN) {
        setIsUnlocked(true);
        setErrorMsg("");
        setPin("");
      } else if (val.length === 4) {
        setErrorMsg("Khos Lek code hx may");
      }
    }
  };

  const handleLockAgain = () => {
    setIsUnlocked(false);
    setPin("");
    setErrorMsg("");
  };

  return (
    <div className="page-wrapper">
      {/* Top Navigation */}
      <header className="navbar-container">
        <div className="navbar-content">
          <div className="nav-brand" onClick={() => handleNavClick("Home")} style={{ cursor: "pointer" }}>
            <span className="brand-dot"></span>
            <span className="brand-title">OPSOK MES</span>
          </div>

          <nav className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-btn ${activeTab === item.label ? "active" : ""}`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="content-container">
        {/* ===================== PAGE: HOME ===================== */}
        {activeTab === "Home" && (
          <div className="page-view animate-fade-in">
            <section className="hero-section">
              <div className="hero-badge">សួស្ដី</div>
              <h1 className="hero-title">Sursdey  MAY MAY TEAM CG</h1>
              <p className="hero-subtitle">
                website nis ai tver oy mah  plet te tae kuy merl oy yol yu sahav hx yol tix tix tt
              </p>
              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() => handleNavClick("Student ID")}
                >
                  Merl CArd nhom phg
                </button>
                <button
                  className="secondary-btn"
                  onClick={() => handleNavClick("About")}
                >
                  Pi nhom
                </button>
              </div>
            </section>

            {/* Quick Teaser Cards */}
            <div className="teaser-grid">
              <div className="teaser-card" onClick={() => handleNavClick("About")}>
                <span className="teaser-icon">👤</span>
                <h3>Pi nhom</h3>
                <p>Vibecode rol ngai!</p>
                <span className="teaser-link">Go to Pi nhom →</span>
              </div>
              <div className="teaser-card" onClick={() => handleNavClick("Services")}>
                <span className="teaser-icon">💻</span>
                <h3>Snadai</h3>
                <p>Lg game, dek , Nham</p>
                <span className="teaser-link">Go to snadai →</span>
              </div>
              <div className="teaser-card" onClick={() => handleNavClick("Student ID")}>
                <span className="teaser-icon">🪪</span>
                <h3>Card nhom</h3>
                <p>merl card nhom tic hov</p>
                <span className="teaser-link">merl hov →</span>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PAGE: ABOUT ===================== */}
        {activeTab === "About" && (
          <div className="page-view animate-fade-in">
            <div className="clean-card">
              <div className="card-badge">pi nhom</div>
              <h1 className="card-heading">About Me</h1>
              <p className="card-text">
                Hello! My name is <strong>MOV DANA</strong>. I am a Computer Science student
                in Year 2 at Western University.
              </p>
              <div className="vintage-divider"></div>
              <p className="card-text">
                I enjoy learning how to vibecode, building websites, and solving computer problems (cap)
              </p>

              <div className="ledger-block">
                <h3 className="ledger-title">My Information:</h3>
                <ul className="ledger-list">
                  <li><strong>School:</strong> Western University</li>
                  <li><strong>Major:</strong> Computer Science</li>
                  <li><strong>Year:</strong> Year 2</li>
                  <li><strong>Class:</strong> F2-12</li>
                  <li><strong>City:</strong> Phnom Penh, Cambodia</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PAGE: SERVICES ===================== */}
        {activeTab === "Services" && (
          <div className="page-view animate-fade-in">
            <div className="clean-card">
              <div className="card-badge">snadai</div>
              <h1 className="card-heading">ey del nhom tver</h1>
              <p className="card-text">
                Here are the basic things I can do and help with:
              </p>

              <div className="services-grid">
                <div className="service-item">
                  <div className="service-number">01</div>
                  <h4>tver Websites</h4>
                  <p>tver websites very fast and good </p>
                </div>
                <div className="service-item">
                  <div className="service-number">02</div>
                  <h4>Jnai Web</h4>
                  <p>jnai ui/ux loy, tae kom merl backend</p>
                </div>
                <div className="service-item">
                  <div className="service-number">03</div>
                  <h4>tse code</h4>
                  <p>code tnorng tae merl otvsov yol</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PAGE: CONTACT ===================== */}
        {activeTab === "Contact" && (
          <div className="page-view animate-fade-in">
            <div className="clean-card">
              <div className="card-badge">bondanh songkom</div>
              <h1 className="card-heading">Teak tong nhom phg may</h1>
              <p className="card-text">
                dak medai jol chat nhom 1 mk heii:
              </p>

              {contactSubmitted ? (
                <div className="contact-success">
                  <h4>✓ rkun may!</h4>
                  <p>hob bay nv</p>
                  <button className="secondary-btn" onClick={() => setContactSubmitted(false)}>som medai 1 tt mor</button>
                </div>
              ) : (
                <form
                  className="vintage-contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                >
                  <div className="form-group">
                    <label>Chmous</label>
                    <input type="text" required placeholder="Type your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" required placeholder="Type your email" />
                  </div>
                  <div className="form-group">
                    <label>message</label>
                    <textarea rows="2" required placeholder="Type your message here..."></textarea>
                  </div>
                  <button type="submit" className="primary-btn">Send Message</button>
                </form>
              )}

              <div className="contact-pill-list" style={{ marginTop: "32px" }}>
                <span className="contact-pill">📧 mov.dana@western.edu</span>
                <span className="contact-pill">📍 Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        )}

        {/* ===================== PAGE: STUDENT ID ===================== */}
        {activeTab === "Student ID" && (
          <div className="page-view animate-fade-in">
            <div className="section-header">
              <span className="section-tag">card nhom</span>
              <h1 className="section-title">profile nhom</h1>
              <p className="section-desc">card sers western</p>
            </div>

            <div className="card-center-wrapper">
              {!isUnlocked ? (
                /* PIN Lock Screen */
                <div className="pin-lock-card">
                  <div className="lock-icon-wrapper">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8c381f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="pin-lock-title">dak lek code </h3>
                  <p className="pin-lock-desc">
                    lek code 4 ktong.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (pin === CORRECT_PIN) {
                        setIsUnlocked(true);
                        setErrorMsg("");
                        setPin("");
                      } else if (pin.length > 0) {
                        setErrorMsg("khos hx vai mdg tt");
                      }
                    }}
                    className="pin-form"
                  >
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="••••"
                      value={pin}
                      onChange={handlePinChange}
                      className={`pin-input ${errorMsg ? "input-error" : ""}`}
                      autoFocus
                    />
                    <button type="submit" className="unlock-btn">
                      Unlock Card
                    </button>
                  </form>

                  {errorMsg && <p className="error-text">{errorMsg}</p>}
                </div>
              ) : (
                /* Unlocked Student Card View */
                <div className="unlocked-profile-wrapper">
                  <div className="unlocked-top-bar">
                    <span className="unlocked-status">
                      <span className="live-indicator"></span> sers sla
                    </span>
                    <button onClick={handleLockAgain} className="relock-btn">
                      🔒 lock vinh
                    </button>
                  </div>
                  <StudentCard />
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MOV DANA — Western University</p>
      </footer>
    </div>
  );
}

export default App;
