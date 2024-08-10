import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import Sidebar from './Sidebar';
import ShapeControls from './ShapeControls';
import PathControls from './PathControls';
import TextControls from './TextControls';
import LayerManager from './LayerManager';
import TransformationControls from './TransformationControls';
import { saveSVG } from './SvgUtils';
import './SvgCanvas.css';

const SvgCanvas = () => {
  const svgRef = useRef();
  const [layers, setLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 800)
      .attr('height', 600)
      .style('border', '1px solid #444');

    svg.selectAll('*').remove();

    layers.forEach(layer => {
      if (!layer.visible) return;

      const { type, attributes } = layer;
      let element;

      if (type === 'rectangle') {
        element = svg.append('rect')
          .attr('x', attributes.x)
          .attr('y', attributes.y)
          .attr('width', attributes.width)
          .attr('height', attributes.height)
          .attr('rx', attributes.borderRadius)
          .attr('fill', attributes.fill)
          .attr('fill-opacity', attributes.fillOpacity)
          .attr('stroke', attributes.stroke)
          .attr('stroke-width', attributes.strokeWidth)
          .attr('stroke-opacity', attributes.strokeOpacity);
      } else if (type === 'circle') {
        element = svg.append('circle')
          .attr('cx', attributes.x)
          .attr('cy', attributes.y)
          .attr('r', attributes.radius)
          .attr('fill', attributes.fill)
          .attr('fill-opacity', attributes.fillOpacity)
          .attr('stroke', attributes.stroke)
          .attr('stroke-width', attributes.strokeWidth)
          .attr('stroke-opacity', attributes.strokeOpacity);
      } else if (type === 'ellipse') {
        element = svg.append('ellipse')
          .attr('cx', attributes.x)
          .attr('cy', attributes.y)
          .attr('rx', attributes.width / 2)
          .attr('ry', attributes.height / 2)
          .attr('fill', attributes.fill)
          .attr('fill-opacity', attributes.fillOpacity)
          .attr('stroke', attributes.stroke)
          .attr('stroke-width', attributes.strokeWidth)
          .attr('stroke-opacity', attributes.strokeOpacity);
      } else if (type === 'path') {
        element = svg.append('path')
          .attr('d', attributes.d)
          .attr('fill', attributes.fill)
          .attr('stroke', attributes.stroke)
          .attr('stroke-width', attributes.strokeWidth);
      } else if (type === 'text') {
        element = svg.append('text')
          .attr('x', attributes.x)
          .attr('y', attributes.y)
          .attr('font-size', attributes.fontSize)
          .attr('font-family', attributes.fontFamily)
          .attr('fill', attributes.fill)
          .text(attributes.text);
      }

      let startX, startY, initialX, initialY;

      const drag = d3.drag()
        .on('start', function (event) {
          // Capture the starting mouse position
          startX = event.x;
          startY = event.y;

          // Capture the initial position of the element
          const { x, y } = layer.type === 'circle' || layer.type === 'ellipse'
            ? { x: attributes.cx, y: attributes.cy }
            : { x: attributes.x, y: attributes.y };

          initialX = x;
          initialY = y;
        })
        .on('drag', function (event) {
          // Calculate the new position
          const dx = event.x - startX;
          const dy = event.y - startY;

          const newX = initialX + dx;
          const newY = initialY + dy;

          // Update the element's position
          updateLayer(layer.id, {
            ...attributes,
            x: newX,
            y: newY,
            ...(layer.type === 'circle' || layer.type === 'ellipse' ? { cx: newX, cy: newY } : {}),
          });
        });

      drag(element);
      element.on('click', () => setSelectedLayer(layer.id));
    });
  }, [layers]);

  const addLayer = (type, attributes) => {
    setLayers([
      ...layers,
      {
        id: layers.length + 1,
        type,
        attributes: {
          ...attributes,
          x: type === 'text' || type === 'path' ? 100 : 50,
          y: type === 'text' || type === 'path' ? 100 : 50,
        },
        visible: true,
      },
    ]);
  };

  const updateLayer = (id, newAttributes) => {
    setLayers(layers.map(layer => layer.id === id ? { ...layer, attributes: newAttributes } : layer));
  };

  const toggleVisibility = (id) => {
    setLayers(layers.map(layer => layer.id === id ? { ...layer, visible: !layer.visible } : layer));
  };

  return (
    <div className="svg-canvas-container">
      <Sidebar>
        <ShapeControls addLayer={addLayer} />
        <PathControls addLayer={addLayer} />
        <TextControls addLayer={addLayer} />
        <LayerManager layers={layers} toggleVisibility={toggleVisibility} />
        {selectedLayer && (
          <TransformationControls
            layer={layers.find(layer => layer.id === selectedLayer)}
            updateLayer={updateLayer}
          />
        )}
        <button onClick={() => saveSVG(svgRef.current)}>Save SVG</button>
      </Sidebar>
      <div className="svg-container">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default SvgCanvas;
