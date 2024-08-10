import React from 'react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

const ExportControls = ({ svgRef }) => {
  const handleExport = (format) => {
    const svgNode = svgRef.current;

    if (format === 'png' || format === 'jpeg') {
      domtoimage.toBlob(svgNode)
        .then(blob => {
          saveAs(blob, `image.${format}`);
        });
    } else if (format === 'svg') {
      const svgBlob = new Blob([svgNode.outerHTML], { type: 'image/svg+xml' });
      saveAs(svgBlob, 'image.svg');
    }
  };

  return (
    <div className="export-controls">
      <h3>Export Controls</h3>
      <button onClick={() => handleExport('svg')}>Export as SVG</button>
      <button onClick={() => handleExport('png')}>Export as PNG</button>
      <button onClick={() => handleExport('jpeg')}>Export as JPEG</button>
    </div>
  );
};

export default ExportControls;
