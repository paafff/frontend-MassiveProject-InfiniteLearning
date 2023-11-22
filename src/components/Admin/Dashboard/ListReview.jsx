import React from 'react'
import { FaChevronLeft, FaEye } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';


const ListReview = ({ listReview, hamburgerMenu }) => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>

            {hamburgerMenu}

            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Review</p>
                <hr className='my-5' />

                {listReview.map((review, index) => (
                    <Review index={index} id={review.id} desc={review.desc} date={review.created_at} />
                ))}

            </div>
        </div>
    )
}


const Review = ({ id, desc, date, index }) => {
    return (
        <div className='w-full py-3 px-2 border-t border-gray-200 flex justify-start items-center gap-5' key={id}>
            <div className='w-1'>
                <p className='text-xs text-gray-500'>{index + 1}.</p>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='w-1/4 md:w-1/3'>
                    <p className='text-sm lg:text-base '>{desc}</p>
                </div>
                <div className='flex gap-2'>

                    <div className='py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded'>
                        <FaEye className='inline-block text-white scale-125' />
                    </div>
                    <div className='py-1 px-3 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-all rounded'>
                        <MdOutlineOpenInNew className='inline-block  scale-125' />
                    </div>
                </div>
                <div>
                    <p className='text-xs text-gray-400'>commented <br /> {date}</p>
                </div>
            </div>
        </div>
    )
}

export default ListReview