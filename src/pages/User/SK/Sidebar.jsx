import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePolicy } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const style = {
    backgroundColor: "#fb7185"
}

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className={`flex z-10 flex-col bg-white w-80 lg:w-96 min-h-screen drop-shadow-md absolute lg:static transition-all ${showSidebar ? "left-0" : "left-[-320px]"}`}>

            <InfoUmum />

            <KebijakanHairHub />

            <SyaratKetentuan />

            <PanduanKeamanan />

            <HubungiHairHub />
        </div>
    )
}


const InfoUmum = () => {
    return (
        <Accordion className='py-5' >
            <AccordionSummary
                expandIcon={<FaAngleRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='px-5 '>
                    <IoIosInformationCircleOutline className='inline-block scale-150 mr-5' />
                    Info Umum
                </Typography>
            </AccordionSummary>
            <AccordionDetails className=''>
                <Link className='px-5' to="/basic-information">
                    Info Umum
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/search-barber">
                    Cari Barbershop / Salon
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/collaboration">
                    Bekerjasama HairHub
                </Link>
            </AccordionDetails>
        </Accordion>
    )
}

const KebijakanHairHub = () => {
    return (
        <Accordion className='py-5'>
            <AccordionSummary
                expandIcon={<FaAngleRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='px-5 '>
                    <MdOutlinePolicy className='inline-block scale-150 mr-5' />
                    Kebijakan HairHub
                </Typography>
            </AccordionSummary>
            <AccordionDetails className=''>
                <Link className='px-5' to="/policy">
                    Kebijakan HairHub
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/privacy">
                    Kebijakan Privasi
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/penalty">
                    Kebijakan Penalti
                </Link>
            </AccordionDetails>
        </Accordion>
    )
}

const SyaratKetentuan = () => {
    return (
        <Accordion className='py-5'>
            <AccordionSummary
                expandIcon={<FaAngleRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='px-5 '>
                    <IoDocumentTextOutline className='inline-block scale-150 mr-5' />
                    Syarat dan Ketentuan
                </Typography>
            </AccordionSummary>
            <AccordionDetails className=''>
                <Link className='px-5' to="/term">
                    Syarat dan Ketentuan
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/term-owner">
                    Pemilik
                </Link>
            </AccordionDetails>
            <AccordionDetails className=''>
                <Link className='px-5' to="/term-searcher">
                    Pencari
                </Link>
            </AccordionDetails>
        </Accordion>
    )
}

const PanduanKeamanan = () => {
    return (
        <Accordion className='py-5'>
            <AccordionSummary
                // expandIcon={<FaAngleRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='px-5 '>
                    <BsJournalBookmark className='inline-block scale-150 mr-5' />
                    <Link to="/guide">
                        Panduan Keamanan
                    </Link>
                </Typography>
            </AccordionSummary>
        </Accordion>
    )
}

const HubungiHairHub = () => {
    return (
        <Accordion className='py-5 bg-black'>
            <AccordionSummary
                // expandIcon={<FaAngleRight />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='px-5 '>
                    <TfiHeadphoneAlt className='inline-block scale-150 mr-5' />
                    <Link to="/call-center">
                        Hubungi HairHub
                    </Link>
                </Typography>
            </AccordionSummary>
        </Accordion>
    )
}


export default Sidebar