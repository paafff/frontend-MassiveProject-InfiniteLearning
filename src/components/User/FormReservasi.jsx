import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  // width: '100vw',
  transform: 'translate(-50%, -50%)',
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

      handleClose();

      Swal.fire('Reservasi berhasil', '', 'success');
    } catch (error) {
      //dibawah ini opsi tampilkan error
      if (error.response) {
        handleClose();
        Swal.fire(error.response.data.msg, '', 'error');
        // alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
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

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

  return (
    // <div class={`w-1/2 absolute ${display ? "block" : "hidden"} p-20 bg-white border-2 border-gray-500 z-50 top-0 left-auto `}>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className="w-full xl:w-1/2 md:w-3/4 md:h-[90%] xl:h-[75%] scale-50"
      >
        <div className="w-full  ">
          <div className="w-full flex justify-end">
            <p
              onClick={handleClose}
              className="text-lg font-bold hover:cursor-pointer hover:bg-zinc-800 hover:text-white transition-all px-3 rounded"
            >
              X
            </p>
          </div>

          <div class="grid grid-cols-3 w-full lg:w-3/4 mx-auto">
            <hr class="mt-9 border-1 border-rose-400 shadow" />
            <p align="center" class="my-5 text-lg lg:text-2xl font-semibold">
              Reservasi
            </p>
            <hr class="mt-9 border-1 border-rose-400 shadow" />
          </div>
          <form
            onSubmit={createReservation}
            className="w-full lg:w-3/4 mt-10 mx-auto"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="w-full lg:w-1/2">
                <div class="flex items-center">
                  <FaAddressBook className="w-5 h-5" />
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

              <div className="w-full lg:w-1/2">
                <div class="flex items-center">
                  <FaPhoneAlt className="w-5 h-5" />
                  <label class="ml-3 font-semibold">Nomor Telepon</label>
                </div>
                <input
                  class="appearance-none my-4 mb-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="number"
                  name="name"
                  id="name"
                  placeholder="Masukkan Nomor Telepon Anda"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <label class="font-semibold">Pilih Jadwal Reservasi</label>
            <div class="flex flex-col xl:flex-row justify-between my-4 mb-6 gap-10">
              <div className="flex gap-5">
                <FaCalendarAlt className=" w-5 h-5 mt-1" />
                <select
                  onChange={(e) => setDay(e.target.value)}
                  class="w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option selected disabled>
                    Pilih hari
                  </option>
                  {days.map((day) => (
                    <option value={day}>{day}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-5">
                <FaClock className=" w-5 h-5 mt-1" />
                <select
                  onChange={(e) => setTime(e.target.value)}
                  class="w-60 px-2 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option selected disabled>
                    Pilih Jam
                  </option>
                  {times.map((time) => (
                    <option value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            <label>Deskripsi</label>
            <textarea
              rows="6"
              class="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 basis-2/3"
              placeholder="Deskripsi..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div class="mt-5 flex justify-end">
              {/* <div class="mr-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-5 rounded shadow-lg">
              Cancel
            </div> */}
              <button
                type="submit"
                class="bg-green-600 hover:bg-green-800 transition-all text-white font-bold py-2 px-5 rounded shadow-lg"
              >
                <p>Submit</p>
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
    // </div>
  );
};

export default FormReservasi;
