import React, { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/Sidebar'
import ListBusiness from '../../components/Admin/Dashboard/ListBusiness'
import DetailBusiness from '../../components/Admin/Dashboard/DetailBusiness'
import HamburgerMenu from '../../components/Admin/Dashboard/HamburgerMenu'

const dataBusiness = [
    {
        uuid: 0,
        typeBusiness: "Barber",
        name: "Javanese Barbershop",
        created_at: "07/07/2023"
    },
    {
        uuid: 1,
        typeBusiness: "Barber",
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 2,
        typeBusiness: "Barber",
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 3,
        typeBusiness: "Salon",
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 4,
        typeBusiness: "Salon",
        name: "ilham",
        created_at: "07/07/2023"
    },
]

const Business = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>

            <div className="flex bg-gray-200">
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>

                    <ListBusiness showSidebar={showSidebar} setShowSidebar={setShowSidebar} listBusiness={dataBusiness} hamburgerMenu={<HamburgerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />

                    <DetailBusiness />

                </div>
            </div>

        </Layout>
    )
}

export default Business