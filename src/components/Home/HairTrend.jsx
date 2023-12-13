import React from 'react'
import Header from '../../assets/images/icons/gataunamanya.png'
import { Link } from 'react-router-dom'
import dataHairTrends from '../../data/hairTrends'

const HairTrend = () => {
    return (
        <div className='w-full md:w-5/6 md:mx-auto my-24'>
            <div className='w-full flex flex-col'>
                <p className='text-center text-lg md:text-xl xl:text-2xl font-bold'>Trend Rambut</p>
                <div className='w-full flex justify-center items-center my-1'>
                    <img src={Header} alt="" />
                </div>
            </div>
            <div className='w-full flex xl:justify-center gap-5 overflow-x-scroll py-3 my-5 px-12 '>
                {dataHairTrends.map((hair, index) => (
                    <Hair image={hair.image} title={hair.title} index={index} />
                ))}
            </div>
        </div>
    )
}

const Hair = ({ id, title, image, index }) => {
    return (
        <div className='min-h-[150px] min-w-[150px] xl:min-h-[200px] xl:min-w-[200px] p-2 flex justify-center items-end bg-[length:160px_160px] xl:bg-[length:200px_200px] bg-gray-500 rounded' style={{ backgroundImage: `url(${image})` }}>
            <Link to={`/hair-trend?index=${index}`} className='w-full text-center font-semibold text-xs lg:text-sm bg-white py-1 px-2 rounded'>
                {title}
            </Link>
        </div>
    )
}

export default HairTrend