import React, { useState } from 'react';
import axios from 'axios';
import { logPrompt } from './utils/logPrompt' // adjust path if needed



function App() {
  const [userInput, setUserInput] = useState('');
  //const [scenario, setScenario] = useState('general');
  const [scenarioContext, setScenarioContext] = useState('');
  const [tone, setTone] = useState('Professional'); // Capitalized
  const [language, setLanguage] = useState('English'); // Capitalized
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL || '';
      const response = await axios.post(`${baseURL}/code_switch`, {
        user_input: userInput,
        //scenario,
        scenarioContext,
        tone,
        language,
      });
      const enhancedEmail = response.data.enhanced_email;
      setResult(enhancedEmail);
      
          // Log prompt and response to Supabase
      await logPrompt({
        prompt: userInput,
        response: enhancedEmail,
        tone,
        language,
        scenario_context: scenarioContext,
      });

    } catch (err) {
      console.error(err);
      setResult('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
 

  const handleClear = () => {
    setUserInput('');
    setResult('');
    setError('');
    setScenarioContext('');
  };

  return (
    <>
      <div className="container">
        <h1>Code Switch</h1>
        <p className="app-description">CodeSwitch so your bosses know you're professional, but not really...</p>

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
              <label>Tone:</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="Professional">Professional</option>
                <option value="Casual">Casual</option>
              </select>
            </div>

            <div className="dropdown">
              <label>Language:</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>

          <div className="button-group">
            <button type="submit" disabled={!userInput.trim() || loading}>
              Click here to CodeSwitch
            </button>
            <button className="clear" type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>

        {loading && <p>Making you sound all sick...</p>}
        {error && <p className="error">{error}</p>}
        {result && (
          <div className="result-box">
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
    <a href="/privacy">Privacy Policy</a>
    <span className="separator">|</span>
    <a href="/terms">Terms of Use</a>
    <span className="separator">|</span>
    <a href="/support">Support</a>
</footer>
    </>
  );
}

export default App;