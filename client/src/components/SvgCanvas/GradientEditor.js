import React, { useState } from 'react';

const GradientEditor = ({ onGradientChange }) => {
  const [type, setType] = useState('linear');
  const [colors, setColors] = useState([{ color: '#ff0000', offset: 0 }, { color: '#0000ff', offset: 100 }]);

  const handleColorChange = (index, newColor) => {
    const newColors = [...colors];
    newColors[index].color = newColor;
    setColors(newColors);
    onGradientChange({ type, colors: newColors });
  };

  const handleOffsetChange = (index, newOffset) => {
    const newColors = [...colors];
    newColors[index].offset = newOffset;
    setColors(newColors);
    onGradientChange({ type, colors: newColors });
  };

  const addColorStop = () => {
    setColors([...colors, { color: '#ffffff', offset: 50 }]);
  };

  return (
    <div className="gradient-editor">
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
      </label>

      {colors.map((colorStop, index) => (
        <div key={index}>
          <input
            type="color"
            value={colorStop.color}
            onChange={(e) => handleColorChange(index, e.target.value)}
          />
          <input
            type="number"
            value={colorStop.offset}
            min="0"
            max="100"
            onChange={(e) => handleOffsetChange(index, e.target.value)}
          />
        </div>
      ))}

      <button onClick={addColorStop}>Add Color Stop</button>
    </div>
  );
};

export default GradientEditor;
