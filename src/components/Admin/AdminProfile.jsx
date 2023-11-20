import React from 'react';

const AdminProfile = () => {
    return (
        <div class='grid grid-cols-5'>
            <div class='mt-10 col-span-2'>
                <p class='mb-5 text-2xl font-bold'>Hello, Ilham Soejud Alkahfiandry</p>
                <form>
                    <div>
                        <label class='font-semibold'>Foto Profil</label>
                        <br />
                        <input class='mt-2 border w-full' type='file' name='profilePhoto' id='profilePhoto' />
                    </div>
                    <hr class='mt-3' />
                    <br />
                    <label class='font-semibold'>Username</label>
                    <br />
                    <input type='text' name='username' id='username' class='w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='alkahfiardy' required />
                    <br />
                    <label class='font-semibold'>Email</label>
                    <br />
                    <input type='email' name='email' id='email' class='w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder='alkahfiardy@gmail.out.com' required />
                    <br />
                    <label class='font-semibold'>Password</label>
                    <br />
                    <input type='password' name='password' id='password' class='w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                    <br />
                    <div class='flex justify-start mt-5 mb-20'>
                        <button onClick={() => handleClick()} class='mr-3 text-xs bg-black hover:bg-grey-600 text-white font-semibold py-2 px-5 rounded shadow-lg flex flex-row'>
                            <img class='w-4 h-4 mr-2' src='/src/assets/images/icons/Edit.png' />
                            Ubah Akun
                        </button>
                        <button onClick={() => handleClick()} class='text-xs bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded shadow-lg flex flex-row'>
                            <img class='w-4 h-4 mr-2' src='/src/assets/images/icons/Vector.png' />
                            Simpan Perubahan
                        </button>
                    </div>
                </form>
            </div>
            <div align='center' class='md:items-center col-span-2 rounded overflow-hidden bg-grey-400 mx-5 my-5 w-2/3 h-2/4 border-2'>
                <img class='mt-5' src='/src/assets/images/profiles/avatar.png' />
                <h4 class='mt-12 font-semibold'>Ilham Soejud A</h4>
                <h4 class='text-gray-400'>@alkahfiardy</h4>
                <div class='mt-5 flex flex-row items-center'>
                    <img src='/src/assets/images/icons/share.png' />
                    <img class='mx-3' src='/src/assets/images/icons/copy.png' />
                    <img src='/src/assets/images/icons/delete.png' />
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;