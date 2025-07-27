import React from 'react';

function Terms() {
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

      <h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> July 26, 2025</p>

      <p>Welcome to CodeSwitch AI. By accessing or using our mobile app CodeSwitch (“Service,” “App,” “we,” “us,” or “our”), you agree to these Terms and Conditions. If you do not agree, please discontinue use immediately.</p>

      <h2>1. Description of Service</h2>
      <p>CodeSwitch AI is an AI-powered writing assistant designed to help users rewrite and improve the tone, clarity, and professionalism of email messages. The app does not provide legal, medical, financial, or other advice. All users are responsible for reviewing the output before sending or sharing.</p>

      <h2>2. Use of the App</h2>
      <p>We grant you a non-exclusive, non-transferable, revocable license to access and use the App for personal or internal business use only. You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or modify the app or any part thereof</li>
        <li>Use the Service to generate spam, harmful, malicious, or illegal content</li>
        <li>Share or distribute content that violates any laws or policies</li>
      </ul>

      <h2>3. User Content</h2>
      <p>You retain all rights to the content you input. You grant CodeSwitch the necessary license to process and generate rewritten output. We do not claim ownership over your content and do not share it with third parties without your consent. For further details, please see our Privacy Policy.</p>

      <h2>4. Privacy and Data</h2>
      <p>All input and output data remain private and secure. We do not collect or share personal content except as defined in our Privacy Policy. We use data only as described in our policies to operate and improve the Service.</p>

      <h2>5. Prohibited Conduct</h2>
      <p>You agree not to misuse the Service in any way. This includes but is not limited to:</p>
      <ul>
        <li>Harassment, libel, defamation, or intimidation of others</li>
        <li>Uploading malicious code or viruses</li>
        <li>Violations of intellectual property or privacy rights</li>
        <li>Any activity that is harmful, fraudulent, or unauthorized</li>
      </ul>

      <h2>6. Disclaimer of Warranties</h2>
      <p>The App is provided “as is” and “as available.” We make no promises about accuracy, reliability, or performance. We disclaim all warranties, whether express or implied, including merchantability, fitness for a particular purpose, or non-infringement.</p>

      <h2>7. Limitation of Liability</h2>
      <p>You use the App at your own risk. Under no circumstances shall CodeSwitch or its affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use the Service—even if advised of the possibility of such damages.</p>

      <h2>8. Indemnification</h2>
      <p>You agree to indemnify and hold harmless CodeSwitch, its developers, officers, and agents from any claims, liabilities, damages, losses, or expenses (including attorneys’ fees) arising from your misuse of the Service or violation of these terms.</p>

      <h2>9. Changes to Terms</h2>
      <p>We may update these Terms at any time. We will post the updated version in the App or on our website and update the “Last updated” date. Continued use after changes constitutes acceptance of the new terms. It is your responsibility to review these periodically.</p>

      <h2>10. Termination</h2>
      <p>We may suspend or terminate your access to the App at our sole discretion, with or without cause or notice, including violation of these Terms or applicable laws.</p>

      <h2>11. Governing Law</h2>
      <p>These terms and your use of the App shall be governed by the laws of the state in which CodeSwitch is headquartered, without regard to conflict of law principles. Any disputes will be resolved in a court of competent jurisdiction located there.</p>

      <h2>12. Contact Us</h2>
      <p>If you have questions or feedback about these Terms, please email us at <a href="mailto:codeswitchai@gmail.com">codeswitchai@gmail.com</a></p>
    </div>
  );
}

export default Terms;