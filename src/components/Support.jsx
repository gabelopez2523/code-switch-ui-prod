import React from 'react';

function Support() {
  return (
    <div className="container">
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '0.95rem',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        ← Home
      </a>

      <h1>Support</h1>

      <p>If you have feedback or need support, please email our team at: <a href="mailto:codeswitchai@gmail.com">codeswitchai@gmail.com</a></p>

      <p>We typically respond within 24-72 hours. Our team is here to help with:</p>
      <ul>
        <li>Technical issues using the CodeSwitch app</li>
        <li>Billing or subscription questions</li>
        <li>Feature requests or suggestions</li>
        <li>Bug reports or unexpected behavior</li>
      </ul>

      <p>For privacy-related concerns, please refer to our <a href="/privacy">Privacy Policy</a>. For terms of use, see our <a href="/terms">Terms of Use</a>.</p>
    </div>
  );
}

export default Support;