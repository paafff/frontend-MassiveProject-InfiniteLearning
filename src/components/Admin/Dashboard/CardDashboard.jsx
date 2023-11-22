import React from 'react'
import { FaUserCircle, FaBuilding, FaComments } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import HamburgerMenu from './HamburgerMenu'

const CardDashboard = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <div className='w-full flex flex-col pt-10 lg:pt-16 px-6 md:px-12 xl:px-24 lg:px-10 '>

                <HamburgerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

                <div className='w-full mx-auto justify-start md:justify-evenly xl:justify-start xl:gap-12 flex flex-wrap gap-10'>

                    <CardUser />

                    <CardBusiness />

                    <CardReview />

                </div>

            </div>
        </>
    )
}

const CardUser = () => {
    return (
        <>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 aspect-square p-3 md:p-5 gap-3 md:gap-5 xl:gap-10 flex flex-col justify-end items-center bg-white text-zinc-900 drop-shadow rounded'>

                <div className='w-full flex justify-center'>
                    <p className='text-5xl md:text-6xl xl:text-8xl'>7</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex gap-3 justify-between items-center'>
                        <FaUserCircle className='inline-block xl:scale-150 ' />
                        <p className='text-xs md:text-base xl:text-xl tracking-wider '>User</p>
                    </div>
                    <div className='transition-all hover:cursor-pointer hover:text-blue-500'>
                        <MdOpenInNew className='inline-block xl:scale-150 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

const CardBusiness = () => {
    return (
        <>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 aspect-square p-3 md:p-5 gap-3 md:gap-5 xl:gap-10 flex flex-col justify-end items-center bg-white text-zinc-900 drop-shadow rounded'>

                <div className='w-full flex justify-center'>
                    <p className='text-5xl md:text-6xl xl:text-8xl'>17</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex gap-3 justify-between items-center'>
                        <FaBuilding className='inline-block xl:scale-150 ' />
                        <p className='text-xs md:text-base xl:text-xl tracking-wider '>Usaha</p>
                    </div>
                    <div className='transition-all hover:cursor-pointer hover:text-blue-500'>
                        <MdOpenInNew className='inline-block xl:scale-150 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

const CardReview = () => {
    return (
        <>
            <div className='w-1/3 md:w-1/4 xl:w-1/6 aspect-square p-3 md:p-5 gap-3 md:gap-5 xl:gap-10 flex flex-col justify-end items-center bg-white text-zinc-900 drop-shadow rounded'>

                <div className='w-full flex justify-center'>
                    <p className='text-5xl md:text-6xl xl:text-8xl'>77</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex gap-3 justify-between items-center'>
                        <FaComments className='inline-block xl:scale-150 ' />
                        <p className='text-xs md:text-base xl:text-xl tracking-wider '>Review</p>
                    </div>
                    <div className='transition-all hover:cursor-pointer hover:text-blue-500'>
                        <MdOpenInNew className='inline-block xl:scale-150 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDashboard