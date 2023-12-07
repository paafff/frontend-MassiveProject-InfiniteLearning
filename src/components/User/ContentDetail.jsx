import React, { useEffect, useState, useRef } from 'react';
import ChatNow from './ChatNow';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sosmed
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbMassage } from 'react-icons/tb';
import { FaScissors } from 'react-icons/fa6';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const ContentDetail = ({ businessByUUID }) => {

  const [services, setServices] = useState([businessByUUID.services]);

  useEffect(() => {
    console.log("all data detail ", businessByUUID);
  }, [businessByUUID]);

  return (
    <div class="flex flex-col gap-10">
      <div class="w-full flex flex-col md:flex-row-reverse md:items-start my-5">
        <div className="w-full xl:w-1/4 flex flex-col items-end gap-5">
          <div className="w-full flex xl:flex-col xl:items-end gap-2">
            <ChatNow />

            <Link
              to="/user/reservasi"
              class="justify-center w-1/2 xl:w-full xl:py-4 xl:px-4 py-3 px-4 gap-2 border border-rose-500 bg-rose-600 hover:bg-white hover:cursor-pointer text-white hover:text-rose-500 font-normal rounded inline-flex items-center transition-all"
            >
              <span class="xl:text-lg text-sm ">Pesan Sekarang</span>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center shadow-md px-3 py-2 rounded-full gap-10">
            <FaInstagramSquare className="hover:cursor-pointer inline-block w-8 h-8 text-rose-400" />

            <FaFacebookSquare className="hover:cursor-pointer inline-block w-8 h-8 text-blue-600" />

            <FaTwitterSquare className="hover:cursor-pointer inline-block w-8 h-8 text-blue-400" />

            <FaYoutube className="hover:cursor-pointer inline-block w-8 h-8 text-rose-600" />
          </div>
        </div>

        <div className="w-full xl:w-3/4 flex flex-col gap-4 my-10 md:my-0">
          <p class="xl:text-2xl text-xl font-bold">{businessByUUID.name}</p>

          <div className="w-full flex gap-5">
            <p class="text-blue-500">Buka</p>
            <div className="flex gap-1">
              <FaLocationDot className="text-rose-400" />
              <p class="">
                {businessByUUID.address ? businessByUUID.address[1] : ''}
              </p>
            </div>
            {/* <div class=" my-auto flex gap-1">
              <FaStar className="w-3 h-3 text-amber-500" />
              <h6 class="ml-1 text-xs">4.8</h6>
            </div> */}
          </div>

          <div class="flex flex-row mt-10">
            <div>
              <h1 class="font-bold text-2xl">
                Dikelola oleh {businessByUUID.userData?.username}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 border-b border-gray-200 py-5">
        <p class="font-bold text-2xl mb-4">Deskripsi Barbershop</p>
        <p className='text-base'>
          {businessByUUID.description ? businessByUUID.description : "belum ada deskripsi"}
        </p>
      </div>

      <div className="w-3/4 border-gray-200 py-5">
        <p class="font-bold text-2xl mb-4">Jenis Layanan</p>
        {/* {businessByUUID.services.length > 0 ? businessByUUID.services?.map((service) => ( */}
        {businessByUUID.services?.map((service) => (
          <>
            <div class="w-full flex flex-col items-center justify-between">
              <div className='w-full flex justify-start mb-4 mt-8'>
                <div className='w-1/2'>
                  <p className='text-base font-bold text-gray-400'>
                    Nama Layanan
                  </p>
                </div>
                <div className='w-1/2'>
                  <p className='text-base font-bold text-gray-400'>
                    Harga
                  </p>
                </div>
              </div>

              <div className='w-full flex flex-col'>


                {service.name.map((serviceName, index) => (
                  <div className='w-full flex justify-start'>
                    <div className='w-1/2'>
                      <p className='text-base py-2 border-b border-gray-400'>
                        {serviceName}
                      </p>
                    </div>
                    <div className='w-1/2'>
                      <p className='text-base py-2 border-b border-gray-400'>

                        {'Rp' + parseInt(service.price[index]).toLocaleString('id-ID')}

                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="w-3/4 border-b border-gray-200 py-5">
        <h1 class="font-bold text-2xl mb-4">Jam Operasional</h1>
        <div class="flex flex-row ml-1 mt-2">
          <img
            class="w-auto h-5 mr-4"
            src="/src/assets/images/icons/Clock.png "
          />
          <h1>Buka / Tutup : {businessByUUID.schedule}</h1>

        </div>
      </div>

      <div className="w-3/4 border-b border-gray-200 py-5">
        <h1 class="font-bold text-2xl">Daftar Karyawan</h1>

        <div className='w-full flex gap-32 mt-8 mb-4'>
          <div className='w-1/3'>
            <p className='text-lg font-bold text-gray-400'>Profil</p>
          </div>
          <div className='w-1/3'>
            <p className='text-lg font-bold text-gray-400'>Nama</p>
          </div>
          <div className='w-1/3'>
            <p className='text-lg font-bold text-gray-400'>Skill</p>
          </div>
        </div>

        {businessByUUID.workers?.map((worker) => (
          <div class="w-full flex gap-32 items-center my-2">
            <div className='w-1/3'>
              <img class="my-1 w-20 rounded-full border-2 border-gray-600" src={worker?.imageURL} />
            </div>
            <div className='w-1/3'>
              <h1>{worker?.name}</h1>
            </div>
            <div className='w-1/3'>
              <h1>{worker?.skill}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="w-3/4 border-b border-gray-200 py-5">
        <h1 class="font-bold text-2xl">Lokasi dan Lingkungan Sekitar</h1>
        <div class="flex flex-row">
          <img
            class="h-4 mt-1 mx-1"
            src="/src/assets/images/icons/Location.png"
          />
          {businessByUUID.address?.map((address) => (
            <h1>{address + ','}</h1>
          ))}
        </div>
      </div>

      <div>
        <h1 class="font-semibold text-lg">4.8 (3 Ulasan)</h1>
        <div class="mt-10 ml-5 flex flex-row">
          <img src="/src/assets/images/icons/AvatarEllipse1.png" />
          <div class="ml-2 flex flex-row gap gap-x-2">
            <div class="ml-1">
              <h4 class="font-semibold">Putri L.</h4>
              <h6 class="text-xs text-gray-500">2 minggu yang lalu</h6>
            </div>
            <div class="border border-rose-400 flex flex-row py-1 px-1 h-6">
              <img class="h-3 mr-1" src="/src/assets/images/icons/Star.png" />
              <h6 class="text-xs">5.0</h6>
            </div>
          </div>
        </div>
        <p class="text-xs ml-20">
          Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang
          keren bangettt
        </p>
        <div class="mt-10 ml-5 flex flex-row">
          <img src="/src/assets/images/icons/AvatarEllipse1.png" />
          <div class="ml-2 flex flex-row gap gap-x-2">
            <div class="ml-1">
              <h4 class="font-semibold">Putri L.</h4>
              <h6 class="text-xs text-gray-500">2 minggu yang lalu</h6>
            </div>
            <div class="border border-rose-400 flex flex-row py-1 px-1 h-6">
              <img class="h-3 mr-1" src="/src/assets/images/icons/Star.png" />
              <h6 class="text-xs">5.0</h6>
            </div>
          </div>
        </div>
        <p class="text-xs ml-20">
          Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang
          keren bangettt
        </p>
        <div class="mt-10 ml-5 flex flex-row">
          <img src="/src/assets/images/icons/AvatarEllipse1.png" />
          <div class="ml-2 flex flex-row gap gap-x-2">
            <div class="ml-1">
              <h4 class="font-semibold">Putri L.</h4>
              <h6 class="text-xs text-gray-500">2 minggu yang lalu</h6>
            </div>
            <div class="border border-rose-400 flex flex-row py-1 px-1 h-6">
              <img class="h-3 mr-1" src="/src/assets/images/icons/Star.png" />
              <h6 class="text-xs">5.0</h6>
            </div>
          </div>
        </div>
        <p class="text-xs ml-20">
          Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang
          keren bangettt
        </p>
      </div>

      <div className="w-3/4">
        <ReviewModal />
      </div>

    </div>
  );
};

const ReviewModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useState for rating
  const [rating, setRating] = useState(0)
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <div className='w-full hover:cursor-pointer hover:bg-rose-500 transition-all shadow drop-shadow bg-rose-400 text-center font-medium py-2 rounded text-white' onClick={handleOpen}>
        <p className="">Beri Ulasan</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title" className='w-full flex justify-end'>
            <p className='px-3 py-2 hover:bg-zinc-800 hover:text-white hover:cursor-pointer transition-all' onClick={handleClose}>
              X
            </p>
          </div>
          <div id="modal-modal-description" className='w-full bg-gray-200 py-4 px-5 shadow-md drop-shadow mt-3'>
            <p className='text-base'>
              Silahkan Beri Ulasan Disini!!
            </p>
          </div>
          <div className='w-full mt-10 flex flex-col items-center justify-center'>
            <div className='w-4/5 flex items-center gap-20 py-5 '>
              <div className='w-1/4'>
                <p className='text-xl font-medium'>Rating Review</p>
              </div>
              <div className='w-3/4 flex justify-evenly'>

                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar
                    key={star}
                    className={`${star == 0 ? "" : "text-gray-200"} ${star <= rating ? "text-amber-400" : "text-gray-200"}  scale-[2.5] transition-all hover:cursor-pointer`}
                    onClick={(e) => handleRatingChange(star)} />
                ))}

              </div>
            </div>
            <div className='w-4/5 flex items-start gap-20 py-5 '>
              <div className='w-1/4'>
                <p className='text-xl font-medium'>Deskripsi Ulasan</p>
              </div>
              <div className='w-3/4'>
                <textarea name="" className='w-full p-4 border border-gray-300 bg-gray-100 rounded-md placeholder:' placeholder='Deskripsi' id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className='w-4/5 flex items-center justify-end gap-5 py-5'>
              <p className='px-4 py-2 transition-all bg-zinc-900 rounded text-white shadow drop-shadow hover:cursor-pointer hover:bg-zinc-800'>Posting</p>
              <p className='px-4 py-2 transition-all bg-green-600 rounded text-white shadow drop-shadow hover:cursor-pointer hover:bg-green-700'>Posting</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

//const ContentDetail = () => {
//     return (
//         <div class='grid grid-cols-3'>
//             <div  class='col-span-2'>
//                 <h1 class='text-3xl font-bold mt-10'>Captain Barbershop</h1>
//                 <div class='flex flex-row mt-2'>
//                     <h6 class='text-teal-500 mr-8'>Buka</h6>
//                     <img class='h-4 mt-1 mr-1' src='/src/assets/images/icons/Location.png' />
//                     <h6 class='mr-8'>Bekasi Kota</h6>
//                     <div class='ml-3 my-auto flex flex-row'>
//                         <img class='h-3' src='/src/assets/images/icons/Star.png' />
//                         <h6 class='ml-1 text-xs'>4.8</h6>
//                     </div>
//                 </div>
//                 <div class='flex flex-row mt-2 ml-40'>
//                     <div class='flex flex-row border border-rose-400 rounded mr-3'>
//                         <img class='h-3 my-auto mx-2' src='/src/assets/images/icons/Bookmark.png' />
//                         <h6 class='mr-2 my-1'>Simpan</h6>
//                     </div>
//                     <div class='flex flex-row border border-rose-400 rounded'>
//                         <img class='h-4 my-auto mx-2' src='/src/assets/images/icons/PinkShare.png' />
//                         <h6 class='mr-2 my-1'>Bagikan</h6>
//                     </div>
//                 </div>
//                 <div class='flex flex-row mt-10'>
//                     <div>
//                         <h1 class='font-bold text-2xl'>Dikelola oleh Ranto</h1>
//                         <h6 class='text-slate-500'>@captainbarbershop</h6>
//                     </div>
//                     <img class='w-14 ml-40' src='/src/assets/images/profiles/ProfileDummy1.png' />
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <h1 class='font-bold text-2xl'>Deskripsi Barbershop</h1>
//                     <p>Captain barbershop adalah merek barbershop premium di Indonesia. kami dengan memberikan layanan berkualitas tinggi seperti perlengkapan sanitasi, fasilitas nyaman, dan tukang cukur berpengalaman.
//                         <br />......
//                         <br /><b>lihat lebih banyak</b></p>
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <div>
//                         <h1 class='font-bold text-2xl'>Jenis Layanan</h1>
//                         <div class='columns-2'>
//                             <div class='flex flex-row mt-2'>
//                                 <img class='w-5 ml-1 mr-4' src='/src/assets/images/icons/Massage.png' />
//                                 <h1 class='text-slate-500'>Pijat</h1>
//                             </div>
//                             <h1>Rp 15.000,00</h1>
//                         </div>
//                         <div class='columns-2'>
//                             <div class='flex flex-row mt-2'>
//                                 <img class='w-5 ml-1 mr-4' src='/src/assets/images/icons/Scrissor.png' />
//                                 <h1 class='text-slate-500'>Potong Rambut</h1>
//                             </div>
//                             <h1>Rp 55.000,00</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <h1 class='font-bold text-2xl'>Jam Operasional</h1>
//                     <div class='flex flex-row ml-1 mt-2'>
//                         <img class='w-auto h-5 mr-4' src='/src/assets/images/icons/Clock.png ' />
//                         <h1>Buka / Tutup : 09:00 - 16:00</h1>
//                     </div>
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <h1 class='font-bold text-2xl'>Daftar Karyawan</h1>
//                     <div class='grid grid-cols-4 ml-1 mt-2'>
//                         <div>
//                             <h1 class='text-slate-500'>Foto</h1>
//                             <img class='my-1' src='/src/assets/images/icons/IconUser.png' />
//                         </div>
//                         <div class='col-span-2'>
//                             <h1 class='my-1 text-slate-500'>Nama</h1>
//                             <h1>Agus Munawar</h1>
//                         </div>
//                         <div>
//                             <h1 class='my-1 text-slate-500'>Skill</h1>
//                             <h1>Cut Hair</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <h1 class='font-bold text-2xl'>Lokasi dan Lingkungan Sekitar</h1>
//                     <div class='flex flex-row'>
//                         <img class='h-4 mt-1 mx-1' src='/src/assets/images/icons/Location.png' />
//                         <h1>Kecamatan Bekasi, Kota Bekasi, Jawa Barat</h1>
//                     </div>
//                 </div>
//                 <hr class='mt-8 mb-10' />
//                 <div>
//                     <h1 class='font-semibold text-lg'>4.8 (3 Ulasan)</h1>
//                     <div class='mt-10 ml-5 flex flex-row'>
//                         <img src='/src/assets/images/icons/AvatarEllipse1.png' />
//                         <div class='ml-2 flex flex-row gap gap-x-2'>
//                             <div class='ml-1'>
//                                 <h4 class='font-semibold'>Putri L.</h4>
//                                 <h6 class='text-xs text-gray-500'>2 minggu yang lalu</h6>
//                             </div>
//                             <div class='border border-rose-400 flex flex-row py-1 px-1 h-6'>
//                                 <img class='h-3 mr-1' src='/src/assets/images/icons/Star.png' />
//                                 <h6 class='text-xs'>5.0</h6>
//                             </div>
//                         </div>
//                     </div>
//                     <p class='text-xs ml-20'>Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang keren bangettt</p>
//                 </div>
//             </div>
//             <div align='center'>
//                 <div class='md:box-content overflow-hidden shadow-xl mt-10 px-5 py-8'>
//                     <ChatNow/>
//                     <br/>
//                     <button class='md:box-content py-4 px-7 mt-3 bg-rose-500 hover:bg-rose-700 text-white font-normal'>
//                         <h1 class='text-lg'>Pesan Sekarang</h1>
//                     </button>
//                 </div>
//                 <div class='max-w-xs overflow-hidden shadow-xl mt-10 inline-flex items-center px-8 py-2 gap gap-2 rounded-3xl divide-x-2 divide-slate-500'>
//                     <img src='/src/assets/images/icons/instagram.png'/>
//                     <img class='w-10' src='/src/assets/images/icons/x.png'/>
//                     <img class='px-3' src='/src/assets/images/icons/facebook.png'/>
//                     <img class='px-3' src='/src/assets/images/icons/Youtube.png'/>

//                 </div>
//             </div>
//         </div>
//     )
// }

export default ContentDetail;
