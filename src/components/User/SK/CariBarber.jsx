import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const CariBarber = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <SayaInginCari />

                </div>

            </div>
        </>
    )
}

const SayaInginCari = () => {
    return (
        <div>
            <p className='text-base md:text-lg font-semibold'>Saya ingin cari Barbershop atau Salon</p>

            <hr className='my-5' />
            <p className='text-sm'>Apakah saya harus memiliki akun HairHub untuk dapat mencari Barbershop atau Salon yang saya inginkan?
            <br></br>Bagaimana cara membuat akun pencari Barbershop atau Salon?
            <br></br>Apakah saya bisa membuat akun pencari dan pemilik Barbershop atau Salon sekaligus?
            <br></br>Saya sudah membuat akun pencari Barbershop atau Salon, bagaimana cara carinya?</p>
        </div>
    )
}

export default CariBarber