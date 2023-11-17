import React, { useState, useEffect } from 'react'
import Layout from '../../../pages/Layout'
import { FaRegCopy, FaSave, FaUserCircle } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import axios from 'axios';

const BasicInformation = ({ showSidebar, setShowSidebar }) => {

    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>

            <HumbergerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            <div className='flex gap-3 mb-5 justify-between md:justify-start'>
                <p className='text-xl md:text-2xl font-bold tracking-normal'>Barberking Barbershop</p>
                <p className='text-xs bg-zinc-950 h-fit py-1 px-3 text-white rounded'>Barbershop</p>
            </div>

            <Form />

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

const Form = () => {

    const [editForm, setEditForm] = useState(true);
    console.log(editForm);

    const [allProvinsi, setAllProvinsi] = useState([]);
    const [allKota, setAllKota] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.binderbyte.com/wilayah/provinsi?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1',
                    { withCredentials: false }
                );
                setAllProvinsi(response.data.value);
                console.log("Fetch prov: ", allProvinsi);
            } catch (error) {
                console.error('Error fetching prov:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // The empty dependency array means this effect runs once after the initial render

    const fetchKota = async () => {
        try {
            const response = await axios.get(
                'https://api.binderbyte.com/wilayah/kabupaten?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1',
                { withCredentials: false }
            );
            setAllKota(response.data);
            console.log(allKota);
        } catch (error) {
            console.error('Error fetching kota:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>
            <p className='text-base md:text-lg font-semibold'>Informasi dasar</p>

            <hr className='my-5' />

            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 xl:flex-row xl:justify-start'>
                    <div className='flex flex-col gap-4 xl:w-1/2'>
                        <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                            <label htmlFor="" className='text-sm'>Nama Usaha</label>
                            <input disabled={editForm} type="text" name="nama" id="nama" placeholder='Tuliskan brand usahamu' className='w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                        </div>
                        <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                            <label htmlFor="" className='text-sm'>Email</label>
                            <input disabled={editForm} type="email" name="email" id="email" placeholder='Email' className='w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                        </div>
                        <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                            <label htmlFor="" className='text-sm'>Telepon</label>
                            <input disabled={editForm} type="number" name="telepon" id="telepon" placeholder='Telepon' className='w-full md:w-3/4 xl:w-3/4 border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:items-start md:justify-between xl:w-1/2'>
                        <label htmlFor="" className='text-sm'>Lokasi</label>

                        <div className='flex flex-col gap-4 md:p-0 md:w-3/4'>
                            <select disabled={editForm} name="provinsi" id="provinsi" className='w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200'>
                                <option value="" className=''>Pilih Provinsi</option>
                                {allProvinsi.map(provinsi => (
                                    <option value={provinsi.id} key={provinsi.id} className=''>{provinsi.name}</option>
                                ))}
                            </select>

                            <select disabled={editForm} name="kota" id="kota" className='w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200'>
                                <option value="" className=''>Pilih Kota / Kabupaten</option>
                            </select>

                            <select disabled={editForm} name="kecamatan" id="kecamatan" className='w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200'>
                                <option value="" className=''>Pilih Kecamatan</option>
                            </select>

                            <select disabled={editForm} name="kelurahan" id="kelurahan" className='w-full border border-gray-400 rounded-md h-10 text-sm px-2 disabled:bg-gray-200'>
                                <option value="" className=''>Pilih Kelurahan</option>
                            </select>
                        </div>

                    </div>
                </div>
                <hr className='mt-5' />
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

export default BasicInformation