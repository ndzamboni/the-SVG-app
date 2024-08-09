import React from 'react';

const TransformationControls = ({ layer, updateLayer }) => {
  const { attributes } = layer;

  return (
    <div className="transformation-controls">
      <label>
        X:
        <input
          type="number"
          value={attributes.x}
          onChange={(e) => updateLayer(layer.id, { ...attributes, x: +e.target.value })}
        />
      </label>
      <label>
        Y:
        <input
          type="number"
          value={attributes.y}
          onChange={(e) => updateLayer(layer.id, { ...attributes, y: +e.target.value })}
        />
      </label>
      <label>
        Scale X:
        <input
          type="number"
          value={attributes.scaleX || 1}
          onChange={(e) => updateLayer(layer.id, { ...attributes, scaleX: +e.target.value })}
        />
      </label>
      <label>
        Scale Y:
        <input
          type="number"
          value={attributes.scaleY || 1}
          onChange={(e) => updateLayer(layer.id, { ...attributes, scaleY: +e.target.value })}
        />
      </label>
      <label>
        Rotation:
        <input
          type="number"
          value={attributes.rotation || 0}
          onChange={(e) => updateLayer(layer.id, { ...attributes, rotation: +e.target.value })}
        />
      </label>
    </div>
  );
};

export default TransformationControls;
