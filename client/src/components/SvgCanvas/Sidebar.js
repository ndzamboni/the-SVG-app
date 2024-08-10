import React, { useState } from 'react';
import './SvgCanvas.css';
import './Tooltip.css'; // Import the tooltip styles

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="tooltip sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
        <span className="tooltiptext">{collapsed ? 'Expand the sidebar' : 'Collapse the sidebar'}</span>
      </div>
      <div className={`sidebar-content ${collapsed ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
