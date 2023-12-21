import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const Bekerjasama = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 p-5 drop-shadow-md'>

                    <Kerjasama />

                </div>

            </div>
        </>
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

export default Bekerjasama