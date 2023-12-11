import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const listBooking = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const CardBooking = ({ businessId }) => {
  const [dataReservation, setDataReservation] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  //jumlah render
  const reservationsPerPage = 4;

  useEffect(() => {
    const getReservation = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/reservation/${businessId}`
        );

        setDataReservation(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getReservation();
  }, [businessId]);

  const pageCount = Math.ceil(dataReservation.length / reservationsPerPage);

  const displayReservations = dataReservation
    .slice(
      pageNumber * reservationsPerPage,
      (pageNumber + 1) * reservationsPerPage
    )
    .map((booking) => (<Card key={booking.id} booking={booking} />));

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-screen lg:w-full pb-10 px-5 ">
      <div className="w-full mb-5">
        <p className="text-lg font-bold text-center w-full underline underline-offset-8">
          Pesanan Masuk
        </p>
      </div>

      <div className="py-3 w-full grid grid-cols-1 place-content-center gap-5 md:w-3/4  md:mx-auto xl:grid-cols-2 xl:justify-center">
        {/* {dataReservation.map((booking) => (
          <Card booking={booking} />
        ))} */}
        {/* {console.log("display reservations ", displayReservations)} */}


        {displayReservations}
      </div>

      {dataReservation?.length > 0 ? (

        <ReactPaginate
          className="flex space-x-5 justify-center items-center mt-10"
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageChange}

          //UI
          containerClassName={'pagination'}
          activeClassName={
            'px-2 py-1 rounded text-zinc-800 border border-gray-200 bg-gray-100'
          }
          nextClassName={'px-2 py-1 rounded text-white bg-blue-600'}
          previousClassName={'px-2 py-1 rounded text-white bg-blue-600'}
        />
      ) : (
        <p className='w-fit text-center bg-white mx-auto px-3 py-2 rounded-sm shadow drop-shadow '>Belum ada pesanan</p>
      )}
    </div>
  );
};

const Card = ({ booking }) => {

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded drop-shadow ">
      <div className="flex gap-2 justify-between items-center">
        <div div className=" flex gap-2 justify-start items-center">
          <FaUserCircle className="inline-block w-16 h-16 text-gray-500" />

          <div className="flex flex-col justify-center">
            <p className="text-sm">{booking.name}</p>
            <p className="text-xs text-gray-500">{booking.createdAt}</p>
          </div>
        </div>

        {/* hideeeeeeeeeeeeeeeeeeeeeeeeeeeee sementaraaaaaaaaaaaaaaaaaaaa */}
        {/* <div className=" flex gap-2 justify-end items-center">
          <div className="py-2 px-3 drop-shadow-lg rounded hover:cursor-pointer transition-all bg-green-600 hover:bg-green-700">
            <p className="text-xs text-white">Terima</p>
          </div>
          <div className="py-2 px-3 drop-shadow-lg rounded hover:cursor-pointer transition-all bg-red-600 hover:bg-red-700">
            <p className="text-xs text-white">Tolak</p>
          </div>
        </div> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex bg-gray-200 p-2 rounded-sm">
          {/* //ini field bagusan diganti phone */}
          <div className="w-1/4">
            <p className="text-sm font-semibold">phone </p>
          </div>
          <div className="w-3/4">
            <p className="text-sm">
              : <span className="ml-2">{booking.phone}</span>
            </p>
          </div>
        </div>
        <div className="flex bg-gray-200 p-2 rounded-sm">
          <div className="w-1/4">
            <p className="text-sm font-semibold">Waktu </p>
          </div>
          <div className="w-3/4">
            <p className="text-sm">
              :{' '}
              <span className="ml-2">
                {booking.day}, {booking.time}
              </span>
            </p>
          </div>
        </div>
        <div className="flex bg-gray-200 p-2 rounded-sm">
          <div className="w-1/4">
            <p className="text-sm font-semibold">Deskripsi </p>
          </div>
          <div className="w-3/4">
            <p className="text-sm">
              : <span className="ml-2">{booking.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBooking;
