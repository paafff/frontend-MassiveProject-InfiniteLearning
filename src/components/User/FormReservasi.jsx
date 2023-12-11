import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const FormReservasi = ({ businessId, display, open, handleClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(null);
  const [day, setDay] = useState(null);
  const [phone, setPhone] = useState(null);

  //   hapeeeeeeeeeeeeeeeee
  const createReservation = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reservation`, {
        name: name,
        description: description,
        time: time,
        day: day,
        phone: phone,
        businessId: businessId,
      });

      console.log('berhasil menambah reservasi');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };


  const times = [
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
  ];

  const days = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ]



  return (
    // <div class={`w-1/2 absolute ${display ? "block" : "hidden"} p-20 bg-white border-2 border-gray-500 z-50 top-0 left-auto `}>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div class="grid grid-cols-3 w-3/4 mx-auto">
          <hr class="mt-9 border-1 border-rose-400 shadow" />
          <h1 align="center" class="my-5 text-3xl font-semibold">
            Reservasi
          </h1>
          <hr class="mt-9 border-1 border-rose-400 shadow" />
        </div>
        <form onSubmit={createReservation} className='w-3/4 mx-auto'>
          <div className='flex justify-between gap-5'>

            <div className='w-1/2'>
              <div class="flex items-center">
                <FaAddressBook className='w-5 h-5' />
                <label class="ml-3 font-semibold">Nama</label>
              </div>
              <input
                class="my-4 mb-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan Nama Lengkap Anda"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='w-1/2'>
              <div class="flex items-center">
                <FaPhoneAlt className='w-5 h-5' />
                <label class="ml-3 font-semibold">Nomor Telepon</label>
              </div>
              <input
                class="my-4 mb-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan Nama Lengkap Anda"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <label class="font-semibold">Pilih Jadwal Reservasi</label>
          <div class="flex justify-between my-4 mb-6 gap-10">
            <FaCalendarAlt className=' w-5 h-5 mt-1' />
            <select
              onChange={(e) => setDay(e.target.value)}
              class="w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option selected disabled>
                Pilih hari
              </option>
              <option>Pilih hari</option>
              {days.map(day => (
                <option value={day}>{day}</option>
              ))}
            </select>
            <FaClock className=' w-5 h-5 mt-1' />
            <select
              onChange={(e) => setTime(e.target.value)}
              class="w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option selected disabled>
                Pilih Jam
              </option>
              {times.map(time => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <label>Deskripsi</label>
          <textarea
            rows="6"
            class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
            placeholder="Deskripsi..."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div class="my-20 flex justify-end">
            {/* <div class="mr-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 rounded shadow-lg">
              Cancel
            </div> */}
            <div class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-5 rounded shadow-lg">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
    // </div>
  );
};

export default FormReservasi;
