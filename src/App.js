import React , { useState } from 'react';
import './App.css';

function App() {
  const [input , setInput] = useState("");
  const [messages, setMessages] = useState([])

  const sendMessage = (event) => {
    setMessages([...messages , input]);
    setInput("");
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1>hello & Welcome to Fire🔥 chat App.</h1>

      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={sendMessage}>Send</button>
      </form>

    {
      messages.map(message => (
        <p>{message}</p>
      ))
    }

    </div>
  );
}

export default App;
