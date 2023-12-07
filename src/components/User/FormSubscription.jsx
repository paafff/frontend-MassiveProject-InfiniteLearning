import React, { useEffect, useState } from 'react';
import Header from '../../assets/images/icons/gataunamanya.png';
import axios from 'axios';

const FormSubscription = ({ price }) => {
  const [listBusiness, setListBusiness] = useState([]);

  const [businessUUID, setBusinessUUID] = useState('');

  useEffect(() => {
    const getMyBusiness = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/my-business`);

        setListBusiness(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getMyBusiness();
  }, []);

  const createSubscription = async () => {
    try {
      await axios.patch(
        `${
          import.meta.env.VITE_API_URL
        }/business-subscription/create/${businessUUID}`
      );

      console.log('berhasil melakukan langganan');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div class="p-10 -mt-10 w-full flex flex-col gap-5 md:w-3/4 lg:w-1/2 md:mx-auto">
      <div align="center">
        <h1 class="text-xl font-semibold" align="center">
          Detail Pembayaran!
        </h1>
        <img class="mt-3" src={Header} />
      </div>
      <form>
        <div class="flex flex-row items-center my-6">
          <label class="block text-sm lg:text-base font-semibold leading-6 text-gray-900 basis-1/4">
            {' '}
            Bisnis{' '}
          </label>
          {/* <input autoComplete='off' type='text' name='brand' id='brand' className='border' class='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-3/4' placeholder='Masukkan Brand' /> */}
          <select
            name="business"
            id=""
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm lg:text-base sm:leading-6 basis-3/4"
            onChange={(e) => setBusinessUUID(e.target.value)}
          >
            <option value="">Pilih bisnis anda</option>
            {listBusiness.map((business) => (
              <option value={business.uuid}>{business.name}</option>
            ))}
            {/* <option value="">Barberking</option> */}
          </select>
        </div>
        <div class="flex flex-row items-center my-6">
          <label class="block text-sm lg:text-base font-semibold leading-6 text-gray-900 basis-1/4">
            {' '}
            Durasi{' '}
          </label>
          <input
            autoComplete="off"
            type="text"
            name="price"
            value="12 bulan"
            readOnly
            id="price"
            className="border"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm lg:text-base sm:leading-6 basis-3/4"
            placeholder="Masukkan Price"
          />
        </div>
        <div class="flex flex-row items-center my-6">
          <label class="block text-sm lg:text-base font-semibold leading-6 text-gray-900 basis-1/4">
            {' '}
            Harga{' '}
          </label>
          <input
            autoComplete="off"
            type="text"
            name="price"
            value={price}
            readOnly
            id="price"
            className="border"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm lg:text-base sm:leading-6 basis-3/4"
            placeholder="Masukkan Price"
          />
        </div>
        <hr class="m-5 border-1 border-gray-600" />
        <div className="flex flex-row items-center my-6">
          <label class="block text-sm lg:text-base font-semibold leading-6 text-gray-900 basis-1/4">
            {' '}
            Nominal{' '}
          </label>
          <input
            autoComplete="off"
            type="number"
            name="nominal"
            id="nominal"
            className="border"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm lg:text-base sm:leading-6 basis-3/4"
            placeholder="Rp...."
          />
        </div>
      </form>
      <div className="flex flex-col gap-2">
        <button onClick={createSubscription}>
          <div class="w-full text-center bg-green-600 hover:bg-green-800 text-white hover:cursor-pointer py-2 transition-all px-5 rounded">
            Checkout
          </div>
        </button>
        <div class="w-full text-center bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600 hover:cursor-pointer py-2 transition-all px-5 rounded ">
          Batal
        </div>
      </div>
    </div>
  );
};

export default FormSubscription;
