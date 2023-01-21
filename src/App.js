import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [buttonStatus, setButtonStatus] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeColor = () => {
    setButtonColor(newButtonColor);
  };

  const changeStatus = () => {
    setButtonStatus(!buttonStatus);
  };

  return (
    <div className="main-container">
      <h1 className="header">React Testing library</h1>
      <button
        className={`button ${buttonColor}`}
        disabled={buttonStatus}
        onClick={changeColor}
      >
        Change to {newButtonColor}
      </button>
      <div className="checkbox-container">
        <input
          id="disable-button-checkbox"
          type="checkbox"
          onClick={changeStatus}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
