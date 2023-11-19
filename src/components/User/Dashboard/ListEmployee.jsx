import React from 'react'
import { FaChevronLeft, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

const HumbergerMenu = ({ showSidebar, setShowSidebar }) => {
    return (
        <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className={`w-5 h-5  transition-all text-zinc-900 lg:hidden mb-10 rotate-90 ${showSidebar ? 'ml-80 rotate-180' : 'ml-0'} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">

            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />

        </svg>
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