import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'

const Kebijakan = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 p-5 drop-shadow-md'>

                    <Policy />

                </div>

            </div>
        </>
    )
}

const Policy = () => {
    return (
        <div className='mb-8'>
            <p className='text-base md:text-xl font-semibold'>Kebijakan HairHub</p>

            <hr className='my-5' />
            <p className='text-lg font-semibold'>Kebijakan Privasi</p>
            <p className='text-sm py-3'> <u> Kebijakan Privasi HairHub</u></p>
            <p className='text-lg font-semibold'>Kebijakan Penalti Pengguna</p>
            <p className='text-sm py-3'> <u>Kebijakan Penalti Pengguna</u></p>
        </div>
    )
}

export default Kebijakan