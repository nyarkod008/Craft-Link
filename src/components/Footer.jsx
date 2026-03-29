import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_dark.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      borderTop: '1px solid rgba(212, 175, 55, 0.15)', 
      padding: '60px 24px', 
      background: 'var(--color-bg)',
      color: 'var(--color-text-main)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <img src={logo} alt="CraftLink Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }} />
            <h3 style={{ color: 'var(--color-text-main)', margin: 0, fontWeight: '800' }}>CraftLink</h3>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
            Connecting the best local artisans with people who value quality craftsmanship.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-text-main)', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Home</Link>
            <Link to="/about" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>About Us</Link>
            <Link to="/contact" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Contact</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'var(--color-text-main)', marginBottom: '20px', fontWeight: '700' }}>Support</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/faq" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>FAQ</Link>
            <Link to="/terms" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Terms of Service</Link>
            <Link to="/privacy" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

