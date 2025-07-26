// src/PrivacyPolicy.jsx
import React from 'react';

function PrivacyPolicy() {
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
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> July 24, 2025</p>

      <p>CodeSwitch is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose your information when you use the CodeSwitch app. By using the App, you consent to the practices described in this policy.</p>

      <h2>1. Information We Collect</h2>

      <h3>a. User-Provided Information</h3>
      <ul>
        <li><strong>Prompt Inputs:</strong> Text that you submit to the app (e.g., emails to revise, selected tones, languages).</li>
        <li><strong>Subscription Status:</strong> Whether you are actively subscribed through Apple’s In-App Purchase system.</li>
        <li><strong>Authentication (if enabled):</strong> Your anonymous identifier, and if applicable, your Apple ID or Supabase-generated user ID.</li>
      </ul>

      <h3>b. Automatically Collected Information</h3>
      <ul>
        <li><strong>Device & Usage Data:</strong> App activity logs to improve app performance.</li>
        <li><strong>In-App Purchase Metadata:</strong> Apple transaction IDs, purchase dates, and expiration dates used for validating subscription status.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li><strong>To Provide Core Functionality:</strong> Your prompt inputs are processed using a backend API to generate enhanced email drafts. Your selected tone and language preferences help tailor the results.</li>
        <li><strong>To Manage Subscriptions:</strong> We use Apple’s App Store Server API to validate your subscription and manage access to premium features.</li>
        <li><strong>To Maintain User History:</strong> If you are subscribed, your prompt history is stored securely in a backend database and shown in the “History” tab of the app.</li>
        <li><strong>To Improve the App:</strong> Aggregated, anonymized data may be used for analytics to improve app quality, user experience, and future features.</li>
        <li><strong>To Ensure Security:</strong> We log and deduplicate transactions and authentication tokens to prevent fraud and misuse.</li>
      </ul>

      <h2>3. Data Storage and Retention</h2>
      <ul>
        <li>All prompt inputs and histories are stored in a backend database using secure, encrypted connections.</li>
        <li>Anonymized user IDs are used to associate prompt history without collecting personally identifiable information.</li>
        <li>If you unsubscribe, your stored prompts and related data will be deleted in accordance with our data retention policy.</li>
      </ul>

      <h2>4. Sharing of Information</h2>
      <p>We do not sell, rent, or share your personal data with third parties except in the following limited cases:</p>
      <ul>
        <li><strong>With Service Providers:</strong> We share data with third-party services strictly necessary to operate the App (e.g., OpenAI, Apple, Supabase).</li>
        <li><strong>For Legal Compliance:</strong> If required by law, we may disclose information to regulatory authorities.</li>
        <li><strong>With Your Consent:</strong> Any additional sharing of information will only occur with your explicit consent.</li>
      </ul>

      <h2>5. Your Rights and Choices</h2>
      <ul>
        <li><strong>Access & Deletion:</strong> If you would like to access, update, or delete your data, you may do so by contacting us at <a href="mailto:codeswitchai@gmail.com">codeswitchai@gmail.com</a>.</li>
        <li><strong>Opt-Out:</strong> You can stop all data collection by uninstalling the app. You may also opt out of certain analytics by disabling data-sharing settings on your device.</li>
      </ul>

      <h2>6. Data Security</h2>
      <ul>
        <li>Secure HTTPS/TLS connections</li>
        <li>Supabase Row-Level Security (RLS) to prevent unauthorized access</li>
        <li>JWT-based validation of Apple transactions</li>
        <li>Strict data access controls on backend services</li>
      </ul>

      <h2>7. Children’s Privacy</h2>
      <p>The App is not intended for users under the age of 13. We do not knowingly collect data from children. If you believe we have inadvertently collected such data, please contact us immediately.</p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. You will be notified of any significant changes via in-app messaging or an updated timestamp.</p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:codeswitchai@gmail.com">codeswitchai@gmail.com</a></li>
        <li><strong>Developer:</strong> Gabriel Lopez, Santa Fe, NM</li>
        <li><strong>Marketing:</strong> Isaac Hernandez, Los Angeles, CA</li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;