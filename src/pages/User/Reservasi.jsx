import React from "react";
import Layout from "../Layout";

const Reservasi = () => {
    return (
        <Layout>
            <div>
                <div>
                    <img src='/src/assets/images/dmozeSalon/dmoze4.png' />
                </div>
                <div class='grid grid-cols-2'>
                    <div class='mx-5 mt-5'>
                        <img class='mb-2' src='/src/assets/images/dmozeSalon/dmoze1.png' />
                        <div class='flex flex-row'>
                            <img class='mr-1 w-1/2' src='/src/assets/images/dmozeSalon/dmoze2.png' />
                            <img class='w-1/2' src='/src/assets/images/dmozeSalon/dmoze3.png' />
                        </div>
                    </div>
                    <div class='mx-10'>
                        <div class=' grid grid-cols-3'>
                            <hr class='mt-9 border-1 border-rose-400 shadow' />
                            <h1 align='center' class='my-5 text-3xl font-semibold'>Reservasi</h1>
                            <hr class='mt-9 border-1 border-rose-400 shadow' />
                        </div>
                        <form>
                            <div>
                                <div class='flex flex-row'>
                                    <img src='/src/assets/images/icons/AddressBook.png' />
                                    <label class='ml-3 font-semibold'>Nama</label>
                                </div>
                                <input class='my-4 mb-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type='text' name="name" id='name' placeholder="Masukkan Nama Lengkap Anda" required />
                            </div>
                            <label class='font-semibold'>Pilih Jadwal Reservasi</label>
                            <div class='flex flex-row my-4 mb-6'>
                                <img class='mr-auto w-7 h-7 mt-1' src='/src/assets/images/icons/CalendarCheck.png' />
                                <select class='w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                    <option selected disabled>Pilih hari</option>
                                    <option>Senin</option>
                                </select>
                                <img class='mx-auto w-7 h-7 mt-1' src='/src/assets/images/icons/ClockCountdown.png' />
                                <select class='w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                    <option selected disabled>Pilih Jam</option>
                                    <option>08.00 - 09.00</option>
                                </select>
                            </div>
                            <label >Deskripsi</label>
                            <textarea rows='6' class='mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Deskripsi...'></textarea>
                            <div class='my-20 flex justify-end'>
                                <button class='mr-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 rounded shadow-lg'>Cancel</button>
                                <button class='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded shadow-lg'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </Layout>
    );
};

export default Reservasi;