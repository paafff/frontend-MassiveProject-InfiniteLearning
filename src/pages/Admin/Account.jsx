import React from 'react';
import { useState } from 'react';
import Layout from '../Layout';
import Biodata from '../../components/Admin/Dashboard/Biodata';
import Sidebar from '../../components/Sidebar';

const Account = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex relative bg-gray-200 min-h-screen w-full'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <Biodata showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            </div>
        </Layout>
    )
}

export default Account;