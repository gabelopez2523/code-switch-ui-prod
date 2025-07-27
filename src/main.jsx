import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // ✅ Add this line
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Support from './components/Support';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />

      </Routes>
    </Router>
  </React.StrictMode>
);