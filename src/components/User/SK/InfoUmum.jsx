import React from 'react'

// ini dicopas
import Hamburger from '../../../pages/User/SK/Hamburger'
import { Link } from 'react-router-dom'

// showSidebar, setShowSidebar
const InfoUmum = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md p-5 lg:p-8 drop-shadow-md'>

                    <InfoUmumDesc />

                    <CariBarberSalon />

                    <Kerjasama />

                </div>

            </div>
        </>
    )
}

const InfoUmumDesc = () => {
    return (
        <div className='mb-8'>
            <p className='text-base md:text-lg font-semibold'>Info Umum</p>

            <hr className='my-5' />

            <p className='text-sm'>Dapatkan informasi umum tentang HairHub dan mulai mencari atau
                mengelola bisnis Barbershop atau Salon bersama kami.</p>
        </div>
    )
}

const CariBarberSalon = () => {
    return (
        <div className='mb-8'>
            <p className='text-base md:text-lg font-semibold'>Cari Barbershop atau Salon</p>

            <hr className='my-5' />

            <p className='text-sm'>Apakah saya harus memiliki akun HairHub untuk dapat mencari Barbershop atau Salon yang saya inginkan?
                <br></br>Bagaimana cara membuat akun pencari Barbershop atau Salon?
                <br></br>Apakah saya bisa membuat akun pencari dan pemilik Barbershop atau Salon sekaligus?
                <br></br>Saya sudah membuat akun pencari Barbershop atau Salon, bagaimana cara carinya?</p>
        </div>
    )
}

const Kerjasama = () => {
    return (
        <div className='mb-8'>
            <p className='text-base md:text-lg font-semibold'>Berkerjasama dengan HairHub</p>

            <hr className='my-5' />
            <p className='text-sm'>Apakah saya harus memiliki akun HairHub untuk dapat mendaftarkan bisnis saya?</p>
            <p className='text-sm'>Bagaimana cara membuat akun sebagai pemilik Barbershop atau Salon?</p>
            <p className='text-sm'>Apakah saya bisa membuat akun pemilik dan pencari Barbershop atau Salon sekaligus?</p>
            <p className='text-sm'>Saya sudah membuat akun pemilik Barbershop atau Salon, bagaimana cara mendaftarkan bisnis saya?</p>
        </div>
    )
}

export default InfoUmum