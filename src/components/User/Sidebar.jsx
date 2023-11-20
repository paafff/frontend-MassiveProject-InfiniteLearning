import React from 'react'
import { IoMdInformationCircleOutline, IoMdPin } from "react-icons/io";
import { FaRegBuilding, FaAngleDown, FaInfoCircle, FaCalendarCheck, FaRegComments } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const listUsaha = [
    {
        id: 1,
        name: "Javanese Barbershop"

    },
    {
        id: 2,
        name: "Captain Barbershop"

    },
    {
        id: 3,
        name: "Corrin King Barbershop"

    },

];

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className={`min-h-full pb-32 z-10 w-72 transition-all rounded-br-full lg:rounded-none bg-white drop-shadow-md absolute ${showSidebar ? "left-0" : "left-[-300px]"} lg:left-0 lg:static`}>

            <Biodata />

            <AjukanUsaha />

            <Usaha />

            <Booking />

            <Review />


        </div>
    )
}

const Biodata = () => {
    return (
        <Link to="/user/dashboard" className='w-full h-fit flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <IoMdInformationCircleOutline className='inline-block scale-150' />
                Biodata
            </p>
        </Link>
    )
}

const AjukanUsaha = () => {
    return (
        <Link to="/user/business-registration" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Ajukan Usaha
            </p>
        </Link>
    )
}

const Usaha = () => {
    return (
        <Link className='w-full h-fit  transition-all white flex flex-col gap-8 justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <IoLocationOutline className='inline-block scale-150' />
                Usaha <FaAngleDown className='inline-block text-zinc-900' />

            </p>
            <div className='flex flex-col gap-3'>

                {listUsaha.map((usaha) => (
                    <Link to="/superuser/dashboard-business" className='py-2 px-4 hover:bg-gray-200 transition-all rounded'>
                        <p className='text-xs' key={usaha.id}>{usaha.name}</p>
                    </Link>
                ))}
            </div>
        </Link>
    )
}

const Booking = () => {
    return (
        <Link className='w-full h-fit  transition-all white flex flex-col gap-8 justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegCalendarCheck className='inline-block scale-150' />
                Booking <FaAngleDown className='inline-block text-zinc-900' />

            </p>
            <div className='flex flex-col gap-3'>

                {listUsaha.map((usaha) => (
                    <Link to="/superuser/dashboard-booking" className='py-2 px-4 hover:bg-gray-200 transition-all rounded'>
                        <p className='text-xs' key={usaha.id}>{usaha.name}</p>
                    </Link>
                ))}
            </div>
        </Link>
    )
}

const Review = () => {
    return (
        <Link className='w-full h-fit  transition-all white flex flex-col gap-8 justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegComments className='inline-block scale-150' />
                Review <FaAngleDown className='inline-block text-zinc-900' />

            </p>
            <div className='flex flex-col gap-3'>

                {listUsaha.map((usaha) => (
                    <Link to="/superuser/dashboard-review" className='py-2 px-4 hover:bg-gray-200 transition-all rounded'>
                        <p className='text-xs' key={usaha.id}>{usaha.name}</p>
                    </Link>
                ))}
            </div>
        </Link>
    )
}



export default Sidebar