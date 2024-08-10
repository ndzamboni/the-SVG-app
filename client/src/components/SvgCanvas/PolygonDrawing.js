import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const PolygonDrawing = ({ addLayer }) => {
  const [points, setPoints] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const svg = d3.select('svg');

    const handleClick = (event) => {
      const point = [event.clientX, event.clientY];
      setPoints([...points, point]);
      if (!isDrawing) {
        setIsDrawing(true);
      }
    };

    const handleDoubleClick = () => {
      if (points.length > 2) {
        const pointsString = points.map(p => p.join(',')).join(' ');
        addLayer('polygon', { points: pointsString, fill: '#ff0000', stroke: '#000', strokeWidth: 2 });
      }
      setPoints([]);
      setIsDrawing(false);
    };

    svg.on('click', handleClick);
    svg.on('dblclick', handleDoubleClick);

    return () => {
      svg.on('click', null);
      svg.on('dblclick', null);
    };
  }, [points, isDrawing, addLayer]);

  return null;
};

export default PolygonDrawing;
