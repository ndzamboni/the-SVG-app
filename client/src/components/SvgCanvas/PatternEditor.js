import React, { useState } from 'react';

const PatternEditor = ({ onPatternChange }) => {
  const [pattern, setPattern] = useState('stripes');

  const handlePatternChange = (event) => {
    setPattern(event.target.value);
    onPatternChange(event.target.value);
  };

  return (
    <div className="pattern-editor">
      <h3>Pattern Editor</h3>
      <select value={pattern} onChange={handlePatternChange}>
        <option value="stripes">Stripes</option>
        <option value="dots">Dots</option>
        <option value="custom">Custom</option>
      </select>
      {pattern === 'custom' && (
        <div>
          {/* Add custom pattern editor controls here */}
        </div>
      )}
    </div>
  );
};

export default PatternEditor;
