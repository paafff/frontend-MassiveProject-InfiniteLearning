import React from 'react'
import { PiHandshakeFill } from "react-icons/pi";
import { FaRegFaceFrown } from "react-icons/fa6";

const Header = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className='w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4'>

            <HumbergerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <Top />

        </div>
    )
}

const HumbergerMenu = ({ showSidebar, setShowSidebar }) => {
    return (
        <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className={`w-5 h-5  transition-all text-zinc-900 lg:hidden mb-10 rotate-90 ${showSidebar ? 'ml-80 rotate-180' : 'ml-0'} `}
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

const Top = () => {
    return (
        <div>
            <p className='text-center text-xl lg:text-2xl font-semibold'>Javanese Barbershop</p>
            <hr className='my-5 border-t border-black' />

            <div className='flex flex-col gap-3'>

                <div className='w-full flex gap-3 items-center justify-center'>
                    <div className=' w-1/4 md:w-32 aspect-square drop-shadow bg-white rounded-md flex justify-center items-center'>
                        <p className='text-5xl text-green-600 font-semibold'>17</p>
                    </div>
                    <div className='w-3/4 py-4 px-3 drop-shadow rounded bg-white flex gap-3 justify-center'>
                        <div className='w-1/4 flex justify-center items-center'>
                            <PiHandshakeFill className='text-zinc-800 inline-block scale-[2] md:scale-[2.5]' />
                        </div>
                        <div className='w-3/4 flex justify-center items-center'>
                            <p className='text-sm md:text-base'>Total pesanan diterima</p>
                        </div>
                    </div>

                </div>
                <div className='w-full flex gap-3 items-center justify-center'>
                    <div className=' w-1/4 md:w-32 aspect-square drop-shadow bg-white rounded-md flex justify-center items-center'>
                        <p className='text-5xl text-red-600 font-semibold'>7</p>
                    </div>
                    <div className='w-3/4 py-4 px-3 drop-shadow rounded bg-white flex gap-3 justify-center'>
                        <div className='w-1/4 flex justify-center items-center'>
                            <FaRegFaceFrown className='text-zinc-800 inline-block scale-[2] md:scale-[2.5]' />
                        </div>
                        <div className='w-3/4 flex justify-center items-center'>
                            <p className='text-sm md:text-base'>Total pesanan ditolak</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Header