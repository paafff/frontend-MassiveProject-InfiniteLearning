import React, { useState } from 'react'
import Layout from '../Layout'
import Sidebar from '../../components/Sidebar'
import CardDashboard from '../../components/Admin/Dashboard/CardDashboard'
import ListUser from '../../components/Admin/Dashboard/ListUser'
import ListBusiness from '../../components/Admin/Dashboard/ListBusiness'
import ListReview from '../../components/Admin/Dashboard/ListReview'

const dataUser = [
    {
        uuid: 0,
        name: "Ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 1,
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 2,
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 3,
        name: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 4,
        name: "ilham",
        created_at: "07/07/2023"
    },
]

const dataReview = [
    {
        uuid: 0,

        desc: "Javanese Barbershop",
        created_at: "07/07/2023"
    },
    {
        uuid: 1,

        desc: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 2,

        desc: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 3,

        desc: "ilham",
        created_at: "07/07/2023"
    },
    {
        uuid: 4,

        desc: "ilham",
        created_at: "07/07/2023"
    },
]

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

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <Layout>

            <div className='flex bg-gray-200'>

                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-screen min-h-screen'>

                    <CardDashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                    <ListUser showSidebar={showSidebar} setShowSidebar={setShowSidebar} listUser={dataUser} />

                    <ListBusiness showSidebar={showSidebar} setShowSidebar={setShowSidebar} listBusiness={dataBusiness} />

                    <ListReview showSidebar={showSidebar} setShowSidebar={setShowSidebar} listReview={dataReview} />
                </div>


            </div>
        </Layout>
    )
}

export default Dashboard