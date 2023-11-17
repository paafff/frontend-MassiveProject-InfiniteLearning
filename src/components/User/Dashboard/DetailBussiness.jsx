import React, { useRef, useState } from 'react'
import { IoIosSave } from "react-icons/io";
import { FaFacebookSquare, FaYoutube, FaSave } from "react-icons/fa";
import InstagramLogo from '../../../assets/images/logo/instagram.png'
import { FaXTwitter } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoReturnDownBackOutline } from "react-icons/io5";

const DetailBussiness = () => {
    const [editForm, setEditForm] = useState(true)

    const bannerRef = useRef(null)
    const [banner, setBanner] = useState("")

    const handleBannerClick = () => {
        bannerRef.current.click();
    }

    const handleBannerChange = (event) => {
        console.log("ambil gambar");
        // const file = event.target.files[0]
        // console.log(file);
        // setBanner(file)
    }

    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Detail Usaha</p>
                <hr className='my-5' />

                <div className='xl:flex xl:flex-row flex flex-col gap-4 mb-6'>

                    <Banner />

                    <Socmed editForm={editForm} setEditForm={setEditForm} />

                </div>

                <Form editForm={editForm} setEditForm={setEditForm} handleBannerClick={handleBannerClick} handleBannerChange={handleBannerChange} bannerRef={bannerRef} />

            </div>
        </div>
    )
}

const Banner = () => {
    return (
        <div className='w-full xl:my-auto xl:w-1/2 border border-gray-300 rounded p-2 flex flex-col gap-3 mb-5'>
            <div className='w-full md:w-3/4 mx-auto md:max-h-72 aspect-video bg-gray-500 rounded flex items-center justify-center'>
                <p className='text-white'>Banner</p>
            </div>
            <div className='flex justify-center gap-3'>
                <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center '>
                    <p className='text-xs text-white'>Foto</p>
                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center '>
                    <p className='text-xs text-white'>Foto</p>

                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center '>
                    <p className='text-xs text-white'>Foto</p>

                </div>
                <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center '>
                    <p className='text-xs text-white'>Foto</p>

                </div>
            </div>
        </div>
    )
}

const Socmed = ({ editForm }) => {
    return (
        <div className='flex flex-col md:items-start md:px-3 xl:w-1/2 xl:justify-center xl:items-center xl:ml-3 gap-3'>
            <div className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <img src={InstagramLogo} className='w-full' alt="" />
                </div>
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link instagram' />

                {!editForm && (
                    <div className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </div>
                )}
            </div>
            <div className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaFacebookSquare className='inline-block w-full h-full text-blue-600' />
                </div>
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link Facebook' />
                {!editForm && (
                    <div className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </div>
                )}
            </div>
            <div className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaXTwitter className='inline-block w-full h-full text-gray-900' />
                </div>
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link twitter' />
                {!editForm && (
                    <div className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </div>
                )}
            </div>
            <div className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaYoutube className='inline-block w-full h-full text-red-600' />
                </div>
                <input type="text" className='w-3/4 h-9 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link youtube' />
                {!editForm && (
                    <div className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </div>
                )}
            </div>
        </div>
    )
}

const Form = ({ handleBannerChange, handleBannerClick, bannerRef, editForm, setEditForm }) => {

    return (

        <div className='flex flex-col gap-3'>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="" className='text-sm'>Banner</label>
                <form className='flex gap-3'>
                    {!editForm ? (
                        <div className={`w-full md:w-3/4 xl:w-1/2 h-8 border border-gray-300 rounded flex items-center px-2`} onClick={handleBannerClick}>
                            <p className='text-xs text-gray-700'>Upload Foto Banner </p>
                        </div>

                    ) : (
                        <div className='w-full md:w-3/4 xl:w-1/2 h-8 border border-gray-300 rounded flex items-center px-2 bg-gray-200 ' >
                            <p className='text-xs text-gray-500'>Upload Foto Banner </p>
                        </div>
                    )}
                    <input type="file" name='banner' id='banner' className='' ref={bannerRef} onChange={handleBannerChange} />

                    <button type='submit' disabled={editForm} className={`py-2 px-3  text-xs rounded ${editForm ? "bg-gray-200 text-gray-500" : "bg-zinc-800 text-white "} `}>Upload</button>
                </form>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="" className='text-sm'>Foto</label>
                <form className='flex gap-3'>
                    <input type="file" name='banner' id='banner' className='hidden' ref={bannerRef} />
                    {!editForm ? (

                        <div className='w-full md:w-3/4 xl:w-1/2 h-8 border border-gray-300 rounded flex items-center px-2'>
                            <p className='text-xs text-gray-700'>Upload Foto</p>
                        </div>
                    ) : (
                        <div className='w-full md:w-3/4 xl:w-1/2 h-8 border border-gray-300 rounded flex items-center px-2 bg-gray-200'>
                            <p className='text-xs text-gray-500'>Upload Foto</p>
                        </div>

                    )}
                    <button type='submit' disabled={editForm} className={`py-2 px-3 text-white text-xs rounded ${editForm ? "bg-gray-200 text-gray-500" : "bg-zinc-800 text-white"}`}>Upload</button>
                </form>
            </div>
            <form action="" className='flex flex-col gap-2'>
                <div className='w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2'>
                    <label htmlFor="" className='text-sm'>Deskripsi</label>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs text-gray-400'>Tuliskanlah deskripsi dari usaha yang kamu miliki</p>
                        <textarea className='text-xs w-full text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200' disabled={editForm} placeholder='Deskripsi' name="desc" id="desc" rows="10"></textarea>
                    </div>
                </div>

                <div className='w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2'>
                    <label htmlFor="" className='text-sm'>Link Google Maps</label>
                    <input className='text-xs w-full text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200' disabled={editForm} placeholder='Masukkan link' name="maps" id="maps" />
                </div>

                <hr className='my-5' />
                <div className='w-full flex justify-between md:justify-end gap-5'>
                    {editForm ? (

                        <div onClick={() => setEditForm(!editForm)} className='hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded '>
                            <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                                <FiEdit className='inline-block' />
                                Ubah Data
                            </p>
                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <div onClick={() => setEditForm(!editForm)} className='hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded '>
                                <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                                    <IoReturnDownBackOutline className='inline-block' />
                                    Back
                                </p>
                            </div>
                            <div className='w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded'>
                                <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                                    <FaSave className='inline-block' />
                                    Simpan Perubahan
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </form>
        </div>
    )
}


export default DetailBussiness