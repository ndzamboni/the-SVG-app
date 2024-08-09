export const saveSVG = (svgElement) => {
    const svgData = svgElement.outerHTML;
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'custom-svg.svg';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  // Other utility functions can be added here as needed.
  