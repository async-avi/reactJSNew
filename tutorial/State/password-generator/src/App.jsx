import { useState } from "react";

const App = () => {
  const [charLength, setCharLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="h-9 bg-opacity-25">
        <h2 className="text-white text-center text-3xl">Password Generator</h2>
        <input
          type="text"
          readOnly
          placeholder="Password"
          className="text-center rounded px-32"
        />
        <input
          type="range"
          value={charLength}
          min={8}
          max={100}
          className="w-80"
          onChange={(e) => setCharLength(e.target.value)}
        />
        <p className="text-white font-bold">{charLength}</p>
        <input
          type="checkbox"
          value={numberAllowed}
          onChange={() => (prev) => {
            setNumberAllowed(!prev);
            console.log(numberAllowed);
          }}
        />
        <p className="text-white font-bold">Numbers</p>
        <input type="checkbox" />
        <p className="text-white font-bold">Special characters</p>
      </div>
    </div>
  );
};

export default App;
