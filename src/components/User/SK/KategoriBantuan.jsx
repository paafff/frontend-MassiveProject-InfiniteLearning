import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePolicy } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const KategoriBantuan = () => {
    return (
        <div className='w-full lg:py-5'>

            <div className='bg-white xl:w-fit mx-auto  rounded-md lg:p-8 p-5 drop-shadow-md'>
                <p className='text-2xl font-black m-5'>Kategori Bantuan</p>

                <div className='grid gap-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                    <InfoUmum />

                    <KebijakanHairHub />

                    <SK />

                    <PanduanKeamanan />

                    <Hubungi />
                </div>

            </div>

        </div>
    )
}

const InfoUmum = () => {
    return (
        <div className='w-72 my-5 flex flex-col gap-4 text-zinc-900 p-3 pb-5 rounded-md border-b border-slate-200'>
            <IoIosInformationCircleOutline className='w-10 h-10' />
            <p className='text-xl  font-bold'>
                <Link to="/basic-information">Info Umum</Link>
            </p>
            <div className='flex flex-col gap-1'>
                <p className='text-base  font-normal'>
                    <Link to="/search-barber">
                        Cari Barbershop / Salon
                    </Link></p>
                <p className='text-base  font-normal'>
                    <Link to="/collaboration">
                        Bekerjasama HairHub
                    </Link>
                </p>
            </div>
        </div>
    )
}

const KebijakanHairHub = () => {
    return (
        <div className='w-72 my-5 flex flex-col gap-4 text-zinc-900 p-3 pb-5 rounded-md border-b border-slate-200'>
            <MdOutlinePolicy className='w-10 h-10' />
            <p className='text-xl  font-bold'>
                <Link to="/policy">
                    Kebijakan HairHub
                </Link>
            </p>
            <div className='flex flex-col gap-1'>
                <p className='text-base  font-normal'>
                    <Link to="/privacy">
                        Kebijakan Privasi
                    </Link>
                </p>
                <p className='text-base  font-normal'>
                    <Link to="/penalty">
                        Kebijakan Penalti
                    </Link>
                </p>
            </div>
        </div>
    )
}

const SK = () => {
    return (
        <div className='w-72 my-5 flex flex-col gap-4 text-zinc-900 p-3 pb-5 rounded-md border-b border-slate-200'>
            <IoDocumentTextOutline className='w-10 h-10' />
            <p className='text-xl  font-bold'>
                <Link to="/term">
                    Syarat dan Ketentuan
                </Link>
            </p>
            <div className='flex flex-col gap-1'>
                <p className='text-base  font-normal'>
                    <Link to="/term-owner">
                        Pemilik
                    </Link>
                </p>
                <p className='text-base  font-normal'>
                    <Link to="/term-searcher">
                        Pencari
                    </Link>
                </p>
            </div>
        </div>
    )
}

const PanduanKeamanan = () => {
    return (
        <div className='w-72 my-5 flex flex-col gap-4 text-zinc-900 p-3 pb-5 rounded-md border-b border-slate-200'>
            <BsJournalBookmark className='w-10 h-10' />
            <p className='text-xl  font-bold'>
                <Link to="/guide">
                    Panduan Keamanan
                </Link>
            </p>
        </div>
    )
}


const Hubungi = () => {
    return (
        <div className='w-72 my-5 flex flex-col gap-4 text-zinc-900 p-3 pb-5 rounded-md border-b border-slate-200'>
            <TfiHeadphoneAlt className='w-10 h-10' />
            <p className='text-xl  font-bold'>
                <Link to="/call-center">
                    Hubungi HairHub
                </Link>
            </p>
        </div>
    )
}

export default KategoriBantuan