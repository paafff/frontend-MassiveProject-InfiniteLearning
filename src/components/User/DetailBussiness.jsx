import React from 'react'
import { IoIosSave } from "react-icons/io";
import InstagramLogo from '../../assets/images/logo/instagram.png'

const DetailBussiness = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 lg:pt-16 xl:w-1/2'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>
                <p className='text-xl font-semibold'>Detail Usaha</p>
                <hr className='my-5' />

                <Banner />

                <Socmed />

            </div>
        </div>
    )
}

const Banner = () => {
    return (
        <div className='w-full border border-gray-300 rounded p-2 flex flex-col gap-3 mb-5'>
            <div className='w-full aspect-video bg-gray-500 rounded flex items-center justify-center'>
                <p className='text-white'>Spesimen</p>
            </div>
            <div className='flex justify-center gap-3'>
                <div className='w-20 bg-gray-500 aspect-square rounded'>

                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded'>

                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded'>

                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded'>

                </div>
            </div>
        </div>
    )
}

const Socmed = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
                <img src={InstagramLogo} className='w-5' alt="" />
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs' placeholder='Link instagram' />
                <div className='px-3 py-1 bg-green-600 rounded'>
                    <IoIosSave className='inline-block text-white' />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={InstagramLogo} className='w-5' alt="" />
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs' placeholder='Link Facebook' />
                <div className='px-3 py-1 bg-green-600 rounded'>
                    <IoIosSave className='inline-block text-white' />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={InstagramLogo} className='w-5' alt="" />
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs' placeholder='Link twitter' />
                <div className='px-3 py-1 bg-green-600 rounded'>
                    <IoIosSave className='inline-block text-white' />
                </div>
            </div>
        </div>
    )
}

export default DetailBussiness