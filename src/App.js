import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState();

  function handleGreeting() {
    fetch(`/.netlify/functions/hello?name=${name}`)
      .then(res => res.text())
      .then(setResponse);
  }

  return (
    <div className="App">
      <h1>Demo</h1>
      <br />
      <br />
      <p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name here"
        />
        &nbsp;<button onClick={handleGreeting}>Say hi</button>
      </p>
      {response && <p className="server">Server Response: {response}</p>}
    </div>
  );
}

export default App;
