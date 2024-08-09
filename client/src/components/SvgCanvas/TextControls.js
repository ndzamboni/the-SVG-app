import React, { useState } from 'react';

const TextControls = ({ addLayer }) => {
  const [text, setText] = useState('Sample Text');
  const [fontSize, setFontSize] = useState(24);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fill, setFill] = useState('#000000');

  const handleAddText = () => {
    addLayer('text', { text, fontSize, fontFamily, fill, x: 100, y: 100 });
  };

  return (
    <div className="controls">
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label>
        Font Size:
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(+e.target.value)}
        />
      </label>

      <label>
        Font Family:
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Palatino">Palatino</option>
          <option value="Garamond">Garamond</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Impact">Impact</option>
        </select>
      </label>

      <label>
        Fill Color:
        <input
          type="color"
          value={fill}
          onChange={(e) => setFill(e.target.value)}
        />
      </label>

      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default TextControls;
