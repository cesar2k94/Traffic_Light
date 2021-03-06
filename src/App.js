import './App.css';
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState(["redOpaco", "orangeOpaco", "greenOpaco"]);

  return (
    <div className="total">
      <div className="inicio">
      </div >
      <div className="body">
        <div className="color">
          <button className={color[0]} onClick={() => setColor(["red", "orangeOpaco", "greenOpaco"])}></button>
          <button className={color[1]} onClick={() => setColor(["redOpaco", "orange", "greenOpaco"])}></button>
          <button className={color[2]} onClick={() => setColor(["redOpaco", "orangeOpaco", "green"])}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
