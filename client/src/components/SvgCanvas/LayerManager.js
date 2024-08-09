import React from 'react';

const LayerManager = ({ layers, toggleVisibility }) => {
  return (
    <div className="layer-manager">
      <ul>
        {layers.map(layer => (
          <li key={layer.id}>
            {layer.type} (ID: {layer.id})
            <button onClick={() => toggleVisibility(layer.id)}>
              {layer.visible ? 'Hide' : 'Show'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayerManager;
