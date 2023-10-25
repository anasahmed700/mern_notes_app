import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Declarative UI Starter with React
        </p>
        <Button onClick={() => setClickCount(clickCount + 1)}>
          Clicked {clickCount} Times
        </Button>
      </header>
    </div>
  );
}

export default App;
