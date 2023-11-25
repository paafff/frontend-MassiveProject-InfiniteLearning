import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const SyaratKetentuan = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <Term />

                </div>

            </div>
        </>
    )
}

const Term = () => {
    return (
        <div className='mb-8'>
        <p className='text-base md:text-xl font-semibold'>Syarat dan Ketentuan</p>

        <hr className='my-5' />
        <p className='text-lg font-semibold'>Pemilik</p>
        <p className='text-sm'> <u>Syarat dan Ketentuan Layanan Pemilik Bisnis</u></p>
        <br></br>
        <p className='text-lg font-semibold'>Pencari</p>
        <p className='text-sm'> <u>Syarat dan Ketentuan Pencari Barbershop atau Salon</u></p>
        </div>
    )
}

export default SyaratKetentuan