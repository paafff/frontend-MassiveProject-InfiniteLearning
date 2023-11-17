import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/User/Sidebar';
import BasicInformation from '../../components/User/BasicInformation';
import DetailBussiness from '../../components/User/DetailBussiness';

const DashboardBussiness = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>


            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen flex flex-col'>
                    <BasicInformation showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    <DetailBussiness />
                </div>

            </div>

        </Layout>
    )
}

export default DashboardBussiness