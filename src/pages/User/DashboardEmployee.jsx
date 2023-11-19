import React from 'react'
import { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/User/Sidebar'
import ListEmployee from '../../components/User/Dashboard/ListEmployee'
import DetailEmployee from '../../components/User/Dashboard/DetailEmployee'

const DashboardEmployee = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex relative bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>

                    <ListEmployee showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    <DetailEmployee />

                </div>
            </div>
        </Layout>
    )
}

export default DashboardEmployee