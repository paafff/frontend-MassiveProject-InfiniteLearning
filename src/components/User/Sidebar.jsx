import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className={`min-h-screen z-10 w-72 transition-all bg-white drop-shadow-md absolute ${showSidebar ? "left-0" : "left-[-300px]"} lg:left-0 lg:static`}>

            <Biodata />

            <AjukanUsaha />

        </div>
    )
}

const Biodata = () => {
    return (
        <Link className='w-full h-fit bg-zinc-900 flex items-center justify-center py-12'>
            <p className='text-sm lg:text-base text-white flex items-center gap-4'>
                <IoIosInformationCircleOutline className='inline-block scale-150' />
                Biodata
            </p>
        </Link>
    )
}

const AjukanUsaha = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-center py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Ajukan Usaha
            </p>
        </Link>
    )
}

export default Sidebar