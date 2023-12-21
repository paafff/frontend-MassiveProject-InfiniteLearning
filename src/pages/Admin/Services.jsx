import React, { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/Sidebar'
import ListServices from '../../components/Admin/Dashboard/ListServices'
import HamburgerMenu from '../../components/Admin/Dashboard/HamburgerMenu'

const dataServices = [
    {
        id: 0,
        name: "Pijat Kepala",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 1,
        name: "Haircut",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 2,
        name: "Bleaching",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 3,
        name: "Spa",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 4,
        name: "Creambath",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 5,
        name: "Cuci Kering",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 6,
        name: "Smoothing",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 7,
        name: "Eyelash Extension",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 8,
        name: "Nail Art",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 9,
        name: "Face Treatment",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 10,
        name: "Shave",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 11,
        name: "Fashial Shave",
        created_at: "2023-11-23 09:50:35"
    },
    {
        id: 12,
        name: "Full Trim",
        created_at: "2023-11-23 09:50:35"
    },

]

const Services = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>
            <div className="flex bg-gray-200">
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>

                    <ListServices hamburgerMenu={<HamburgerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} listServices={dataServices} />

                </div>
            </div>
        </Layout>
    )
}

export default Services