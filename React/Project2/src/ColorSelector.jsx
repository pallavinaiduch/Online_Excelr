// ColorSelector.jsx
import React, { useState, useEffect } from 'react';

const ColorSelector = () => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="color-select">Choose a background color: </label>
      <select
        id="color-select"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="white">White</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightcoral">Light Coral</option>
        <option value="lavender">Lavender</option>
        <option value="black">Black</option>
      </select>
    </div>
  );
};

export default ColorSelector;
