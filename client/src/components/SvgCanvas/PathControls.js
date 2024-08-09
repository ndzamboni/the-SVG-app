import React, { useState } from 'react';

const PathControls = ({ addLayer }) => {
  const [points, setPoints] = useState([]);
  const [stroke, setStroke] = useState('#000000');
  const [fill, setFill] = useState('none');

  const handleAddPoint = () => {
    setPoints([...points, { x: 50, y: 50 }]);
  };

  const handleUpdatePoint = (index, axis, value) => {
    const newPoints = [...points];
    newPoints[index][axis] = value;
    setPoints(newPoints);
  };

  const handleAddPath = () => {
    const pathData = points.map(p => `${p.x},${p.y}`).join(' ');
    addLayer('path', { d: `M${pathData}`, stroke, fill });
  };

  return (
    <div className="controls">
      <label>Path Points:</label>
      {points.map((point, index) => (
        <div key={index}>
          <label>X:</label>
          <input
            type="number"
            value={point.x}
            onChange={(e) => handleUpdatePoint(index, 'x', +e.target.value)}
          />
          <label>Y:</label>
          <input
            type="number"
            value={point.y}
            onChange={(e) => handleUpdatePoint(index, 'y', +e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddPoint}>Add Point</button>
      <label>Stroke Color:</label>
      <input
        type="color"
        value={stroke}
        onChange={(e) => setStroke(e.target.value)}
      />
      <label>Fill Color:</label>
      <input
        type="color"
        value={fill}
        onChange={(e) => setFill(e.target.value)}
      />
      <button onClick={handleAddPath}>Add Path</button>
    </div>
  );
};

export default PathControls;
