import React, { useRef, useState, useEffect } from 'react'
import { IoIosSave } from "react-icons/io";
import { FaFacebookSquare, FaYoutube, FaSave } from "react-icons/fa";
import InstagramLogo from '../../../assets/images/logo/instagram.png'
import { FaXTwitter } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const DetailBusiness = () => {
    const [editForm, setEditForm] = useState(true)

    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4'>
            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Detail Usaha</p>
                <hr className='my-5' />

                <div className='xl:flex xl:flex-row flex flex-col gap-4 mb-6'>

                    <Banner
                        editForm={editForm}
                        setEditForm={setEditForm}
                    // banner={banner}
                    // setBanner={setBanner}
                    // bannerRef={bannerRef}
                    // handleBannerClick={handleBannerClick}
                    // handleBannerChange={handleBannerChange}
                    // handlePicture1Click={handlePicture1Click}
                    // handlePicture1Change={handlePicture1Change}
                    // picture1={picture1}
                    // picture1Ref={picture1Ref}
                    // picture2Ref={picture2Ref}
                    // picture3Ref={picture3Ref}
                    // picture4Ref={picture4Ref}
                    />

                    <Socmed
                        editForm={editForm}
                        setEditForm={setEditForm}
                    />

                </div>

                <Form
                    editForm={editForm}
                    setEditForm={setEditForm}
                />

            </div>
        </div>
    )
}

const Banner = ({ editForm, setEditForm }) => {

    const bannerRef = useRef(null)
    const picture1Ref = useRef(null)
    const picture2Ref = useRef(null)
    const picture3Ref = useRef(null)
    const picture4Ref = useRef(null)

    const [banner, setBanner] = useState(null)
    const [picture1, setPicture1] = useState(null)
    const [picture2, setPicture2] = useState(null)
    const [picture3, setPicture3] = useState(null)
    const [picture4, setPicture4] = useState(null)

    // Banner
    const handleBannerClick = () => {
        bannerRef.current.click();
    }
    const handleBannerChange = (event) => {
        // console.log("ambil gambar");
        const file = event.target.files[0]
        console.log(file);
        setBanner(file)
    }

    // Picture 1
    const handlePicture1Click = () => {
        picture1Ref.current.click();
    }
    const handlePicture1Change = (event) => {
        // console.log("ambil gambar");
        const file = event.target.files[0]
        console.log(file);
        setPicture1(file)
    }

    // Picture 2
    const handlePicture2Click = () => {
        picture2Ref.current.click();
    }
    const handlePicture2Change = (event) => {
        // console.log("ambil gambar");
        const file = event.target.files[0]
        console.log(file);
        setPicture2(file)
    }

    // Picture 3
    const handlePicture3Click = () => {
        picture3Ref.current.click();
    }
    const handlePicture3Change = (event) => {
        // console.log("ambil gambar");
        const file = event.target.files[0]
        console.log(file);
        setPicture3(file)
    }

    // Picture 4
    const handlePicture4Click = () => {
        picture4Ref.current.click();
    }
    const handlePicture4Change = (event) => {
        // console.log("ambil gambar");
        const file = event.target.files[0]
        console.log(file);
        setPicture4(file)
    }

    useEffect(() => {
        if (editForm == true) {
            setBanner('')
            setPicture1('')
        }
    }, [editForm])

    return (
        <div className='w-full xl:my-auto xl:w-1/2 border border-gray-300 rounded p-2 mb-5 flex flex-col gap-2'>
            <div className='flex flex-col gap-3'>
                {banner ? (
                    <img src={URL.createObjectURL(banner)} className='w-full md:w-3/4 mx-auto md:max-h-72 aspect-video rounded flex items-center justify-center object-contain' />
                ) : (
                    <div className='w-full hover:cursor-pointer md:w-3/4 mx-auto md:max-h-72 aspect-video bg-gray-500 hover:bg-gray-600 transition-all rounded flex items-center justify-center' onClick={handleBannerClick}>
                        <p className='text-white'>Banner</p>
                    </div>
                )}

                <input type="file" name='banner' id='banner' className='hidden' ref={bannerRef} onChange={handleBannerChange} />

                <div className='flex justify-center gap-3'>
                    <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center ' onClick={handlePicture1Click} >
                        {picture1 ? (
                            <img src={URL.createObjectURL(picture1)} className='w-full ' alt="" srcset="" />
                        ) : (
                            <p className='text-xs text-white'>Foto 1</p>
                        )}
                        <input type="file" id='picture1' name='picture1' className='hidden' ref={picture1Ref} onChange={handlePicture1Change} />
                    </div>
                    <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center ' onClick={handlePicture2Click}>
                        {picture2 ? (
                            <img src={URL.createObjectURL(picture2)} className='w-full ' alt="" srcset="" />
                        ) : (
                            <p className='text-xs text-white'>Foto 2</p>
                        )}
                        <input type="file" id='picture2' name='picture2' className='hidden' ref={picture2Ref} onChange={handlePicture2Change} />

                    </div>
                    <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center ' onClick={handlePicture3Click}>
                        {picture3 ? (
                            <img src={URL.createObjectURL(picture3)} className='w-full ' alt="" srcset="" />
                        ) : (
                            <p className='text-xs text-white'>Foto 3</p>
                        )}
                        <input type="file" id='picture1' name='picture1' className='hidden' ref={picture3Ref} onChange={handlePicture3Change} />

                    </div>
                    <div className='w-20 bg-gray-500 aspect-square rounded flex items-center justify-center ' onClick={handlePicture4Click}>
                        {picture4 ? (
                            <img src={URL.createObjectURL(picture4)} className='w-full ' alt="" srcset="" />
                        ) : (
                            <p className='text-xs text-white'>Foto 4</p>
                        )
                        }
                        <input type="file" id='picture1' name='picture1' className='hidden' ref={picture4Ref} onChange={handlePicture4Change} />

                    </div>
                </div>
            </div>
            {banner ? (
                <div className='flex gap-2'>
                    <div className='w-full flex items-center justify-center bg-green-600 py-2 rounded hover:bg-green-700 hover:cursor-pointer transition-all'>
                        <p className='text-xs text-white text-center'>Upload Banner</p>
                    </div>
                    <div className='flex items-center p-3' onClick={() => setBanner(!banner)}>
                        <TfiReload />
                    </div>
                </div>
            ) : ("")}
        </div>
    )
}

const Socmed = ({ editForm, setEditForm }) => {
    const [instagramLink, setInstagramLink] = useState(null)
    const [facebookLink, setFacebookLink] = useState(null)
    const [twitterLink, setTwitterLink] = useState(null)
    const [youtubeLink, setYoutubeLink] = useState(null)

    // Instagram
    const handlerInstagram = (e) => {
        e.preventDefault();
        setEditForm(!editForm)

        // logic input instagram
        console.log(instagramLink);
    }

    // Facebook
    const handlerFacebook = (e) => {
        e.preventDefault();
        setEditForm(!editForm)

        // logic input facebook
        console.log(facebookLink);
    }

    // Twitter
    const handlerTwitter = (e) => {
        e.preventDefault();
        setEditForm(!editForm)

        // logic input Twitter
        console.log(twitterLink);
    }

    // Youtube
    const handlerYoutube = (e) => {
        e.preventDefault();
        setEditForm(!editForm)

        // logic input Youtube
        console.log(youtubeLink);
    }

    return (
        <div className='flex flex-col md:items-start md:px-3 xl:w-1/2 xl:justify-center xl:items-center xl:ml-3 gap-3'>
            <form onSubmit={handlerInstagram} className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <img src={InstagramLogo} className='w-full' alt="" />
                </div>
                <input onChange={(e) => setInstagramLink(e.target.value)} type="text" name='instagram' className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link instagram' />

                {!editForm && (
                    <button type='submit' className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </button>
                )}
            </form>
            <form onSubmit={handlerFacebook} className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaFacebookSquare className='inline-block w-full h-full text-blue-600' />
                </div>
                <input onChange={(e) => setFacebookLink(e.target.value)} type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link Facebook' />
                {!editForm && (
                    <button type='submit' className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </button>
                )}
            </form>
            <form onSubmit={handlerTwitter} className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaXTwitter className='inline-block w-full h-full text-gray-900' />
                </div>
                <input onChange={(e) => setTwitterLink(e.target.value)} type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link twitter' />
                {!editForm && (
                    <button type='submit' className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </button>
                )}
            </form>
            <form onSubmit={handlerYoutube} className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaYoutube className='inline-block w-full h-full text-red-600' />
                </div>
                <input onChange={(e) => setYoutubeLink(e.target.value)} type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={editForm} placeholder='Link youtube' />
                {!editForm && (
                    <button type='submit' className='px-3 py-1 bg-green-600 hover:bg-green-700 transition-all hover:cursor-pointer rounded'>
                        <IoIosSave className='inline-block text-white' />
                    </button>
                )}
            </form>
        </div>
    )
}

const Form = ({ editForm, setEditForm }) => {
    const [desc, setDesc] = useState("")
    const [maps, setMaps] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("tersubmit", [desc, maps]);
    }

    return (

        <div className='flex flex-col gap-3'>


            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2'>
                <div className='w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2'>
                    <label htmlFor="" className='text-sm'>Deskripsi</label>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs text-gray-400'>Tuliskanlah deskripsi dari usaha yang kamu miliki</p>
                        <textarea onChange={(e) => setDesc(e.target.value)} className='text-xs w-full text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200' disabled={editForm} placeholder='Deskripsi' name="desc" id="desc" rows="10"></textarea>
                    </div>
                </div>

                <div className='w-full md:w-3/4 xl:w-1/2 flex flex-col gap-2'>
                    <label htmlFor="" className='text-sm'>Link Google Maps</label>
                    <input onChange={(e) => setMaps(e.target.value)} className='text-xs w-full h-10 text-gray-700 border border-gray-300 rounded p-2 placeholder:text-xs placeholder:text-gray-500 disabled:bg-gray-200' disabled={editForm} placeholder='Masukkan link' name="maps" id="maps" />
                </div>

                <hr className='my-5' />
                <div className='w-full flex justify-end  gap-5'>
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
                            <button type='submit' className='w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded'>
                                <p className='text-xs md:text-sm text-white flex gap-2 items-center'>
                                    <FaSave className='inline-block' />
                                    Simpan Perubahan
                                </p>
                            </button>
                        </div>
                    )}

                </div>
            </form>
        </div>
    )
}


export default DetailBusiness