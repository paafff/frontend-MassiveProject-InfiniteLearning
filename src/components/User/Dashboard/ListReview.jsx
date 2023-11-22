import React from 'react'
import HumbergerMenu from './HumbergerMenu'
import { FaChevronLeft, FaEye } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

const listEmployee = [
    {
        id: 0,
        name: "Ilham",
        email: "ismis@gmail.com",
        created_at: "07/07/2023"
    },
    {
        id: 1,
        name: "ilham",
        email: "ilham@gmail.com",
        created_at: "07/07/2023"
    },
    {
        id: 2,
        name: "ilham",
        email: "ilham@gmail.com",
        created_at: "07/07/2023"
    },
    {
        id: 3,
        name: "ilham",
        email: "ilham@gmail.com",
        created_at: "07/07/2023"
    },
    {
        id: 4,
        name: "ilham",
        email: "ilham@gmail.com",
        created_at: "07/07/2023"
    },
]

const ListReview = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 pt-10 px-5 md:px-12 lg:pt-16'>

            <HumbergerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='flex gap-3 mb-5 justify-between md:justify-start'>
                <p className='text-xl md:text-2xl font-bold tracking-normal'>Barberking Barbershop</p>
                <p className='text-xs bg-zinc-950 h-fit py-1 px-3 text-white rounded'>Barbershop</p>
            </div>

            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Review</p>
                <hr className='my-5' />

                {listEmployee.map(employee => (
                    <List id={employee.id} name={employee.name} email={employee.email} date={employee.date} index={employee.id} />
                ))}

            </div>
        </div>
    )
}


const List = ({ id, name, email, date, index }) => {
    return (
        <div className='w-full py-3 px-2 border-t border-gray-200 flex justify-start items-center gap-5' key={id}>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <p className='text-sm lg:text-base '>"{name}"</p>
                </div>
                <div className='flex gap-2'>
                    <div className='py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded transition-all hover:cursor-pointer'>
                        <FaEye className='inline-block text-white scale-125' />
                    </div>
                    <div className='py-1 px-3 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-all rounded'>
                        <MdOutlineOpenInNew className='inline-block  scale-125' />
                    </div>
                </div>
                <div>
                    <p className='text-xs text-gray-400'>commented at <br /> 27/08/2023</p>
                </div>
            </div>
        </div>
    )
}

export default ListReview