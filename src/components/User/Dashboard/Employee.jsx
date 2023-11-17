import React from 'react'
import { FaRegCopy, FaSave, FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const Employee = () => {
    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>
                <div className='w-full flex justify-between items-center'>
                    <p className='text-base md:text-lg font-semibold'>Karyawan</p>
                    <p className='text-xs md:text-lg text-gray-500'>Tambahkan detail karyawan</p>
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
                    <FaUserCircle className='inline-block w-12 h-12 text-gray-400' />
                    <p className='text-xs text-gray-500 py-1 px-2 border border-gray-400 hover:bg-gray-400 hover:text-white hover:cursor-pointer transition-all rounded'>Upload foto</p>
                </div>
            </div>
            <form action="" className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Nama Lengkap</p>
                        <input type="text" className='h-10 w-full xl:w-3/4 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400' placeholder='Masukkan nama lengkap' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Skill</p>
                        <input type="text" className='h-10 w-full xl:w-3/4 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400' placeholder='Isi skill' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-sm'>Deskripsi</p>
                    <textarea name="desc" id="desc" rows="10" className='w-full xl:w-3/4 border border-gray-400 text-xs p-2 rounded placeholder:text-gray-400' placeholder='Deskripsi'></textarea>
                </div>

                <hr className='mt-5' />

                <Button />
            </form>
        </div>
    )
}

const Button = () => {
    return (
        <div className='w-full flex justify-between md:justify-end gap-5'>
            <div className='hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded '>
                <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                    <FiEdit className='inline-block' />
                    Ubah Akun
                </p>
            </div>
            <div className='w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded'>
                <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                    <FaSave className='inline-block' />
                    Simpan Perubahan
                </p>
            </div>
        </div>
    )
}

export default Employee