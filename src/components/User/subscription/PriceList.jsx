import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const PriceList = ({ textColor, title, borderColor, price, text, services, bgColor }) => {

    const pathname = useLocation().pathname

    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR', // Change this to your desired currency code
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className={`m-3 min-w-[384px]  xl:w-[300px] mx-auto xl:mx-0 min-h-[582px] flex flex-col justify-between bg-white rounded-2xl p-6 drop-shadow-xl  border-2 ${borderColor}`}>
            <div className='flex flex-col'>
                <div className='w-full flex justify-start'>
                    <p className={`font-semibold text-base lg:text-lg tracking-wide ${textColor}`}>{title}</p>
                </div>
                <div className='w-full flex justify-start my-6 '>

                    <p className='font-bold text-4xl text-zinc-900'>{formattedPrice}</p>
                </div>
                <div className='w-full flex justify-start '>
                    <p className='text-base lg:text-lg font-normal text-gray-500 text-justify'> {text}</p>
                </div>
                <div className='w-full flex flex-col justify-start p-5'>
                    {services.map(service => (
                        <div className='flex items-center justify-start my-2'>
                            <FaCheck className={`inline-block me-5 ${textColor} `} />
                            <p className='text-gray-500 text-base lg:text-lg'>
                                {service}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {pathname != '/subscription' ? (
                <Link to="/subscription">
                    <div className={`w-full h-16 flex justify-center items-center rounded-3xl ${bgColor} hover:scale-95 transition-all shadow-lg hover:shadow-none hover:cursor-pointer`}>
                        <p className='text-white font-semibold tracking-wider text-lg'>

                            Dapatkan Sekarang
                        </p>
                    </div>
                </Link>
            ) : ""}
        </div>
    )
}

export default PriceList