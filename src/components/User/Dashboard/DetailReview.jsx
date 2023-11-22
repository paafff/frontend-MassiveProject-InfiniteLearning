import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoIosFlag } from "react-icons/io";

const DetailReview = ({ profileBarber, profilReviewer }) => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>
                <div className='flex justify-between items-center'>
                    <p className='text-base md:text-lg font-semibold'>Detail Review</p>
                </div>
                <hr className='my-5' />

                <Detail profileBarber={profileBarber} profilReviewer={profilReviewer} />

            </div>
        </div>

    )
}

const Detail = ({ profileBarber, profilReviewer }) => {
    return (
        <div className='w-full '>
            <div className='flex gap-3 justify-start'>
                <img src={profileBarber} className='w-24 aspect-video object-contain' alt="" srcset="" />
                <div className='flex flex-col gap-2 justify-center'>
                    <p className='text-xs bg-zinc-900 text-white py-1 px-2 rounded w-fit'>Barbershop</p>
                    <p className='text-xs text-gray-600'>- Javanese Barbershop</p>
                </div>
            </div>
            <hr className='my-4' />
            <div className='px-5 xl:px-10 my-10 flex flex-col gap-3'>
                <p className='text-sm text-ellipsis overflow-hidden'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sint quisquam doloremque! Nostrum quae quibusdam quod sed sunt eaque eum vitae officiis minus alias! Adipisci nobis ipsa quis nisi ex?"</p>
                <div className='flex gap-5'>
                    <p className='text-sm text-red-600 font-semibold tracking-wide'>Review Rating</p>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='inline-block scale-150 text-amber-500' />
                        <p className='text-sm '>5.0</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-end mt-5'>
                <div className='flex gap-4 items-end justify-start'>
                    <img src={profilReviewer} className='w-14 aspect-square rounded-full object-cover' alt="" />
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500 text-sm'>- Ilham Soejud Alkahfiardy</p>
                        <p className='text-xs text-gray-500'>15/07/2023</p>
                    </div>
                </div>
                <div className='py-1 px-3 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-all rounded'>
                    <MdOutlineOpenInNew className='inline-block  scale-125' />
                </div>
            </div>
            <hr className='my-4' />
            <div className='w-full flex justify-end items-end'>
                <div className='bg-red-600 rounded shadow-md px-3 py-1 lg:py-2 lg:px-4 hover:cursor-pointer hover:bg-red-700 transition-all'>
                    <p className='text-xs text-white lg:text-sm'> <IoIosFlag className='inline-block mr-1 scale-125' /> Report Review</p>
                </div>
            </div>
        </div>
    )
}

export default DetailReview