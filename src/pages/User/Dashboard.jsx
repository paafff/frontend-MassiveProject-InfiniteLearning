import React from 'react';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Layout from '../Layout';
import Biodata from '../../components/User/Dashboard/Biodata';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout>
      <div className="flex relative bg-gray-200 min-h-screen">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* updatebusiness */}
        <Biodata showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </Layout>
  );
};

export default Dashboard;
