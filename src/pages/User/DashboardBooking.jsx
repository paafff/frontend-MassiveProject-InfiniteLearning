import React, { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/User/Sidebar'
import HeaderBooking from '../../components/User/Dashboard/HeaderBooking'

const DashboardBooking = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className="w-screen mx-auto flex flex-col">

                    <HeaderBooking showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
    )
}

export default DashboardBooking