import React, { useState } from 'react';

const GradientEditor = ({ onGradientChange }) => {
  const [stops, setStops] = useState([
    { offset: '0%', color: '#ff0000' },
    { offset: '100%', color: '#0000ff' },
  ]);

  const handleAddStop = () => {
    setStops([...stops, { offset: '50%', color: '#00ff00' }]);
  };

  const handleRemoveStop = (index) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newStops = stops.map((stop, i) =>
      i === index ? { ...stop, [field]: value } : stop
    );
    setStops(newStops);
    onGradientChange(`linear-gradient(${newStops.map(s => `${s.color} ${s.offset}`).join(', ')})`);
  };

  return (
    <div className="gradient-editor">
      <h3>Gradient Editor</h3>
      {stops.map((stop, index) => (
        <div key={index} className="gradient-stop">
          <input
            type="color"
            value={stop.color}
            onChange={(e) => handleChange(index, 'color', e.target.value)}
          />
          <input
            type="text"
            value={stop.offset}
            onChange={(e) => handleChange(index, 'offset', e.target.value)}
          />
          <button onClick={() => handleRemoveStop(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddStop}>Add Stop</button>
    </div>
  );
};

export default GradientEditor;
