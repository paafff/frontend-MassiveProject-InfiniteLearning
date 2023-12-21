import React, { useState } from 'react'
import Layout from '../../Layout'
import Sidebar from './Sidebar'
import ComponentPenalti from '../../../components/User/SK/Penalti'

const Penalti = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex  bg-gray-200 min-h-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full min-h-screen mb-20'>

                    <ComponentPenalti showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
    )
}

export default Penalti