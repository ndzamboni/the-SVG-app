import React, { useEffect } from 'react';
import * as d3 from 'd3';

const FreehandDrawing = ({ addLayer }) => {
  useEffect(() => {
    const svg = d3.select('svg');
    let drawing = false;
    let pathData = '';

    const drag = d3.drag()
      .on('start', (event) => {
        drawing = true;
        pathData = `M${event.x},${event.y}`;
      })
      .on('drag', (event) => {
        if (drawing) {
          pathData += ` L${event.x},${event.y}`;
          svg.select('path.drawing').attr('d', pathData);
        }
      })
      .on('end', () => {
        if (drawing) {
          drawing = false;
          addLayer('path', { d: pathData, stroke: '#000', fill: 'none', strokeWidth: 2 });
          svg.select('path.drawing').remove(); // Remove the temp drawing path
        }
      });

    svg.on('mousedown', () => {
      svg.append('path')
        .attr('class', 'drawing')
        .attr('d', pathData)
        .attr('stroke', '#000')
        .attr('fill', 'none')
        .attr('stroke-width', 2);
    });

    svg.call(drag);

    return () => {
      svg.on('.drag', null);
    };
  }, [addLayer]);

  return null;
};

export default FreehandDrawing;
