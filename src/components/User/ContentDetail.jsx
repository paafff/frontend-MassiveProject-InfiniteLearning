import React, { useEffect, useState, useRef } from 'react'; status
import ChatNow from './ChatNow';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaImage, FaClock } from 'react-icons/fa';
import Swal from 'sweetalert2';

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

import FormReservasi from './../../components/User/FormReservasi';
import ReactPaginate from 'react-paginate';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const ContentDetail = ({ businessByUUID, userAuth }) => {
  const [services, setServices] = useState([businessByUUID.services]);

  // modal reservation
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  // }, [businessByUUID]);

  //scheduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee yak
  const [status, setStatus] = useState('');
  const currentTime = new Date().toLocaleTimeString('id-ID', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  const targetTimeOpen = businessByUUID?.schedule?.[0];
  const targetTimeClose = businessByUUID?.schedule?.[1];

  const currentHours = parseInt(currentTime.split(':')[0]);
  const currentMinutes = parseInt(currentTime.split(':')[1]);

  const targetHoursOpen = parseInt(targetTimeOpen?.split(':')[0]);
  const targetMinutesOpen = parseInt(targetTimeOpen?.split(':')[1]);

  const targetHoursClose = parseInt(targetTimeClose?.split(':')[0]);
  const targetMinutesClose = parseInt(targetTimeClose?.split(':')[1]);
  useEffect(() => {
    if (
      // currentHours > targetHoursOpen ||
      // (currentHours === targetHoursOpen && currentMinutes > targetMinutesOpen)

      (currentHours > targetHoursOpen ||
        (currentHours === targetHoursOpen &&
          currentMinutes > targetMinutesOpen)) &&
      //pemisah
      (currentHours < targetHoursClose ||
        (currentHours === targetHoursClose &&
          currentMinutes < targetMinutesClose))
    ) {
      setStatus(`Buka`);
    } else {
      setStatus(`Tutup`);
    }
  }, [targetTimeClose, targetTimeOpen]);

  // const [feedbacks, setFeedbacks] = useState(businessByUUID?.feedbacks);
  const [currentPage, setCurrentPage] = useState(1);

  ///jumlah per page
  const [itemsPerPage] = useState(2);
  // const [pageNumber, setPageNumber] = useState(0);
  // const feedbacksPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = businessByUUID?.feedbacks?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSosmed = (e) => {
    window.open(e)
  }

  return (
    <>
      <FormReservasi
        open={open}
        handleClose={handleClose}
        businessId={businessByUUID?.id}
      />
      <div class="flex flex-col gap-10">
        <div class="w-full flex flex-col md:flex-row-reverse md:items-start mt-5">
          <div className="w-full xl:w-1/4 flex flex-col items-end gap-5">
            <div className="w-full mt-10 flex xl:flex-col xl:items-end gap-2">
              <ChatNow phone={businessByUUID?.phone} />

              <div
                onClick={handleOpen}
                class="justify-center w-1/2 xl:w-full xl:py-4 xl:px-4 py-3 px-4 gap-2 border border-rose-500 bg-rose-600 hover:bg-white hover:cursor-pointer text-white hover:text-rose-500 font-normal rounded inline-flex items-center transition-all"
              >
                <span class="xl:text-lg text-sm ">Pesan Sekarang</span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center shadow-md px-3 py-2 rounded-md gap-5 xl:gap-10">

              <FaInstagramSquare onClick={() => handleSosmed(businessByUUID.socialMedia?.[0])} className="hover:cursor-pointer inline-block w-5 h-5 xl:w-8 xl:h-8 text-rose-400" />

              <FaFacebookSquare onClick={() => handleSosmed(businessByUUID.socialMedia?.[1])} className="hover:cursor-pointer inline-block w-5 h-5 xl:w-8 xl:h-8 text-blue-600" />

              <FaTwitterSquare onClick={() => handleSosmed(businessByUUID.socialMedia?.[2])} className="hover:cursor-pointer inline-block w-5 h-5 xl:w-8 xl:h-8 text-blue-400" />

              <FaYoutube onClick={() => handleSosmed(businessByUUID.socialMedia?.[3])} className="hover:cursor-pointer inline-block w-5 h-5 xl:w-8 xl:h-8 text-rose-600" />
            </div>
          </div>

          <div className="w-full lg:w-3/4 flex flex-col gap-4 mt-10 md:my-0">
            <p class="xl:text-2xl text-lg font-bold">{businessByUUID.name}</p>

            <div className="w-full flex gap-5">
              {status == 'Tutup' ? (
                <p class="text-red-500">{status}</p>
              ) : (
                <p class="text-blue-500">{status}</p>
              )}
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

            <div class="flex flex-row gap-10 justify-start items-center mt-10">
              <div className='flex flex-col'>
                <p class="font-medium xl:text-2xl">
                  Dikelola oleh
                </p>
                <p class="font-bold xl:text-2xl">
                  {businessByUUID.userData?.username}
                </p>
              </div>
              <div
                className="w-10 xl:w-16 h-10 xl:h-16 rounded-full border border-gray-300"
                style={{
                  backgroundImage: `url(${businessByUUID.userData?.profileURL})`,
                  backgroundSize: 'cover', backgroundPosition: 'center'
                }}
              >
                {/* <img src={businessByUUID.userData?.profileURL} className='rounded-full' alt="" srcset="" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-3/4 mt-10 border-b border-gray-200 pb-5">
          <p class="font-bold text-lg xl:text-2xl ">Deskripsi Barbershop</p>
          <p className="text-base">
            {businessByUUID.description
              ? (
                <p className='mt-5 text-sm xl:mt-10'>{businessByUUID.description}</p>
              )
              : (
                <p className='mt-5 text-sm xl:mt-10'>Belum ada deskripsi</p>
              )}
          </p>
        </div>

        <div className="xl:w-3/4 py-5 border-b border-gray-200">
          <p class="font-bold text-lg xl:text-2xl">Jenis Layanan</p>
          {businessByUUID?.services?.length > 0 ? (
            ''
          ) : (
            <p className='mt-10 text-sm'>Belum ada layanan</p>
          )}
          {businessByUUID?.services?.map((service, index) => (
            <>
              <div class="w-full flex flex-col items-center justify-between">
                <div className="w-full flex justify-start mt-8">
                  <div className="w-1/2">
                    <p className="text-base font-bold text-gray-400">
                      Nama Layanan
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-base font-bold text-gray-400">Harga</p>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  {service?.name?.map((serviceName, index) => (
                    <div className="w-full flex justify-start my-2" key={index}>
                      <div className="w-1/2">
                        <p className="text-sm xl:text-base py-2">
                          {serviceName ? serviceName : "-"}
                        </p>
                      </div>
                      <div className="w-1/2">
                        <p className="text-sm xl:text-base py-2">
                          {service.price?.[index] != '' ? (

                            'Rp' +
                            parseInt(service.price?.[index]).toLocaleString(
                              'id-ID'
                            )
                          ) : (
                            "-"
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="w-full xl:w-3/4 border-b border-gray-200 py-5">
          <h1 class="font-bold text-lg xl:text-2xl mb-4">Jam Operasional</h1>
          <div class="flex flex-row ml-1 mt-10">
            <FaClock className='w-5 h-5 mr-4 text-zinc-800' />
            <div className="flex gap-10 px-5">
              <p className='text-sm'>
                {businessByUUID.schedule?.[0] == 'undefined' ? "-- Jam buka --" : (
                  <p>Jam buka: {businessByUUID.schedule?.[0] ? businessByUUID.schedule?.[0] : '-- Jam buka --'}</p>
                )}
              </p>

              <p className='text-sm'>
                {businessByUUID.schedule?.[1] == 'undefined' ? "-- Jam tutup --" : (
                  <p>Jam tutup: {businessByUUID.schedule?.[1] ? businessByUUID.schedule?.[1] : '-- Jam tutup --'}</p>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-3/4 border-b border-gray-200 py-5">
          <h1 class="font-bold text-lg xl:text-2xl">Daftar Karyawan</h1>

          {businessByUUID.workers?.length > 0 ? businessByUUID.workers?.map((worker) => (
            <div class="w-full flex gap-20 items-center mt-10">
              <div className="w-14 h-14 rounded-full" style={{ backgroundImage: `url(${worker?.imageURL})`, backgroundSize: '80px', backgroundPosition: 'center' }} >

              </div>
              <div className="w-1/4">
                <p className='text-sm'>{worker?.name}</p>
              </div>
              <div className="w-1/4">
                <p className='text-sm'>{worker?.skill}</p>
              </div>
            </div>
          )) : (
            <p className='text-sm mt-10'>Belum ada karyawan</p>
          )}
        </div>

        <div className="w-full xl:w-3/4 border-b border-gray-200 py-5">
          <h1 class="font-bold text-lg xl:text-2xl">Lokasi dan Lingkungan Sekitar</h1>
          <div class="flex flex-row py-5 gap-3">
            <FaLocationDot className="text-rose-400 h-4 mt-1 mx-1" />
            {businessByUUID.address?.map((address) => (
              <p className='text-sm'>{address + ', '}</p>
            ))}
          </div>
        </div>

        {/* //ntar maping nang */}
        <div>
          {currentFeedbacks?.length > 0 ? (

            <h1 class="font-semibold text-lg">Ulasan Pengguna ({businessByUUID?.feedbacks?.length} Ulasan)</h1>
          ) : (
            <h1 class="font-semibold text-lg">Ulasan Pengguna (0 ulasan)</h1>
          )}

          {/* {businessByUUID.feedbacks?.map((feedback) => ( */}
          {currentFeedbacks?.length > 0 ? currentFeedbacks?.map((feedback) => (
            <>
              <div className="xl:w-3/4 flex flex-col gap-3 border-b border-gray-200 pb-5">
                <div class="mt-10 ml-5 flex flex-row items-center gap-5">
                  {feedback.userData?.profileURL ? (
                    <div className='w-10 h-10 rounded-full' style={{ backgroundImage: `url(${feedback.userData?.profileURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      {/* <img
                      src={feedback.userData?.profileURL}
                      className="w-20"
                      alt=""
                    /> */}
                    </div>
                  ) : (
                    <FaImage className="w-10 h-10" />
                  )}
                  <div class="ml-2 flex flex-row gap gap-5">
                    <div class="ml-1">
                      <h4 class="text-lg font-semibold">
                        {' '}
                        {feedback.userData?.username}
                      </h4>
                      <h6 class="text-xs text-gray-500">{feedback.createdAt}</h6>
                    </div>
                    <div class="items-center gap-4 flex flex-row py-1 px-1 h-6">
                      <FaStar className="w-7 h-7 text-amber-400" />
                      <p class="text-lg font-semibold">{feedback.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-20">
                  <p className="text-base ">{feedback.description}</p>
                  {feedback.userData?.profileURL ? (
                    <img src={feedback.imageURL} className="w-24" alt="" />
                  ) : (
                    <FaImage className="w-10 h-10" />
                  )}
                </div>
              </div>
            </>
          )) : (
            <p className='mt-10 '>belum ada ulasan</p>
          )}

          {businessByUUID?.feedbacks?.length > 0 ? (

            <ReactPaginate
              className="flex space-x-5 justify-center items-center mt-10"
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={Math.ceil(
                businessByUUID?.feedbacks?.length / itemsPerPage
              )}
              onPageChange={(data) => paginate(data.selected + 1)}
              //UI
              containerClassName={'pagination'}
              activeClassName={
                'px-2 py-1 rounded text-zinc-800 border border-gray-200 bg-gray-100'
              }
              nextClassName={'px-2 py-1 rounded text-white bg-blue-600'}
              previousClassName={'px-2 py-1 rounded text-white bg-blue-600'}
            />
          ) : (
            ''
          )}

        </div>

        <div className="w-full xl:w-3/4">
          <ReviewModal userAuth={userAuth} businessByUUID={businessByUUID} />
        </div>

        {/* coomponent reservasi */}
        {/* <FormReservasi businessId={businessByUUID?.id} /> */}
      </div>
    </>
  );
};

const ReviewModal = ({ userAuth, businessByUUID }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const currentURL = useLocation().pathname

  // useState for rating
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // useRef for input image
  const imageRef = useRef(null);
  const imageClick = () => {
    imageRef.current.click();
    console.log('gambar diklik');
  };

  // Input data to state
  const handleChange = (e) => {
    const name = e.name;
    // const id = e.name;
    const value = e.value;
    setFeedbackData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    // setPicture(file);
    setFeedbackData({ ...feedbackData, feedbackPhoto: file });
  };

  const [feedbackData, setFeedbackData] = useState({
    // businessId: businessByUUID?.id,
    description: '',
    feedbackPhoto: null,
  });

  const [feedbackPhoto, setFeedbackPhoto] = useState('');

  const createFeedback = async () => {
    try {
      const feedbackForm = new FormData();

      // console.log(feedbackData)

      feedbackForm.append('description', feedbackData.description);
      feedbackForm.append('businessId', businessByUUID.id);
      feedbackForm.append('feedbackPhoto', feedbackData.feedbackPhoto);
      feedbackForm.append('rating', rating);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/feedback`,
        feedbackForm,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      handleClose()

      Swal.fire({
        icon: 'success',
        title: 'Terimakasih telah memberikan ulasan',
        confirmButtonText: 'Oke',
      }).then((result) => {

        if (result.isConfirmed) {
          window.location.reload()
        }
      })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div
        className="w-full hover:cursor-pointer hover:bg-rose-500 transition-all shadow drop-shadow bg-rose-400 text-center font-medium py-2 rounded text-white"
        onClick={handleOpen}
      >
        <p className="">Beri Ulasan</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-full h-fit lg:w-3/4 xl:w-1/2">
          <div id="modal-modal-title" className="w-full flex justify-end">
            <p
              className="px-3 py-2 hover:bg-zinc-800 hover:text-white hover:cursor-pointer transition-all"
              onClick={handleClose}
            >
              X
            </p>
          </div>
          <div
            id="modal-modal-description"
            className="w-full bg-gray-200 py-4 px-5 shadow-md drop-shadow mt-3"
          >
            <p className="text-sm lg:text-base">Silahkan Beri Ulasan Disini!!</p>
          </div>
          <div className="w-full mt-10 flex flex-col items-center justify-center">
            <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-start gap-10 lg:gap-20 py-5 ">
              <div className="w-full lg:w-1/4">
                <p className="text-base lg:text-xl font-medium">Rating Review</p>
              </div>
              <div className="w-full lg:w-3/4 flex justify-evenly">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`${star <= rating ? 'text-amber-400' : 'text-gray-200'
                      }  scale-[2.5] transition-all hover:cursor-pointer`}
                    onClick={(e) => handleRatingChange(star)}
                  />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-start gap-5 lg:gap-20 py-5 ">
              <div className="w-full lg:w-1/4">
                <p className="text-base lg:text-xl font-medium">Lampirkan Foto</p>
              </div>
              <div className="w-3/4 flex flex-col gap-5">
                <div
                  onClick={imageClick}
                  className="w-full py-3 rounded-md px-4 border border-gray-300 bg-gray-100 hover:cursor-pointer transition-all active:bg-gray-200"
                >
                  <p className="text-sm text-gray-400 font-normal">
                    Upload foto
                  </p>
                </div>
                <div>
                  {feedbackData.feedbackPhoto ? (
                    <img
                      src={URL.createObjectURL(feedbackData.feedbackPhoto)}
                      className="w-32"
                      alt=""
                    />
                  ) : (
                    <FaImage className="w-24 h-24 rounded-sm text-gray-200 " />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-start gap-5 lg:gap-20 py-5 ">
              <div className="w-full lg:w-1/4">
                <p className="text-base lg:text-xl font-medium">Deskripsi Ulasan</p>
              </div>
              <div className="w-full lg:w-3/4">
                <textarea
                  name="description"
                  className="w-full p-4 border border-gray-300 bg-gray-100 rounded-md placeholder:"
                  placeholder="Deskripsi"
                  id=""
                  onChange={(e) => handleChange(e.target)}
                ></textarea>
              </div>
            </div>
            <div>
              <input
                ref={imageRef}
                className="hidden"
                type="file"
                onChange={handlePictureChange}
              />
            </div>
            <div className="w-4/5 flex items-center justify-end gap-5 py-5">
              {/* <p className="px-4 py-2 transition-all bg-zinc-900 rounded text-white shadow drop-shadow hover:cursor-pointer hover:bg-zinc-800">
                Posting
              </p> */}
              <button onClick={createFeedback}>
                <p className="px-4 py-2 transition-all bg-green-600 rounded text-white shadow drop-shadow hover:cursor-pointer hover:bg-green-700">
                  Posting
                </p>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentDetail;
