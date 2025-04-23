import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 15);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 15);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: "10px", padding: "10px 20px" }}>
        Increment by 15
      </button>
      <button onClick={decrement} style={{ margin: "10px", padding: "10px 20px" }}>
        Decrement by 15
      </button>
    </div>
  );
};

export default Counter;
