import React from 'react'
import { useState } from 'react'
import Sidebar from '../../components/User/Sidebar'
import Layout from '../Layout'
import Biodata from '../../components/User/Dashboard/Biodata'

const Dashboard = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    // console.log(showSidebar);

    return (
        <Layout>
            <div className='flex bg-gray-200'>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <Biodata showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>

        </Layout>
    )
}

export default Dashboard