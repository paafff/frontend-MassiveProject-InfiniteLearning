import React from 'react'
import Layout from './Layout'
import ComponentHairTrend from '../components/HairTrend'

const HairTrend = () => {
    return (
        <Layout>
            <div className='min-w-full min-h-screen'>
                <ComponentHairTrend />
            </div>
        </Layout>
    )
}

export default HairTrend