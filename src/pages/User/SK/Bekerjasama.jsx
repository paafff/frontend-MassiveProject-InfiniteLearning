import React, { useState } from 'react'
import Layout from '../../Layout'
import Sidebar from './Sidebar'
import ComponentBekerjasama from '../../../components/User/SK/Bekerjasama'

const Bekerjasama = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex  bg-gray-200 h-screen'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full min-h-screen'>

                    <ComponentBekerjasama showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                </div>

            </div>
        </Layout>
  )
}

export default Bekerjasama