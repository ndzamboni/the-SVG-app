import React, { useState } from 'react';
import GradientEditor from './GradientEditor';
import './Tooltip.css'; // Import the tooltip styles

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
      <div className="tooltip">
        <label>
          Shape:
          <select value={shape} onChange={(e) => setShape(e.target.value)}>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
          </select>
        </label>
        <span className="tooltiptext">Choose the shape type you want to add to the canvas.</span>
      </div>

      {shape === 'rectangle' && (
        <div className="tooltip">
          <label>
            Border Radius (px):
            <input
              type="number"
              value={attributes.borderRadius}
              onChange={(e) =>
                setAttributes({ ...attributes, borderRadius: +e.target.value })
              }
            />
          </label>
          <span className="tooltiptext">Set the corner radius for rectangles.</span>
        </div>
      )}

      {shape !== 'circle' && (
        <>
          <div className="tooltip">
            <label>
              Width (px):
              <input
                type="number"
                value={attributes.width}
                onChange={(e) =>
                  setAttributes({ ...attributes, width: +e.target.value })
                }
              />
            </label>
            <span className="tooltiptext">Set the width of the shape in pixels.</span>
          </div>
          <div className="tooltip">
            <label>
              Height (px):
              <input
                type="number"
                value={attributes.height}
                onChange={(e) =>
                  setAttributes({ ...attributes, height: +e.target.value })
                }
              />
            </label>
            <span className="tooltiptext">Set the height of the shape in pixels.</span>
          </div>
        </>
      )}

      {shape === 'circle' && (
        <div className="tooltip">
          <label>
            Radius (px):
            <input
              type="number"
              value={attributes.radius}
              onChange={(e) =>
                setAttributes({ ...attributes, radius: +e.target.value })
              }
            />
          </label>
          <span className="tooltiptext">Set the radius of the circle in pixels.</span>
        </div>
      )}

      <div className="tooltip">
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
        <span className="tooltiptext">Choose the fill color of the shape.</span>
      </div>

      <div className="tooltip">
        <GradientEditor onGradientChange={handleGradientChange} />
        <span className="tooltiptext">Customize the gradient fill of the shape.</span>
      </div>

      <div className="tooltip">
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
        <span className="tooltiptext">Choose the stroke color of the shape.</span>
      </div>

      <div className="tooltip">
        <label>
          Stroke Width (px):
          <input
            type="number"
            value={attributes.strokeWidth}
            onChange={(e) =>
              setAttributes({ ...attributes, strokeWidth: +e.target.value })
            }
          />
        </label>
        <span className="tooltiptext">Set the width of the stroke in pixels.</span>
      </div>

      <div className="tooltip">
        <label>
          Fill Opacity (0-1):
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
        <span className="tooltiptext">Adjust the opacity of the fill. 0 is fully transparent, and 1 is fully opaque.</span>
      </div>

      <div className="tooltip">
        <label>
          Stroke Opacity (0-1):
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
        <span className="tooltiptext">Adjust the opacity of the stroke. 0 is fully transparent, and 1 is fully opaque.</span>
      </div>

      <div className="tooltip">
        <button onClick={handleAddLayer}>Add Shape</button>
        <span className="tooltiptext">Click to add the shape to the canvas with the selected attributes.</span>
      </div>
    </div>
  );
};

export default ShapeControls;
