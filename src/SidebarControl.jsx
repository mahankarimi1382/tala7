// App.jsx (or whatever your main component is)

import { useState } from 'react';
import WoodHeader from './WoodHeader';
import Sidebar from './sidebar';

function SidebarControl() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <WoodHeader onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {/* Your other content here */}
    </div>
  );
}

export default SidebarControl;