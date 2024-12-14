import React from 'react';
import 'nes.css/css/nes.min.css';

function App() {
  const n = 10; // Define the variable
  const result = n + 1; // Assign the expression to a variable
  console.log(result); // Or use the expression in a function call
  
  return (
    <div>
      <button className="nes-btn is-primary">Primary Button</button>
    </div>
  );
}

export default App;
