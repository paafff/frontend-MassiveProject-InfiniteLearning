import React from 'react';
import Layout from '../Layout';
import { useState } from 'react';

const BusinessRegistration = () => {
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [brandName, setBrandName] = useState("");

    const handleClick = (e) => {

        console.log('fullname');
        console.log('gender');
        console.log('brandName')
    }

    return (
        <Layout>
            <div className='my-32'>
                <h1 align='center' class='text-3xl font-semibold pt-10'>Form Pengajuan Usaha</h1>
                <hr class='mx-auto mt-2 mb-20 max-w-sm border-2 border-dashed border-rose-400' />
                <form className='' onSubmit={() => handleClick()}>
                    <div class='mx-20 xl:w-1/2 xl:mx-auto'>
                        <h4 class='text-lg font-semibold'>Data Pemilik Usaha</h4>
                        <hr class='mx-auto border-2 border-rose-400 shadow' />
                        <div class='flex flex-row my-6'>
                            <div class='basis-1/3'>
                                <label class='block text-sm font-medium leading-6 text-gray-900 md:text-left'> Nama Pemilik Usaha</label>
                            </div>
                            <div class='basis-2/3'>
                                <input autoComplete={false} type='text' name='fullname' id='fullname' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='Nama Pemilik Usaha' required />
                            </div>
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Jenis Kelamin</label>
                            <input type='radio' name='gender' id='male' value={'male'} className='border' required />
                            <label class='ml-2'>Pria</label>
                            <input type='radio' name='gender' id='female' value={'female'} className='border ml-12' required />
                            <label class='ml-2'>Wanita</label>
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Email</label>
                            <input autoComplete='off' type='email' name='email' id='email' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Email Anda' />
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>No Telepon</label>
                            <input autoComplete='off' type='text' name='phoneNumber' id='phoneNumber' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='No. Telepon Anda' />
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>No Identitas</label>
                            <input autoComplete='off' type='text' name='identityNumber' id='identityNumber' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Nomor Identitas Anda' />
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Alamat</label>
                            <div class='basis-2/3 flex flex-wrap'>
                                <select class='mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                    <option selected disabled class='text-grey-400'>Provinsi</option>
                                    <option>Jawa Barat</option>
                                </select>
                                <select class='mr-5 w-62 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kabupaten/Kota
                                    <option selected disabled>Kabupaten/Kota</option>
                                </select>
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' data-te-select-placeholder="Example placeholder"> Kecamatan
                                    <option selected disabled>Kecamatan</option>
                                </select>
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kelurahan
                                    <option selected disabled>Kelurahan</option>
                                </select>
                                <input type='text' class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='RT/RW' />
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kode Pos
                                    <option selected disabled>Kode Pos</option>
                                </select>
                            </div>
                        </div>
                        <h4 class='text-lg font-semibold mt-10'>Detail Usaha</h4>
                        <hr class='mx-auto border-2 border-rose-400 shadow' />
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Judul Brand</label>
                            <input type='text' name='brandName' id='brandName' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Nama Brand Anda' />
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Lokasi</label>
                            <div class='basis-2/3 flex flex-wrap'>
                                <select class='mr-5 w-60 px-2 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='Provinsi'> Provinsi
                                    <option selected disabled>Provinsi</option>
                                    <option>Jawa Barat</option>
                                </select>
                                <select class='mr-5 w-62 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kabupaten/Kota
                                    <option selected disabled>Kabupaten/Kota</option>
                                </select>
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' data-te-select-placeholder="Example placeholder"> Kecamatan
                                    <option selected disabled>Kecamatan</option>
                                </select>
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kelurahan
                                    <option selected disabled>Kelurahan</option>
                                </select>
                                <input type='text' class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='RT/RW' />
                                <select class='mr-5 w-60 px-3 mb-6 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'> Kode Pos
                                    <option selected disabled>Kode Pos</option>
                                </select>
                            </div>
                        </div>
                        {/* <div class='flex flex-row my-6'>
                        <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Banner</label>
                        <input type='file' name='banner' id='banner' className='border basis-2/3' />
                    </div>
                    <div class='flex flex-row my-6'>
                        <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Foto</label>
                        <input type='file' name='brandPhoto' id='brandPhoto' className='border basis-2/3' />
                    </div> */}
                        <div class='flex flex-row my-6'>
                            <label class='basis-1/3'>Deskripsi Usaha</label>
                            <textarea rows='6' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3'></textarea>
                        </div>
                    </div>
                    <div class='columns-2 mt-20'>
                        <img src='src/assets/images/image.png' class='mb-5' />
                        <div class='ml-20 justify-end'>
                            <input class='ml-4' type='checkbox' required />
                            <label class='ml-2'>Saya bersedia bekerjasama dengan website ini</label>
                            <br />
                            <button type='submit' class='mt-5 ml-80 bg-rose-400 hover:bg-rose-600 transition-all text-white font-bold py-2 px-5 rounded shadow-lg' onSubmit={() => handleClick()}>Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default BusinessRegistration;
