import React from 'react'
import Layout from '../../Layout'
import ComponentKategoriBantuan from '../../../components/User/SK/KategoriBantuan'

const KategoriBantuan = () => {
    return (
        <Layout>
            <div className='flex bg-gray-200 min-h-screen'>

                <div className='w-full min-h-screen p-5 lg:p-16 xl:p-24'>

                    <ComponentKategoriBantuan />

                </div>

            </div>
        </Layout>
    )
}

export default KategoriBantuan