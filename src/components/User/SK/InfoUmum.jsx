import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const InfoUmum = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <InfoUmumDesc />

                    <CariBarberSalon />

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

            <p className='text-sm'>Apakah saya harus memiliki akun HairHub untuk dapat mencari Barbershop/Salon yang saya inginkan?
                Bagaimana cara membuat akun pencari Barbershop/Salon?
                Apakah saya bisa membuat akun pencari dan pemilik Barbershop/Salon sekaligus?
                Saya sudah membuat akun pencari Barbershop/Salon, bagaimana cara carinya?</p>
        </div>
    )
}

export default InfoUmum