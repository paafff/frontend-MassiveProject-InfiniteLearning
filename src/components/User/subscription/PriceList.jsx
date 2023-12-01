import React from 'react'
import { FaCheck } from "react-icons/fa6";

// const dataPriceList = [
//     {
//         textColor: "text-zinc-900",
//         bgColor: "bg-zinc-900",
//         borderColor: "border-zinc-900",
//         title: "Paket Basic",
//         price: 120000,
//         text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
//         services: [
//             "Penampilan profile bisnis dasar",
//             "Bagikan 10 foto hasil potongan",
//             "Informasi jam operasional bisnis",
//             "Kontak langsung melalui tombol kontak",
//             "Waktu respon dukungan 24 jam",
//         ]
//     },
//     {
//         textColor: "text-rose-400",
//         bgColor: "bg-rose-400",
//         borderColor: "border-rose-400",
//         title: "Paket Premium",
//         price: 240000,
//         text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
//         services: [
//             "Semua fitur paket basic",
//             "Informasi layanan lengkap",
//             "Bagikan 20 foto hasil potongan rambut",
//             "Pelanggan dapat memberikan ulasan",
//             "Waktu respon dukungan 24 jam",
//         ]
//     },
//     {
//         textColor: "text-amber-500",
//         bgColor: "bg-amber-500",
//         borderColor: "border-amber-500",
//         title: "Paket Bisnis",
//         price: 360000,
//         text: "Hal-hal penting untuk memberikan karya terbaik Anda kepada klien.",
//         services: [
//             "Semua fitur paket premium",
//             "Analisis kinerja",
//             "Fitur reservasi atau booking",
//             "Peringkat visibilitas pencarian",
//             "Dukungan prioritas pelanggan",
//         ]
//     },
// ]

const PriceList = ({ textColor, title, borderColor, price, text, services, bgColor }) => {

    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR', // Change this to your desired currency code
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className={`m-3 min-w-[384px] xl:w-[300px] mx-auto xl:mx-0 h-[582px] flex flex-col justify-between bg-white rounded-2xl p-6 drop-shadow-md  border-2 ${borderColor}`}>
            <div className='flex flex-col'>
                <div className='w-full flex justify-start'>
                    <p className={`font-semibold text-base tracking-wide ${textColor}`}>{title}</p>
                </div>
                <div className='w-full flex justify-start my-6 '>

                    <p className='font-bold text-4xl text-zinc-900'>{formattedPrice}</p>
                </div>
                <div className='w-full flex justify-start '>
                    <p className='text-base font-normal text-gray-500 text-justify'> {text}</p>
                </div>
                <div className='w-full flex flex-col justify-start p-5'>
                    {services.map(service => (
                        <div className='flex items-center justify-start my-2'>
                            <FaCheck className={`inline-block me-5 ${textColor} `} />
                            <p className='text-gray-500 text-base'>
                                {service}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-full h-16 flex justify-center items-center rounded-3xl ${bgColor} hover:scale-95 transition-all shadow-lg hover:shadow-none hover:cursor-pointer`}>
                <p className='text-white font-semibold tracking-wider text-lg'>Dapatkan Sekarang</p>
            </div>
        </div>
        // <div className='w-full h-full flex flex-col xl:flex-row gap-10 xl:gap-5'>
        //     {dataPriceList.map(priceList => (
        //         <div className={`m-3 w-96 mx-auto xl:mx-0 h-[582px] flex flex-col justify-between bg-white rounded-2xl p-6 drop-shadow-md  border-2 ${priceList.borderColor}`}>
        //             <div className='flex flex-col'>
        //                 <div className='w-full flex justify-start'>
        //                     <p className={`font-semibold text-base tracking-wide ${priceList.textColor}`}>{priceList.title}</p>
        //                 </div>
        //                 <div className='w-full flex justify-start my-6 '>
        //                     <p className='font-bold text-4xl text-zinc-900'>Rp. {priceList.price}</p>
        //                 </div>
        //                 <div className='w-full flex justify-start '>
        //                     <p className='text-base font-normal text-gray-500 text-justify'> {priceList.text}</p>
        //                 </div>
        //                 <div className='w-full flex flex-col justify-start p-5'>
        //                     {priceList.services.map(service => (
        //                         <div className='flex items-center justify-start my-2'>
        //                             <FaCheck className={`inline-block me-5 ${priceList.textColor} `} />
        //                             <p className='text-gray-500 text-base'>
        //                                 {service}
        //                             </p>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //             <div className={`w-full h-16 flex justify-center items-center rounded-3xl ${priceList.bgColor} hover:scale-95 transition-all shadow-lg hover:shadow-none hover:cursor-pointer`}>
        //                 <p className='text-white font-semibold tracking-wider text-lg'>Dapatkan Sekarang</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    )
}

export default PriceList