import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Increment the count when the button is clicked
  const handleIncrement = () => {
    console.log('Incrementing count from', count, 'to', count + 1);
    setCount(count + 1);
  };

  // Log to the console when the component mounts
  useEffect(() => {
    console.log('Component did mount');
    return () => console.log('Component will unmount');
  }, []);

  // Log to the console when the count state changes
  useEffect(() => {
    if (count > 0) {
      console.log('Count state updated to:', count);
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Add</button>
      </header>
    </div>
  );
}

export default App;
