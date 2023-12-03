import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Privasi = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 drop-shadow-md'>

                    <Private />

                    <Accord />

                </div>

            </div>
        </>
    )
}

const Private = () => {
    return (
        <div className='mb-8'>
        <p className='text-base md:text-xl font-semibold'>Kebijakan Privasi HairHub</p>

        <hr className='my-5' />
        <p className='text-sm py-2'> Halo, terima kasih telah mengunjungi situs web (website) HairHub .</p>
        <p className='text-sm py-2'>Platform ini dimiliki dan dioperasikan oleh HairHub dan afiliasinya (selanjutnya disebut, “Kami”). Kami sangat menghormati privasi atas Informasi Pribadi pendatang, pengguna, ataupun pengguna terdaftar (selanjutnya disebut “Anda”) dan ingin melindungi Informasi Pribadi tersebut sesuai dengan Kebijakan Privasi (selanjutnya disebut “Kebijakan”) ini.</p>
        <p className='text-sm'>Kebijakan ini berlaku pada setiap platform yang dioperasikan oleh Kami. Kebijakan ini menjelaskan bagaimana Kami mengumpulkan, menyimpan, menjaga, menggunakan dan (pada kondisi tertentu) mengungkapkan informasi pribadi yang teridentifikasi yang Anda berikan selama menggunakan platform Kami (selanjutnya disebut “Informasi Pribadi”) serta menjelaskan bagaimana langkah yang telah Kami ambil untuk mengamankan Informasi Pribadi Anda. Dengan mengunjungi, menggunakan dan/atau mendaftarkan diri Anda pada platform Kami, maka Anda dianggap telah membaca, mengerti, memahami dan menyetujui seluruh isi yang tertuang dalam kebijakan ini. Apabila Anda tidak setuju dengan sebagian atau seluruh isi Kebijakan ini, Anda dapat meninggalkan platform yang Kami kelola.</p>
        </div>
        
    )
}

const Accord = () => {
    return (
        <div>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 1. Informasi Pribadi
                <MdKeyboardArrowDown className='inline-block scale-150 mr-5 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 2. Informasi Pribadi yang Terkumpul, Simpan, Jaga, dan Gunakan
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 3. Pembagian Informasi Pribadi
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 4. Persetujuan dan Penarikan Persetujuan
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 5. Penyimpanan dan Penghapusan Informasi Pribadi 
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 6. Pembaharuan dan Persetujuan Kebijakan Privasi
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 7. Pihak Ketiga
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 8. Kontak Kami
                <MdKeyboardArrowDown className='inline-block scale-150 items-end' />                      
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Privasi