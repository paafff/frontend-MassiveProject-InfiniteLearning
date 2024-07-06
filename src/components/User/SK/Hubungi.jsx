import React, { useEffect, useState } from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'
import { FaWhatsapp } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import phoneAdmin from '../../../data/phoneAdmin';

const Hubungi = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white flex flex-col gap-10 w-full rounded-md lg:p-8 p-5 drop-shadow-md'>

                    <Heading />
                    <Card />
                    {/* <Foots /> */}
                </div>

            </div>
        </>
    )
}

const Heading = () => {
    return (
        <div className='flex flex-col gap-2 text-zinc-900'>
            <p className='text-xl font-black'>Hubungi CS HairHub</p>
            <p className='text-base font-medium'>Silahkan pilih metode yang Anda perlukan</p>
        </div>
    )
}

const Card = () => {
    const [selectedAdmin, setSelectedAdmin] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const array = [0, 1, 2, 3, 4, 5, 6]
        const randomIndex = Math.floor(Math.random() * array.length)
        setSelectedIndex(array[randomIndex])
        setSelectedAdmin(phoneAdmin[selectedIndex])

        console.log("phone admin ", selectedAdmin);
    }, [selectedAdmin])

    const handleWA = () => {
        setSelectedAdmin(phoneAdmin[selectedIndex])
        const url = `https://wa.me/${selectedAdmin?.number}`
        window.open(url)
    }
    return (
        <div className='flex flex-col md:flex-row xl:max-w-lg gap-5 md:gap-3'>
            <div onClick={handleWA} className='w-full flex flex-col  drop-shadow-md bg-white p-5 md:p-8 rounded-md border border-slate-200 text-zinc-900'>
                <FaWhatsapp className='scale-[2.5] mt-5 mb-10 ml-5' />
                <p className='font-bold text-lg'>Whatsapp</p>
                <p className='my-1 text-sm '>Hubungi customer service lewat WhatsApp Anda (chat only).</p>
            </div>
            {/* <div className='w-full flex flex-col  drop-shadow-md bg-white p-5 md:p-8 rounded-md border border-slate-200 text-zinc-900'>
                <BsChatLeftText className='scale-[2.5] mt-5 mb-10 ml-5' />
                <p className='font-bold text-lg'>Whatsapp</p>
                <p className='my-1 text-sm '>Langsung chat disini dengan customer service kami.</p>
            </div> */}
        </div>
    )
}

const Foots = () => {
    return (
        <div className='w-full flex flex-col bg-white p-3 rounded-md text-zinc-900'>
            <p className='font-normal text-base'>Layanan pengaduan konsumen CS HairHub</p>
            <p className='my-1 text-base flex gap-3 items-center'>
                <FaWhatsapp className='inline-block scale-150' />
                WhatsApp: -
            </p>
        </div>
    )
}

export default Hubungi