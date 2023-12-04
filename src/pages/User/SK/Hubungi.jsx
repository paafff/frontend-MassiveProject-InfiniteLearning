import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Layout from '../../Layout'
import ComponentHubungi from '../../../components/User/SK/Hubungi'

const Hubungi = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex  bg-gray-200 min-h-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full min-h-screen'>

                    <ComponentHubungi showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
    )
}

export default Hubungi