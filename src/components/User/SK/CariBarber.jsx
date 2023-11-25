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
            <p>saya ingin cari barber</p>
        </div>
    )
}

export default CariBarber