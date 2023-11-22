import React from 'react'
import { IoMdInformationCircleOutline, IoMdPin } from "react-icons/io";
import { FaRegBuilding, FaAngleDown, FaRegComments } from "react-icons/fa";
import { FaTachometerAlt, FaUserCircle, FaBuilding, FaComments, FaClipboardList, FaFlag } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const isAdmin = true;

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

            {isAdmin ? (
                <>
                    <AdminAccount />

                    <AdminDashboard />

                    <AdminUser />

                    <AdminUsaha />

                    <AdminReview />

                    <AdminLayanan />

                    <AdminReport />
                </>
            ) : (
                <>
                    <UserBiodata />

                    <UserAjukanUsaha />

                    <UserUsaha />

                    <UserBooking />

                    <UserReview />
                </>
            )}


        </div>
    )
}

const UserBiodata = () => {
    return (
        <Link to="/user/dashboard" className='w-full h-fit flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <IoMdInformationCircleOutline className='inline-block scale-150' />
                Biodata
            </p>
        </Link>
    )
}

const UserAjukanUsaha = () => {
    return (
        <Link to="/user/business-registration" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base text-black flex items-center gap-4'>
                <FaRegBuilding className='inline-block scale-150' />
                Ajukan Usaha
            </p>
        </Link>
    )
}

const UserUsaha = () => {
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

const UserBooking = () => {
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

const UserReview = () => {
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

const AdminAccount = () => {
    return (
        <Link to="/admin/account" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaClipboardUser className='inline-block scale-150' />
                Account
            </p>
        </Link>
    )
}

const AdminDashboard = () => {
    return (
        <Link to="/admin/dashboard" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaTachometerAlt className='inline-block scale-150' />
                Dashboard
            </p>
        </Link>
    )
}


const AdminUser = () => {
    return (
        <Link to="/admin/user" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaUserCircle className='inline-block scale-150' />
                User
            </p>
        </Link>
    )
}

const AdminUsaha = () => {
    return (
        <Link to="/admin/business" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaBuilding className='inline-block scale-150' />
                Usaha
            </p>
        </Link>
    )
}

const AdminReview = () => {
    return (
        <Link to="/admin/review" className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaComments className='inline-block scale-150' />
                Review
            </p>
        </Link>
    )
}

const AdminLayanan = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaClipboardList className='inline-block scale-150' />
                Layanan
            </p>
        </Link>
    )
}

const AdminReport = () => {
    return (
        <Link className='w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12'>
            <p className='text-sm lg:text-base  flex items-center gap-4'>
                <FaFlag className='inline-block scale-150' />
                Report
            </p>
        </Link>
    )
}




export default Sidebar