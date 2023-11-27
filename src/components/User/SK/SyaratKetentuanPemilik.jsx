import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const SyaratKetentuanPemilik = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <Owner />

                    <Accord />

                </div>

            </div>
        </>
    )
}

const Owner = () => {
    return (
        <div className='mb-8'>
        <p className='text-base md:text-xl font-semibold'>Syarat dan Ketentuan Layanan Pemilik Bisnis</p>

        <hr className='my-5' />
        <p className='text-sm py-2'>Syarat dan Ketentuan Layanan Pemilik (“S&K Turunan”) ini berisikan segala ketentuan sehubungan dengan penggunaan dan berlakunya layanan Pemilik sebagaimana didefinisikan dibawah ini dan merupakan bentuk Promosi Kami sebagaimana dimaksud pada S&K Umum.</p>
        <p className='text-sm py-2'>Kami menyarankan Pemilik sebagai pemilik atau owner (selanjutnya disebut “Pemilik”) untuk membaca S&K Turunan ini secara berkala bersama dengan S&K Umum, Kebijakan Privasi, dan Kebijakan Penalti Pengguna maupun syarat ketentuan lainnya yang mungkin berkaitan dan disebut disini yang merupakan bagian yang tidak terpisahkan dari S&K Turunan.</p>
        </div>
        
    )
}

const Accord = () => {
    return (
        <div>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 1. Definisi
                <MdKeyboardArrowDown className='inline-block scale-150 mr-5 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 2. HairHub Prime
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 3. Harga Eksklusif
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 4. Hak Kami
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 5. Penghentian, Pelanggaran, dan Sanksi 
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 6. Pembaharuan
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 7. Lain-lain
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default SyaratKetentuanPemilik