import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeColor = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="main-container">
      <h1 className="header">React Testing library</h1>
      <button className={`button ${buttonColor}`} onClick={changeColor}>
        Change to {newButtonColor}
      </button>
      <div className="checkbox-container">
        <input type="checkbox" />
        Add option
      </div>
    </div>
  );
}

export default App;
