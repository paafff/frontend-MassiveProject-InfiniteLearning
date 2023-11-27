import React from 'react'
import { Link } from 'react-router-dom'
import BobHair1 from '../assets/images/trend/bobhair1.jpg'
import BobHair2 from '../assets/images/trend/bobhair2.jpg'
import BobHairCarousel from '../assets/images/trend/bobhaircarousel.jpg'
import CommaHair from '../assets/images/trend/commahair.jpg'
import Mullet from '../assets/images/trend/mullet.jpg'
import SoftBangs from '../assets/images/trend/softbangs.jpg'
import FrenchCrop from '../assets/images/trend/frenchcrop.jpg'
import IconHeader from '../assets/images/icons/gataunamanya.png'

// Carousel
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const HairTrend = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row xl:w-3/4 lg:mx-auto'>
            <div className='w-full h-max lg:min-h-screen flex flex-col gap-3 py-7 px-5 md:px-10 xl:px-20 xl:py-14 xl:w-2/3 drop-shadow-md bg-white'>
                <Link className='text-sm font-semibold hover:underline transition-all w-fit'>Back</Link>
                <div className='w-full gap-2 flex flex-col md:flex-row items-center place-content-center my-5'>
                    <img src={BobHair1} className=' rounded-md w-64 h-fit aspect-auto drop-shadow-md' alt="" />
                    <img src={BobHair2} className='rounded-md w-64 h-fit aspect-auto drop-shadow-md' alt="" />
                </div>
                <p className='text-xs'>By : <span className='text-rose-400'> Admin</span>, 2023-08-17 09:30:55 </p>
                <p className='text-2xl font-bold'>Gaya Rambut Bob Hair</p>
                <p className='text-justify my-1 text-sm'>
                    Sudah bosan dengan rambut panjangmu? Mungkin ini saatnya kamu mencoba tampilan baru dengan model rambut pendek Korea yang sedang nge-trend ini, Ladies.

                    Rambut bob umumnya dipotong segaris dengan rahang di atasnya dan memiliki layer di bawahnya untuk menambah kesan rambut yang lebih bervolume. Song Hye Kyo ternyata pernah punya rambut pendek model bob ini, lho. Model rambut pendek ini membuat Song Hye Kyo yang usianya sudah hampir 40 tahun tampak lebih cantik dan awet muda.
                </p>
                <div className='w-full flex justify-end'>
                    <p className='text-gray-500'>Lihat selengkapnya </p>
                </div>
            </div>
            <div className='w-full h-fit bg-gray-200 lg:w-1/3 flex flex-col lg:items-center py-10 px-5'>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <p className='text-2xl font-bold'>Trend Lainnya</p>
                    <img src={IconHeader} className='' alt="" />
                </div>
                <div className='w-full my-8'>
                    {/* <CarouselTrend /> */}
                    <Overflow />
                </div>
            </div>
        </div>
    )
}


const Overflow = (props) => {
    var items = [
        {
            name: "Comma Hair",
            model: CommaHair
        },
        {
            name: "Bob Hair",
            model: BobHairCarousel
        },
        {
            name: "Mullet",
            model: Mullet
        },
        {
            name: "Soft Bangs",
            model: SoftBangs
        },
        {
            name: "French Crop",
            model: FrenchCrop
        },
    ]
    return (
        <div className='w-full lg:h-[800px] flex lg:flex-col lg:justify-center gap-5 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto px-16 lg:px-0 lg:pt-96'>
            {items.map(item => (
                <Link className='mx-auto w-52 h-52 flex items-end justify-center p-3 rounded shadow-sm object-fill bg-no-repeat' style={{ backgroundImage: `url(${item.model})` }}>
                    <div className='w-52 lg:h-52 flex justify-center items-end'>
                        <p className='w-fit h-fit px-2 py-1 bg-white rounded text-sm font-semibold'>{item.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HairTrend


// const CarouselTrend = (props) => {
//     var items = [
//         {
//             name: "Comma Hair",
//             model: CommaHair
//         },
//         {
//             name: "Bob Hair",
//             model: BobHairCarousel
//         },
//         {
//             name: "Mullet",
//             model: Mullet
//         },
//         {
//             name: "Soft Bangs",
//             model: SoftBangs
//         },
//         {
//             name: "French Crop",
//             model: FrenchCrop
//         },
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map((item, i) => (
//                     <>
//                         <Item key={i} item={item} />
//                     </>
//                 ))
//             }
//         </Carousel>
//     )
// }

// const Item = (props) => {
//     return (
//         <Paper className='flex items-center justify-evenly py-2 md:w-3/4 md:mx-auto'>

//             <div className='w-52 h-52 flex items-end justify-center p-3 rounded shadow-sm object-cover bg-no-repeat' style={{ backgroundImage: `url(${props.item.model})` }}>
//                 <p className='px-2 py-1 bg-white rounded text-sm font-semibold'>{props.item.name}</p>
//             </div>

//         </Paper>
//     )
// }