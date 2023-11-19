import React, { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/User/Sidebar'
import Header from '../../components/User/Dashboard/Header'

const DashboardBooking = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className="w-screen flex flex-col">

                    <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
    )
}

export default DashboardBooking