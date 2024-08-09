import React, { useState } from 'react';
import './SvgCanvas.css';

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </div>
      <div className={`sidebar-content ${collapsed ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
