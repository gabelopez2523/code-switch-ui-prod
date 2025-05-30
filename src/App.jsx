import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userInput, setUserInput] = useState('');
  const [scenario, setScenario] = useState('general');
  const [scenarioContext, setScenarioContext] = useState('');
  const [tone, setTone] = useState('professional');
  const [language, setLanguage] = useState('english');
  const [enhancedEmail, setEnhancedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    const baseURL = import.meta.env.VITE_API_BASE_URL || ''
    const response = await axios.post(`${baseURL}/code_switch`, {
      user_input: userInput,
      scenario,
      scenarioContext,
      tone,
      language,
    })
    setResult(response.data.enhanced_email)
  } catch (err) {
    console.error(err)
    setResult('Something went wrong. Please try again.')
  } finally {
    setLoading(false)
  }
}

  const handleClear = () => {
    setUserInput('');
    setEnhancedEmail('');
    setError('');
    setScenarioContext('');
  };

  return (
<>
 <div className="container">
  <h1>Code Switch</h1>
  <p className="app-description">Code Switch so your bosses know you're professional, but not really...</p>

  <label htmlFor="ScenarioContext">Email You're Responding To (Optional)</label>
  <textarea
    id="ScenarioContext"
    className="text-area"
    value={scenarioContext}
    onChange={(e) => setScenarioContext(e.target.value)}
    rows={4}
    placeholder="Paste the message being replied to here..."
  />

  <form onSubmit={handleSubmit}>
    <label>Your Raw Email:</label>
    <textarea
      className="text-area"
      rows={8}
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      placeholder="Type or paste your email here..."
    />

    <div className="dropdowns">
      <div className="dropdown">
        <label>Scenario:</label>
        <select value={scenario} onChange={(e) => setScenario(e.target.value)}>
          <option value="general">General</option>
          <option value="job_application">Job Application</option>
          <option value="follow_up">Follow-Up</option>
          <option value="networking">Networking</option>
        </select>
      </div>

      <div className="dropdown">
        <label>Tone:</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="confident">Confident</option>
        </select>
      </div>

      <div className="dropdown">
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
    </div>

    <div className="button-group">
      <button type="submit" disabled={!userInput.trim() || loading}>
        Press here to sound like a professional a$$ foo
      </button>
      <button className="clear" type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  </form>

  {loading && <p>Making you sound all sick...</p>}
  {error && <p className="error">{error}</p>}
  {result && (
    <div className="result">
      <label>Enhanced Email:</label>
      <textarea
        className="text-area"
        rows={12}
        value={result}
        readOnly
      />
    </div>
  )}
</div>
<footer className="footer">
  Please email feedback to: <a href="mailto:gabe.lopez2523@gmail.com">gabe.lopez2523@gmail.com</a>
</footer>
    
</>
  );
}

export default App;