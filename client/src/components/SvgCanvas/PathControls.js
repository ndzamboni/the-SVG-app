import React, { useState } from 'react';
import './Tooltip.css'; // Import the tooltip styles

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
        <div key={index} className="tooltip">
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
          <span className="tooltiptext">Modify the X and Y coordinates of this point.</span>
        </div>
      ))}
      <div className="tooltip">
        <button onClick={handleAddPoint}>Add Point</button>
        <span className="tooltiptext">Click to add a new point to the path.</span>
      </div>
      <div className="tooltip">
        <label>Stroke Color:</label>
        <input
          type="color"
          value={stroke}
          onChange={(e) => setStroke(e.target.value)}
        />
        <span className="tooltiptext">Select the stroke color for the path.</span>
      </div>
      <div className="tooltip">
        <label>Fill Color:</label>
        <input
          type="color"
          value={fill}
          onChange={(e) => setFill(e.target.value)}
        />
        <span className="tooltiptext">Select the fill color for the path. Use 'none' for no fill.</span>
      </div>
      <div className="tooltip">
        <button onClick={handleAddPath}>Add Path</button>
        <span className="tooltiptext">Click to add the path to the canvas with the specified points and colors.</span>
      </div>
    </div>
  );
};

export default PathControls;
