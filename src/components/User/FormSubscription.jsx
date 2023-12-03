import React from 'react'

const FormSubscription = () => {
    return (
        <div class='p-2 m-10'>
            <div align='center'>
                <h1 class='text-xl font-semibold' align='center'>Lakukan Pembayaran!</h1>
                <img class='mt-3' src='/src/assets/images/icons/diamondLine.png' />
            </div>
            <div>
                <form>
                    <div class='flex flex-row my-6'>
                        <label class='block text-sm font-xl leading-6 text-gray-900 basis-1/4'> Nama :</label>
                        <input autoComplete='off' type='text' name='name' id='name' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-3/4' placeholder='Masukkan Nama' />
                    </div>
                    <div class='flex flex-row my-6'>
                        <label class='block text-sm font-xl leading-6 text-gray-900 basis-1/4'> Brand :</label>
                        <input autoComplete='off' type='text' name='brand' id='brand' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-3/4' placeholder='Masukkan Brand' />
                    </div>
                    <div class='flex flex-row my-6'>
                        <label class='block text-sm font-xl leading-6 text-gray-900 basis-1/4'> Price :</label>
                        <input autoComplete='off' type='text' name='price' id='price' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-3/4' placeholder='Masukkan Price' />
                    </div>
                    <hr class='m-5 border-2 border-black'/>
                    <div>
                        <label class='block text-sm font-xl leading-6 text-gray-900 basis-1/4'> Nominal :</label>
                        <input autoComplete='off' type='text' name='nominal' id='nominal' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-3/4' placeholder='Rp....' />
                    </div>

                </form>
                <button class='mt-5 w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded shadow-lg'>Selesai</button>
            </div>
        </div>
    )
}

export default FormSubscription