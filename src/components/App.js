import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isVisible, setIsVisible]=useState(false);
  const handleclick=()=>{
    setIsVisible(true);
  }

  return (
    <div className="App" id="main">
       <p id="para" className={isVisible ? 'show' : 'hide'}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
       <button id="click" onClick={handleclick}>submit</button>
      
    </div>
  );
}

export default App
