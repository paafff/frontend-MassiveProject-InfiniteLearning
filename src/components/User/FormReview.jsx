import React from 'react';

const FormReview = ({ showSidebar, setShowSidebar }) => {
    return (
        <div class='col-span-3'>
            <div class='ml-5 mt-10 mb-2 flex flex-row'>
                <img src='/src/assets/images/icons/UserList.png' />
                <h1 class='ml-5 mt-2 text-xl font-semibold'>Ulasan Review</h1>
            </div>
            <div class="m-5 rounded overflow-hidden shadow-lg bg-grey-400">
                <div class="px-6 py-4">
                    <form>
                        <div class='flex flex-roy my-6'>
                            <label class='w-1/3 block text-sm font-medium leading-6 text-gray-900'>Beri nilai ulasan</label>
                            <select class='w-2/3 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                <option selected disabled>Pilih Nilai Rating</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='block text-sm font-medium leading-6 text-gray-900 basis-1/3'>Foto</label>
                            <input type='file' name='banner' id='banner' className='border basis-2/3' />
                        </div>
                        <div class='flex flex-row my-6'>
                            <label class='basis-1/3'>Ulasan Pengguna</label>
                            <textarea rows='6' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3' placeholder='Deskripsi'></textarea>
                        </div>
                        <div class='flex justify-end mr-10 mt-10'>
                            <button class='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded shadow-lg' onSubmit={() => handleClick()}>Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormReview;