import { useState } from 'react';
import './App.css';

export function camelCaseColorWithDash(colorName) {
  return colorName.split(/(?=[A-Z])/).join('-').toLowerCase();
}

export function camelCaseColorWithSpace(colorName) {
  return colorName.split(/(?=[A-Z])/).join(' ');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonStatus, setButtonStatus] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

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
        className={`button ${buttonStatus ? 'disable' : camelCaseColorWithDash(buttonColor)}`}
        disabled={buttonStatus}
        onClick={changeColor}
      >
        Change to {camelCaseColorWithSpace(newButtonColor)}
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
