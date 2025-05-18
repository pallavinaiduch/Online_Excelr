import React, { useState } from "react";

const BackgroundColorChanger = () => {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h2>Click a button to change background color</h2>
      <button onClick={() => changeColor("lightblue")}>Light Blue</button>
      <button onClick={() => changeColor("lightgreen")}>Light Green</button>
      <button onClick={() => changeColor("lightcoral")}>Light Coral</button>
      <button onClick={() => changeColor("white")}>Reset</button>
    </div>
  );
};

export default BackgroundColorChanger;
