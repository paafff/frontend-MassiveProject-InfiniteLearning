import React, { useState } from 'react'
import Layout from '../../Layout'
import Sidebar from './Sidebar'
import ComponentInfoUmum from '../../../components/User/SK/InfoUmum'

const InfoUmum = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex  bg-gray-200 h-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full min-h-screen'>
                    <ComponentInfoUmum showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                </div>

            </div>
        </Layout>
    )
}

export default InfoUmum