import React from 'react'
import { FaUserCircle, FaSave, FaRegTrashAlt } from "react-icons/fa";

const DetailEmployee = () => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <div className='flex justify-between items-center'>
                    <p className='text-base md:text-lg font-semibold'>Detail Karyawan</p>
                    <p className='text-xs md:text-sm text-gray-500'>23/08/2023</p>
                </div>
                <hr className='my-5' />

                <Form />
            </div>
        </div>
    )
}

const Form = () => {
    return (
        <div className='w-full flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='text-sm'>Foto Profil</p>
                <div className='flex gap-6 items-center'>

                    <FaUserCircle className='inline-block w-16 h-16 text-gray-400' />

                </div>
            </div>
            <form action="" className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Nama Lengkap</p>
                        <input type="text" disabled={true} className='h-10 w-full xl:w-1/2 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400 disabled:bg-gray-50' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Skill</p>
                        <input type="text" disabled={true} className='h-10 w-full xl:w-1/2 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400 disabled:bg-gray-50' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-sm'>Deskripsi</p>
                    <textarea name="desc" disabled={true} id="desc" rows="10" className='w-full xl:w-1/2 border border-gray-400 text-xs p-2 rounded placeholder:text-gray-400 disabled:bg-gray-50' ></textarea>
                </div>

                <hr className='mt-5' />

                <Button />
            </form>
        </div>
    )
}

const Button = () => {
    return (
        <div className='w-full flex justify-end'>
            <div className='w-fit flex justify-end py-2 px-5 bg-red-600 hover:bg-red-700 hover:cursor-pointer transition-all rounded'>
                <p className='text-xs md:text-sm text-white flex gap-4 md:gap-2 items-center'>
                    <FaRegTrashAlt className='inline-block scale-150 md:scale-100' />
                    Hapus Karyawan
                </p>
            </div>
        </div>
    )
}

export default DetailEmployee