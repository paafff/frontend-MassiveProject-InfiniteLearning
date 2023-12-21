import React from 'react'
import Hamburger from '../../../pages/User/SK/Hamburger'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Penalti = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <Hamburger showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='w-full px-5 lg:py-5'>

                <div className='bg-white w-full rounded-md lg:p-8 p-5 drop-shadow-md'>

                    <Penalty />

                    <Accord />

                </div>

            </div>
        </>
    )
}

const Penalty = () => {
    return (
        <div className='mb-8'>
            <p className='text-base md:text-xl font-semibold'>Kebijakan Penalti Pengguna</p>

            <hr className='my-5' />
            <p className='text-sm py-2'>Kebijakan Penalti Pengguna merupakan kebijakan penerapan Penalti dalam bentuk tertentu yang diberlakukan atas tindakan-tindakan pelanggaran tertentu yang dilakukan oleh Pengguna dalam menggunakan situs web (website) HairHub . Kebijakan mengenai tindakan Penalti dan Penalti Pengguna tunduk pada Syarat dan Ketentuan Umum Platform HairHub (S&K), Syarat dan Ketentuan Turunan (S&K Turunan), Kebijakan Privasi, dan Kebijakan Penalti yang tertulis dibawah ini. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna secara hukum.</p>
            <p className='text-sm py-2'>Dengan mengunjungi, menggunakan, mengakses dan mendaftarkan diri Pengguna pada website Hairhub yang dimiliki dan dioperasikan oleh HairHub dan afiliasinya (selanjutnya disebut, “Kami”), Pengguna dianggap telah membaca, mengerti, memahami dan menyetujui seluruh isi yang tertuang dalam Kebijakan Penalti ini yang merupakan satu kesatuan dan bagian yang tidak terpisahkan dari S&K Platform dan Kebijakan Privasi. Jika Pengguna tidak setuju untuk terikat dengan Kebijakan Penalti ini maka Pengguna tidak diperkenankan untuk mengakses dan/atau menggunakan platform Kami. Kebijakan Penalti ini merupakan bentuk Perjanjian yang sah dan mengikat antara Pengguna dengan Kami.</p>
        </div>

    )
}

const Accord = () => {
    return (
        <div>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 1. Ruang Lingkup
                    <MdKeyboardArrowDown className='inline-block scale-150 mr-5 items-end' />
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
            <Accordion className='py-5' >
                <AccordionSummary className='px-5 font-semibold'> 2. Ketentuan Penalti
                    <MdKeyboardArrowDown className='inline-block scale-150 items-end' />
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Penalti