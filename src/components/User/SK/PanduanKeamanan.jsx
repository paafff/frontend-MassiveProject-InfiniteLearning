import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const PanduanKeamanan = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <p>Ke Info Umum</p>    

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <Guide />

                </div>

            </div>
        </>
    )
}

const Guide = () => {
    return (
        <div className='mb-8'>
        <p className='text-base md:text-xl font-semibold'>Panduan Keamanan</p>

        <hr className='my-5' />
        
        <p className='text-base md:text-lg font-semibold'>Keamanan Akun</p>
                <p className='text-sm'>Bagaimana cara agar akun saya tetap aman?</p>
                <p className='text-sm'>Apa yang harus dilakukan jika mendapatkan notifikasi permintaan kode verifikasi yang tidak saya lakukan?</p>
                <p className='text-sm'>Bagaimana cara HairHub menjaga keamanan data saya sebagai pengguna?</p>
                <p className='text-sm'>Nomor telepon saya tidak aktif atau hilang, apa yang harus saya lakukan?</p>
        </div>
    )
}

export default PanduanKeamanan