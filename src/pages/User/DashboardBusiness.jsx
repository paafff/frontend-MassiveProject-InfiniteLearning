import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/Sidebar';
import BasicInformation from '../../components/User/Dashboard/BasicInformation';
import DetailBusiness from '../../components/User/Dashboard/DetailBusiness';
import Services from '../../components/User/Dashboard/Services';
import Employee from '../../components/User/Dashboard/Employee';

const DashboardBusiness = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>

            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>
                    <BasicInformation showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    <DetailBusiness />
                    <Services />
                    <Employee />
                </div>

            </div>

        </Layout>
    )
}

export default DashboardBusiness