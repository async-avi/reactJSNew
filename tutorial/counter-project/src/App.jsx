import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > -20) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Current count {count}</h2>
      <div className="card">
        <button onClick={increaseCount}>Increase</button>
        <br />
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  );
}

export default App;
