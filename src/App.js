import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h1>Counter React</h1>
      <p>Số: {count}</p>

      <button 
        style={{
          fontSize: "24px",
          padding: "15px 40px",
          cursor: "pointer"
        }}
        onClick={() => setCount(count + 1)}
      >
        Tăng
      </button>
    </div>
  );
}

export default App;