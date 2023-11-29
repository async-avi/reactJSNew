import { useState } from "react";
import "./App.css";
import colors from "./components/Colors.js";

function App() {
  const [bgColor, setBg] = useState("black");

  return (
    <div
      className="w-full h-screen static"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 bg-white p-2 rounded-lg absolute bottom-32 left-72 max-w-max">
        {colors.map((color) => {
          return (
            <button
              key={color.id}
              onClick={() => setBg(color.name)}
              style={{ backgroundColor: color.name, color: color.textColor }}
              className="rounded-md px-10 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              {color.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
