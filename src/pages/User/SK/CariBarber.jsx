import React, { useState } from 'react'
import Layout from '../../Layout'
import Sidebar from './Sidebar'
import ComponentCariBarber from '../../../components/User/SK/CariBarber'

const CariBarber = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex  bg-gray-200 h-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full min-h-screen'>

                    <ComponentCariBarber showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
    )
}

export default CariBarber