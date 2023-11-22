import React from 'react'
import { FaUserCircle, FaTrashAlt } from "react-icons/fa";

const DetailUser = () => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>

            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Detail User</p>
                <hr className='my-5' />

                <Form />

            </div>
        </div>
    )
}

const Form = () => {
    return (
        <div className='flex flex-col gap-4 px-3'>
            <div className='w-20 h-20'>
                <FaUserCircle className='w-full h-full text-gray-200' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xs'>Nama</p>
                <input name='fullname' type="text" disabled={true} className='w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200' placeholder='nama lengkap' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xs'>Email</p>
                <input name='fullname' type="text" disabled={true} className='w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200' placeholder='email' />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-xs'>Terdaftar Pada</p>
                <input name='fullname' type="text" disabled={true} className='w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200' placeholder=' tanggal registrasi' />
            </div>
            <hr className='my-3' />
            <div className='w-full flex justify-end items-center'>
                <div className='w-fit px-3 py-2 bg-red-600 hover:bg-red-700 hover:cursor-pointer rounded flex gap-3'>
                    <FaTrashAlt className='inline-block text-white' />
                    <p className='text-xs text-white'>Suspend User</p>
                </div>
            </div>
        </div>
    )
}

export default DetailUser