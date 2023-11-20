import React from 'react'
import { FaChevronLeft, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HumbergerMenu from './HumbergerMenu';

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

const ListEmployee = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>

            <HumbergerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <Link to="/dashboard-bussiness" className='text-lg flex gap-3 items-center mb-5'>
                <FaChevronLeft className='inline-block scale-125' />
                Back
            </Link>

            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Karyawan</p>
                <hr className='my-5' />

                {listEmployee.map((employee, index) => (

                    <List index={index} id={employee.id} name={employee.name} email={employee.email} date={employee.created_at} />
                ))}
            </div>
        </div>
    )
}

const List = ({ id, name, email, date, index }) => {
    return (
        <div className='w-full py-3 px-2 border-t border-gray-200 flex justify-start items-center gap-5' key={id}>
            <div className='w-1'>
                <p className='text-xs text-gray-500'>{index + 1}.</p>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <p className='text-sm lg:text-base '>{name}</p>
                </div>
                <div className='py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded'>
                    <FaEye className='inline-block text-white scale-125' />
                </div>
                <div>
                    <p className='text-xs text-gray-400'>added <br /> 27/08/2023</p>
                </div>
            </div>
        </div>
    )
}

export default ListEmployee