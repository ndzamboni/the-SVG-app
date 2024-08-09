import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import ShapeControls from './ShapeControls';
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
      .style('border', '1px solid black');

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
          .attr('rx', attributes.borderRadius) // Border radius
          .attr('fill', attributes.fill)
          .attr('fill-opacity', attributes.fillOpacity) // Fill opacity
          .attr('stroke', attributes.stroke)
          .attr('stroke-width', attributes.strokeWidth) // Stroke width
          .attr('stroke-opacity', attributes.strokeOpacity); // Stroke opacity
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
      }

      d3.drag().on('drag', function (event) {
        const [x, y] = d3.pointer(event);
        updateLayer(layer.id, { ...attributes, x, y });
      })(element);

      element.on('click', () => {
        setSelectedLayer(layer.id);
      });
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
          x: 50,
          y: 50,
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
    <div>
      <svg ref={svgRef}></svg>
      <ShapeControls addLayer={addLayer} />
      <LayerManager layers={layers} toggleVisibility={toggleVisibility} />
      {selectedLayer && (
        <TransformationControls
          layer={layers.find(layer => layer.id === selectedLayer)}
          updateLayer={updateLayer}
        />
      )}
      <button onClick={() => saveSVG(svgRef.current)}>Save SVG</button>
    </div>
  );
};

export default SvgCanvas;
