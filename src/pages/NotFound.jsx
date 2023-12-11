import React from 'react'
import NotFoundIcon from '../assets/images/icons/notfound.svg'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen min-w-full px-10 gap-5'>
            <img src={NotFoundIcon} className='lg:w-1/2' alt="" />
            <p className='font-bold text-3xl text-zinc-700'>404 Page Not Found</p>
        </div>
    )
}

export default NotFound