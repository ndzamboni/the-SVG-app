import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './SvgCanvas.css';

const SvgCanvas = () => {
  const svgRef = useRef();

  // State for rectangle attributes
  const [rect, setRect] = useState({
    x: 100,
    y: 100,
    width: 200,
    height: 100,
    fill: 'blue',
    stroke: 'none',
  });

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 800)
      .attr('height', 600)
      .style('border', '1px solid black');

    // Clear the previous SVG content
    svg.selectAll('*').remove();

    // Append a rectangle based on the state
    svg.append('rect')
      .attr('x', rect.x)
      .attr('y', rect.y)
      .attr('width', rect.width)
      .attr('height', rect.height)
      .attr('fill', rect.fill)
      .attr('stroke', rect.stroke);
  }, [rect]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div className="controls">
        <label>
          X:
          <input
            type="number"
            value={rect.x}
            onChange={(e) => setRect({ ...rect, x: +e.target.value })}
          />
        </label>
        <label>
          Y:
          <input
            type="number"
            value={rect.y}
            onChange={(e) => setRect({ ...rect, y: +e.target.value })}
          />
        </label>
        <label>
          Width:
          <input
            type="number"
            value={rect.width}
            onChange={(e) => setRect({ ...rect, width: +e.target.value })}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={rect.height}
            onChange={(e) => setRect({ ...rect, height: +e.target.value })}
          />
        </label>
        <label>
          Fill Color:
          <input
            type="color"
            value={rect.fill}
            onChange={(e) => setRect({ ...rect, fill: e.target.value })}
          />
        </label>
        <label>
          Stroke Color:
          <input
            type="color"
            value={rect.stroke}
            onChange={(e) => setRect({ ...rect, stroke: e.target.value })}
          />
        </label>
      </div>
    </div>
  );
};

export default SvgCanvas;
