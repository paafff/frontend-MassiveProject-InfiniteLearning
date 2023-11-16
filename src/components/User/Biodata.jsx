import React from 'react'
import { useState, useEffect } from 'react'
import ProfilePhoto from '../../assets/images/profiles/profile_dummy.jpg'
import { IoMdShare } from "react-icons/io";
import { FaRegCopy, FaSave } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

const dataUser = {
    profilePhoto: "profile_dummy.jpg",
    fullname: "Ilham Soejud Alkahfiardy",
    gender: "Pria",
    address: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio exercitationem officia nesciunt quam et tempore, cum ab inventore laudantium, ipsam fugit animi dignissimos, molestias ea distinctio ad ex eaque iste.`,
    email: "emailku.hairhub@gmail.com",
    password: "123123"
};

const dataGender = {
    man: "Pria",
    woman: "Wanita"
}

const Biodata = ({ showSidebar, setShowSidebar }) => {

    const [editBio, setEditBio] = useState(true)
    console.log(editBio);

    return (
        <div className='w-full flex flex-col py-10 lg:py-16 px-6 md:px-12 lg:px-10 xl:px-16 xl:w-full '>

            <HumbergerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <p className='text-xl lg:text-2xl font-bold '>Hello, {dataUser.fullname}</p>

            <div className='flex flex-col xl:flex-row-reverse xl:gap-32 xl:justify-end'>

                <div className='flex justify-center md:justify-end'>
                    <ProfileCard />
                </div>

                <Form editBio={editBio} setEditBio={setEditBio} />
            </div>

            {/* <Button editBio={editBio} setEditBio={setEditBio} /> */}

        </div>
    )
}

const HumbergerMenu = ({ setShowSidebar, showSidebar }) => {
    return (
        <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className={`w-5 h-5 transition-all text-zinc-900 lg:hidden mb-10 rotate-90 ${showSidebar ? 'ml-80' : 'ml-0'} `}
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

const ProfileCard = () => {

    const copyURL = () => {
        // Get the current URL
        const currentURL = window.location.href;

        // Create a temporary textarea element to copy the URL
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = currentURL;
        document.body.appendChild(tempTextarea);

        // Select the text in the textarea
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // For mobile devices

        // Execute the copy command
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Alert or perform any other action after copying
        alert('URL copied to clipboard!');
    }

    return (
        <div className='w-72 bg-white drop-shadow justify-center items-center py-10 mt-10 rounded-md flex flex-col gap-8 float-right xl:h-fit'>

            <img src={ProfilePhoto} alt="" className='rounded-full w-20 h-20 object-cover' />
            <p className='text-sm'>
                {dataUser.fullname}
            </p>

            <div className='flex gap-3'>
                <div className='w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full'>
                    <IoMdShare className=' text-white text-base' />
                </div>
                <div className='w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full'>
                    <FaRegCopy onClick={() => copyURL()} className=' text-white text-base' />
                </div>
                <div className='w-10 h-10 hover:cursor-pointer bg-red-700 flex items-center justify-center rounded-full'>
                    <FaRegTrashCan className=' text-white text-base' />
                </div>
            </div>
        </div>
    )
}

const Form = ({ editBio, setEditBio }) => {

    const [formData, setFormData] = useState({
        fullname: dataUser.fullname,
        gender: dataUser.gender,
        address: dataUser.address,
        email: dataUser.email,
        password: dataUser.password
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // main process
        console.log("data tersimpan", formData);
    }

    return (
        <form className='mt-14 w-full flex flex-col gap-6 xl:w-1/2 xl:justify-start' onSubmit={handleSubmit}>

            <div className='flex justify-between items-center'>
                <label className='text-sm lg:text-base'>Nama Lengkap</label>
                <input type="text" className='w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300' placeholder='nama lengkap' value={formData.fullname} disabled={editBio} />
            </div>

            <div className='flex items-center justify-between'>
                <p className='text-sm lg:text-base'>Jenis Kelamin</p>
                <input type="text" className='w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300' placeholder='jenis kelamin' value={formData.gender} disabled={editBio} />

            </div>

            <div className='flex justify-between items-start'>
                <label className='text-sm lg:text-base'>Alamat</label>
                <textarea type="text" rows={10} className='w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300' placeholder='alamat' value={formData.address} disabled={editBio} />
            </div>

            <div className='flex justify-between items-center'>
                <label className='text-sm lg:text-base'>Email</label>
                <input type="email" className='w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300' placeholder='email' disabled={editBio} value={formData.email} />
            </div>

            <div className='flex justify-between items-center'>
                <label className='text-sm lg:text-base'>Password</label>
                <input type="password" className='w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300' disabled={editBio} value={formData.password} />
            </div>

            <div className='mt-8 flex gap-5 justify-end'>
                <div className='hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded ' onClick={() => setEditBio(!editBio)}>
                    <p className='text-sm text-white flex gap-2 items-center'>
                        <FiEdit className='inline-block' />
                        Ubah Akun
                    </p>
                </div>
                <button type='submit' className='py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded'>
                    <p className='text-sm text-white flex gap-2 items-center'>
                        <FaSave className='inline-block' />
                        Simpan Perubahan
                    </p>
                </button>
            </div>

        </form>
    )
}

const Button = ({ editBio, setEditBio }) => {
    return (
        <div className='mt-8 flex gap-5 justify-end'>
            <div className=' py-2 px-5 bg-zinc-950 rounded ' onClick={() => setEditBio(!editBio)}>
                <p className='text-sm text-white flex gap-2 items-center'>
                    <FiEdit className='inline-block' />
                    Ubah Akun
                </p>
            </div>
            <div className=' py-2 px-5 bg-green-600 rounded'>
                <p className='text-sm text-white flex gap-2 items-center'>
                    <FaSave className='inline-block' />
                    Simpan Perubahan
                </p>
            </div>
        </div>
    )
}

export default Biodata