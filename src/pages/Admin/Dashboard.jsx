import React from 'react';
import { useState } from 'react';
import Layout from '../Layout';
import Account from '../../components/Admin/Dashboard/Account';
import Sidebar from '../../components/Admin/Sidebar';

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex relative bg-gray-200 min-h-screen w-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <Account showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            </div>
        </Layout>
    )
}

export default Dashboard;