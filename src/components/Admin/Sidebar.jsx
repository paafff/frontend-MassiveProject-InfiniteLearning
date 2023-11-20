import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegBuilding, FaTachometerAlt } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div div className={`min-h-full pb-32 z-10 w-72 transition-all  lg:rounded-none bg-white drop-shadow-md absolute ${showSidebar ? "left-0" : "left-[-300px]"} lg:left-0 lg:static`

        }>
            <Account />

            <Dashboard />

            <User />

            <Usaha />

            <Review />

            <Layanan />

            <Report />
        </div >
    )
}

const Account = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaClipboardUser className='inline-block scale-150' />
                Account
            </p>
        </Link>
    )
}

const Dashboard = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaTachometerAlt className='inline-block scale-150' />
                Dashboard
            </p>
        </Link>
    )
}


const User = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                User
            </p>
        </Link>
    )
}

const Usaha = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Usaha
            </p>
        </Link>
    )
}

const Review = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Review
            </p>
        </Link>
    )
}

const Layanan = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Layanan
            </p>
        </Link>
    )
}

const Report = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Report
            </p>
        </Link>
    )
}



export default Sidebar