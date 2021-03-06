import './App.css';
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState(["redOff", "orangeOff", "greenOff"]);

  return (
    <div className="total">
      <div className="inicio">
      </div >
      <div className="body">
        <div className="color">
          <button className={color[0]} onClick={() => setColor(["red", "orangeOff", "greenOff"])}></button>
          <button className={color[1]} onClick={() => setColor(["redOff", "orange", "greenOff"])}></button>
          <button className={color[2]} onClick={() => setColor(["redOff", "orangeOff", "green"])}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
