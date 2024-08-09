import React, { useState } from 'react';
import GradientEditor from './GradientEditor';

const ShapeControls = ({ addLayer }) => {
  const [shape, setShape] = useState('rectangle');
  const [attributes, setAttributes] = useState({
    width: 100,
    height: 100,
    radius: 50,
    fill: '#ff0000',
    stroke: 'none',
    strokeWidth: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
    borderRadius: 0,
    gradient: null,
  });

  const handleGradientChange = (gradient) => {
    setAttributes({ ...attributes, gradient });
  };

  const handleAddLayer = () => {
    addLayer(shape, attributes);
  };

  return (
    <div className="controls">
      <label>
        Shape:
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="ellipse">Ellipse</option>
        </select>
      </label>

      {shape === 'rectangle' && (
        <label>
          Border Radius:
          <input
            type="number"
            value={attributes.borderRadius}
            onChange={(e) =>
              setAttributes({ ...attributes, borderRadius: +e.target.value })
            }
          />
        </label>
      )}

      {shape !== 'circle' && (
        <>
          <label>
            Width:
            <input
              type="number"
              value={attributes.width}
              onChange={(e) =>
                setAttributes({ ...attributes, width: +e.target.value })
              }
            />
          </label>
          <label>
            Height:
            <input
              type="number"
              value={attributes.height}
              onChange={(e) =>
                setAttributes({ ...attributes, height: +e.target.value })
              }
            />
          </label>
        </>
      )}

      {shape === 'circle' && (
        <label>
          Radius:
          <input
            type="number"
            value={attributes.radius}
            onChange={(e) =>
              setAttributes({ ...attributes, radius: +e.target.value })
            }
          />
        </label>
      )}

      <label>
        Fill Color:
        <input
          type="color"
          value={attributes.fill}
          onChange={(e) =>
            setAttributes({ ...attributes, fill: e.target.value })
          }
        />
      </label>

      <GradientEditor onGradientChange={handleGradientChange} />

      <label>
        Stroke Color:
        <input
          type="color"
          value={attributes.stroke}
          onChange={(e) =>
            setAttributes({ ...attributes, stroke: e.target.value })
          }
        />
      </label>

      <label>
        Stroke Width:
        <input
          type="number"
          value={attributes.strokeWidth}
          onChange={(e) =>
            setAttributes({ ...attributes, strokeWidth: +e.target.value })
          }
        />
      </label>

      <label>
        Fill Opacity:
        <input
          type="number"
          step="0.1"
          max="1"
          min="0"
          value={attributes.fillOpacity}
          onChange={(e) =>
            setAttributes({ ...attributes, fillOpacity: +e.target.value })}
        />
      </label>

      <label>
        Stroke Opacity:
        <input
          type="number"
          step="0.1"
          max="1"
          min="0"
          value={attributes.strokeOpacity}
          onChange={(e) =>
            setAttributes({ ...attributes, strokeOpacity: +e.target.value })}
        />
      </label>

      <button onClick={handleAddLayer}>Add Shape</button>
    </div>
  );
};

export default ShapeControls;
