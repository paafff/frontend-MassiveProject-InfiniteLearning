import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import ComponentHairTrend from '../components/HairTrend'
import dataHairTrends from '../data/hairTrends'
import { useLocation } from 'react-router-dom'

const HairTrend = () => {
    const [dataHairTrend, setDataHairTrend] = useState(null)
    const [index, setIndex] = useState(null)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    useEffect(() => {
        setIndex(searchParams.get('index'))
        setDataHairTrend(dataHairTrends[index])
    })

    return (
        <Layout>
            <div className='min-w-full min-h-screen'>
                <ComponentHairTrend dataHairTrend={dataHairTrend} index={index} />
            </div>
        </Layout>
    )
}

export default HairTrend