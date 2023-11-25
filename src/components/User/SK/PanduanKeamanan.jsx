import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const PanduanKeamanan = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

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
                <p className='text-sm'>Bagaimana cara agar akun saya tetap aman?
                <br></br>Apa yang harus dilakukan jika mendapatkan notifikasi permintaan kode verifikasi yang tidak saya lakukan?
                <br></br>Bagaimana cara HairHub menjaga keamanan data saya sebagai pengguna?
                <br></br>Nomor telepon saya tidak aktif atau hilang, apa yang harus saya lakukan?</p>
        </div>
    )
}

export default PanduanKeamanan