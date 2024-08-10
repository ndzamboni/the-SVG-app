import React from 'react';
import './LayerManager.css';

const LayerManager = ({ layers, toggleVisibility, reorderLayers, groupLayers }) => {
  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const sourceIndex = event.dataTransfer.getData('text/plain');
    reorderLayers(parseInt(sourceIndex), targetIndex);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="layer-manager">
      <h3>Layers</h3>
      {layers.map((layer, index) => (
        <div
          key={layer.id}
          className="layer"
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDrop={(event) => handleDrop(event, index)}
          onDragOver={handleDragOver}
        >
          <span onClick={() => toggleVisibility(layer.id)}>
            {layer.visible ? '👁️' : '🚫'}
          </span>
          {layer.type} - {layer.id}
        </div>
      ))}
      <button onClick={() => groupLayers()}>Group Selected</button>
    </div>
  );
};

export default LayerManager;
