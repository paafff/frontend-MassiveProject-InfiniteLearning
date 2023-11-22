import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const listBooking = [
    {
        id: 0
    },
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
]

const CardBooking = () => {
    return (
        <div className='w-screen lg:w-full pb-10 px-5 '>

            <div className='w-full mb-5'>
                <p className='text-lg font-bold text-center w-full underline underline-offset-8'>Pesanan Masuk</p>
            </div>

            <div className=' w-full grid grid-cols-1 gap-5 md:w-3/4 md:mx-auto xl:grid-cols-2 xl:justify-center'>

                {listBooking.map(booking => (
                    <Card />
                ))}
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded drop-shadow xl:max-w-lg'>

            <div className='flex gap-2 justify-between items-center' >

                <div div className=' flex gap-2 justify-start items-center' >
                    <FaUserCircle className='inline-block w-16 h-16 text-gray-500' />

                    <div className='flex flex-col justify-center'>
                        <p className='text-sm'>Toni Ahmad</p>
                        <p className='text-xs text-gray-500'>1 jam yang lalu</p>
                    </div>
                </div>

                <div className=' flex gap-2 justify-end items-center' >
                    <div className='py-2 px-3 drop-shadow-lg rounded hover:cursor-pointer transition-all bg-green-600 hover:bg-green-700'>
                        <p className='text-xs text-white'>Terima</p>
                    </div>
                    <div className='py-2 px-3 drop-shadow-lg rounded hover:cursor-pointer transition-all bg-red-600 hover:bg-red-700'>
                        <p className='text-xs text-white'>Tolak</p>
                    </div>

                </div>
            </div >
            <div className='w-full flex flex-col gap-2' >
                <div className='flex bg-gray-200 p-2 rounded-sm'>
                    <div className='w-1/4'>
                        <p className='text-sm font-semibold'>Nama </p>
                    </div>
                    <div className='w-3/4'>

                        <p className='text-sm'>: <span className='ml-2'>Toni Ahmad</span></p>
                    </div>
                </div>
                <div className='flex bg-gray-200 p-2 rounded-sm'>
                    <div className='w-1/4'>

                        <p className='text-sm font-semibold'>Waktu </p>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-sm'>: <span className='ml-2'>12:00, 14 August 2023</span></p>
                    </div>
                </div>
                <div className='flex bg-gray-200 p-2 rounded-sm'>
                    <div className='w-1/4'>
                        <p className='text-sm font-semibold'>Deskripsi </p>
                    </div>
                    <div className='w-3/4'>
                        <p className='text-sm'>: <span className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio esse culpa rerum asperiores aut a voluptatibus praesentium modi expedita at repudiandae sequi facere porro alias, cumque assumenda repellat magni?</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBooking