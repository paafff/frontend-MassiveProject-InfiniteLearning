import React from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import ListReview from '../../components/User/Dashboard/ListReview'
import DetailReview from '../../components/User/Dashboard/DetailReview'
import ProfileBarber from "../../assets/images/OIP.png"
import ProfilReviewer from "../../assets/images/profiles/profile_dummy.jpg"

const DashboardReview = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>
                    <ListReview showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    <DetailReview profileBarber={ProfileBarber} profilReviewer={ProfilReviewer} />
                </div>

            </div>
        </Layout >
    )
}

export default DashboardReview