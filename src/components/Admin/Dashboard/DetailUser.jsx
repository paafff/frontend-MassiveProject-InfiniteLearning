import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';

const DetailUser = ({ selectedUserUUID }) => {
  return (
    <div className="w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Detail User</p>
        <hr className="my-5" />

        <Form selectedUserUUID={selectedUserUUID} />
      </div>
    </div>
  );
};

const Form = ({ selectedUserUUID }) => {
  const [dataUser, setDataUser] = useState('');
  const [date, setDate] = useState(null)

  useEffect(() => {
    const getUserByUUID = async () => {
      try {
        const response = await axios(
          `${import.meta.env.VITE_API_URL}/user/${selectedUserUUID}`
        );

        setDataUser(response?.data);
        // console.log(dataUser);
      } catch (error) {
        if (error.response) {
          //   alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getUserByUUID();


    if (dataUser) {

      const dateString = dataUser?.createdAt
      const dateObj = new Date(dateString)
      const utcString = dateObj.toISOString()

      setDate(dateObj)
    }

  }, [selectedUserUUID]);

  return (

    <div className="flex flex-col gap-4 px-3">
      <div className="w-20 h-20">
        {dataUser ? (
          <img src={dataUser?.profileURL} />
        ) : (
          <FaUserCircle className="w-full h-full text-gray-200" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Nama</p>
        <input
          name="fullname"
          type="text"
          disabled={true}
          className="w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200"
          placeholder="username"
          defaultValue={dataUser?.username}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Email</p>
        <input
          name="fullname"
          type="text"
          disabled={true}
          className="w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200"
          placeholder="email"
          defaultValue={dataUser?.email}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs">Terdaftar Pada</p>
        <input
          name="fullname"
          type="text"
          disabled={true}
          className="w-full md:w-3/4 xl:w-1/2 text-xs focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-200"
          placeholder=" tanggal registrasi"
          defaultValue={date}
        />
      </div>
      <hr className="my-3" />
      <div className="w-full flex justify-end items-center">
        <div className="w-fit px-3 py-2 bg-red-600 hover:bg-red-700 hover:cursor-pointer rounded flex gap-3">
          <FaTrashAlt className="inline-block text-white" />
          <p className="text-xs text-white">Suspend User</p>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
