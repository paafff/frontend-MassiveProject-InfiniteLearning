import React from 'react'
import HumbergerMenu from './Dashboard/HumbergerMenu'
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';

const Reservation = ({ showSidebar, setShowSidebar, data }) => {
    console.log(data);

    return (
        <div className="w-full flex flex-col py-10 lg:py-16 px-6 md:px-12 xl:px-24 lg:px-10 ">
            <HumbergerMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <p className="text-xl lg:text-2xl font-bold ">
                History Reservasi
            </p>

            <div className='mt-10 py-3 w-full grid grid-cols-1 place-content-center gap-5 md:w-3/4  md:mx-auto xl:grid-cols-2 xl:justify-center'>
                {data.map((item, index) => (
                    <CardReservation index={index} data={item} />
                ))}
            </div>
        </div>
    )
}

const CardReservation = ({ index, data }) => {
    return (
        <div key={index} className="flex flex-col gap-4 p-4 bg-white rounded drop-shadow ">
            <div className="flex gap-2 justify-between items-center">
                <div div className="w-full flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <div className='w-16 h-16'>
                            <img src={data.businessData.imageURL[0]} alt="logo" className='w-full h-full object-cover rounded-full' />
                        </div>

                        <div className="flex flex-col gap-2 justify-center">
                            <p className="text-sm">{data.businessData.name}</p>
                            <p className="text-xs text-gray-500">{data.createdAt}</p>
                        </div>
                    </div>
                    <div className='h-full'>
                        <Link to={`/detail/${data.businessData.uuid}`}>
                            <MdOutlineOpenInNew className='scale-150 text-blue-400' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="flex bg-gray-200 p-2 rounded-sm">
                    {/* //ini field bagusan diganti phone */}
                    <div className="w-1/4">
                        <p className="text-sm font-semibold">phone </p>
                    </div>
                    <div className="w-3/4">
                        <p className="text-sm">
                            : <span className="ml-2">{data.businessData.phone}</span>
                        </p>
                    </div>
                </div>
                <div className="flex bg-gray-200 p-2 rounded-sm">
                    <div className="w-1/4">
                        <p className="text-sm font-semibold">Waktu </p>
                    </div>
                    <div className="w-3/4">
                        <p className="text-sm">
                            :{' '}
                            <span className="ml-2">
                                {data.day}, {data.time}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex bg-gray-200 p-2 rounded-sm">
                    <div className="w-1/4">
                        <p className="text-sm font-semibold">Deskripsi </p>
                    </div>
                    <div className="w-3/4">
                        <p className="text-sm">
                            : <span className="ml-2">{data.description}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation