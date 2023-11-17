import React from 'react'
import { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";

const listLayanan = [
    {
        id: 0,
        name: "Pijat Kepala"
    },
    {
        id: 1,
        name: "Haircut"
    },
    {
        id: 2,
        name: "Bleaching"
    },
    {
        id: 3,
        name: "Spa"
    },
    {
        id: 4,
        name: "Creambath"
    },
    {
        id: 5,
        name: "Cuci Kering"
    },
    {
        id: 6,
        name: "Smoothing"
    },
    {
        id: 7,
        name: "Eyelash Extension"
    },
    {
        id: 8,
        name: "Nail Art"
    },
    {
        id: 9,
        name: "Face Treatment"
    },
    {
        id: 10,
        name: "Shave"
    },
    {
        id: 11,
        name: "Fashial Shave"
    },
    {
        id: 12,
        name: "Full Trim"
    },

]

const Services = () => {
    const [editForm, setEditForm] = useState(true)

    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>
                <p className='text-base md:text-lg font-semibold'>Layanan</p>
                <hr className='my-5' />

                <form action="">
                    {listLayanan.map((service) => (
                        <Service editForm={editForm} id={service.id} name={service.name} />
                    ))}

                    <hr />

                    <Button editForm={editForm} setEditForm={setEditForm} />
                </form>

            </div>
        </div>
    )
}

const Service = ({ id, name, editForm }) => {
    return (

        <div className='w-full py-3 px-5 border-t border-gray-200 flex justify-start gap-10' key={id}>
            <input type="checkbox" className='scale-125' id={id} />
            <div className='w-1/2'>
                <p className='text-sm font-thin'>{name}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='text-sm text-gray-400 font-thin' id={id}>Rp</p>
                <input type="number" className='w-3/4 border border-gray-300 rounded px-2 h-7 text-xs disabled:bg-gray-200' disabled={editForm} />
            </div>
        </div>
    )
}

const Button = ({ editForm, setEditForm }) => {
    return (
        <>
            {editForm ? (
                <div className='w-full flex justify-end'>
                    <div onClick={() => setEditForm(!editForm)} className='mt-5 w-fit hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded '>
                        <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                            <FiEdit className='inline-block' />
                            Ubah Akun
                        </p>
                    </div>
                </div>
            ) : (

                <div className='flex gap-3 mt-5 justify-end'>
                    <div onClick={() => setEditForm(!editForm)} className='hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded '>
                        <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                            <IoReturnDownBackOutline className='inline-block' />
                            Back
                        </p>
                    </div>
                    <div className='w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded'>
                        <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                            <FaSave className='inline-block' />
                            Simpan Perubahan
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Services