import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { FaRegCopy, FaSave, FaUserCircle, FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Employee = ({ businessByUUID }) => {
  const pictureRef = useRef('');
  const [picture, setPicture] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const handlePictureClick = () => {
    pictureRef.current.click();
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);
    console.log(picture);
  };

  useEffect(() => {
    if (editForm == true) {
      setPicture('');
    }
  }, [editForm]);

  return (
    <div className="w-screen lg:w-full py-10 px-5 md:px-12 xl:px-24 xl:w-3/4">
      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <div className="w-full flex justify-between items-center">
          <p className="text-base md:text-lg font-semibold">Karyawan</p>
          <p className="text-xs md:text-lg text-gray-500">
            Tambahkan detail karyawan
          </p>
        </div>
        <hr className="my-5" />

        <Form
          businessByUUID={businessByUUID}
          editForm={editForm}
          setEditForm={setEditForm}
          picture={picture}
          pictureRef={pictureRef}
          handlePictureClick={handlePictureClick}
          handlePictureChange={handlePictureChange}
        />
      </div>
    </div>
  );
};

const Form = ({
  businessByUUID,
  editForm,
  setEditForm,
  pictureRef,
  handlePictureClick,
  handlePictureChange,
  picture,
}) => {
  const [fullname, setFullname] = useState('');
  const [skill, setSkill] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    setWorkerData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('tersubmit', [fullname, skill, desc]);
  };

  const businessId = businessByUUID.id;
  const [workerData, setWorkerData] = useState({
    name: '',
    description: '',
    skill: '',
  });

  const createWorker = async (e) => {
    e.preventDefault();
    try {
      const formCreateWorker = new FormData();

      formCreateWorker.append('photoWorker', picture);
      formCreateWorker.append('name', workerData.name);
      formCreateWorker.append('description', workerData.description);
      formCreateWorker.append('skill', workerData.skill);
    //   formCreateWorker.append('businessId', workerData.businessId);
      formCreateWorker.append('businessId', businessId);

      await axios.post(`${import.meta.env.VITE_API_URL}/worker`, formCreateWorker, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(workerData);
      console.log(picture);
      console.log('sukses menambah data pekerja');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-sm">Foto Profil</p>
        <div className="flex gap-6 items-center">
          {picture ? (
            <img
              src={URL.createObjectURL(picture)}
              className="w-16 h-16 object-contain"
              alt=""
            />
          ) : (
            // <FaUserCircle className='inline-block w-16 h-16 text-gray-400' />
            <FaUserCircle className="inline-block w-16 h-16 text-gray-400" />
          )}
          <input
            type="file"
            className="hidden"
            name="picture"
            id="picture"
            ref={pictureRef}
            onChange={handlePictureChange}
          />

          {editForm ? (
            <p className="text-xs text-gray-500 py-1 px-2 border bg-gray-200 border-gray-400 hover:text-white hover:cursor-pointer transition-all rounded">
              Upload foto
            </p>
          ) : (
            <p
              className="text-xs text-gray-500 py-1 px-2 border border-gray-400 hover:bg-gray-400 hover:text-white hover:cursor-pointer transition-all rounded"
              onClick={handlePictureClick}
            >
              Upload foto
            </p>
          )}

          {picture && (
            <p className="text-xs text-white py-1 px-2 border bg-green-600 hover:bg-green-700 hover:text-white hover:cursor-pointer transition-all rounded">
              Simpan Foto
            </p>
          )}
        </div>
      </div>
      <form onSubmit={createWorker} action="" className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm">Nama Lengkap</p>
            {/* {businessByUUID.id} */}
            <input
              type="text"
              name="name"
              onChange={(e) => handleChange(e.target)}
              disabled={editForm}
              className="h-10 w-full xl:w-1/2 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400 disabled:bg-gray-200"
              placeholder="Masukkan nama lengkap"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm">Skill</p>
            <input
              type="text"
              name="skill"
              onChange={(e) => handleChange(e.target)}
              disabled={editForm}
              className="h-10 w-full xl:w-1/2 border border-gray-400 text-xs px-2 rounded placeholder:text-gray-400 disabled:bg-gray-200"
              placeholder="Isi skill"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm">Deskripsi</p>
          <textarea
            name="description"
            onChange={(e) => handleChange(e.target)}
            id="desc"
            rows="10"
            disabled={editForm}
            className="w-full xl:w-1/2 border border-gray-400 text-xs p-2 rounded placeholder:text-gray-400 disabled:bg-gray-200"
            placeholder="Deskripsi"
          ></textarea>
        </div>

        <hr className="mt-5" />

        <Button editForm={editForm} setEditForm={setEditForm} />
      </form>
    </div>
  );
};

const Button = ({ editForm, setEditForm }) => {
  return (
    <div className="w-full flex justify-between md:justify-end gap-5">
      <Link
        to="/dashboard-employee"
        className="hover:bg-blue-700 hover:cursor-pointer transition-all py-2 px-5 bg-blue-600 rounded "
      >
        <p className="text-xs md:text-sm text-white flex gap-4 md:gap-2 items-center">
          <FaEye className="inline-block scale-150 md:scale-100" />
          Lihat Data Karyawan
        </p>
      </Link>
      <button
        type="submit"
        className="w-fit flex justify-end py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded"
      >
        <p className="text-xs md:text-sm text-white flex gap-4 md:gap-2 items-center">
          <FaSave className="inline-block scale-150 md:scale-100" />
          Tambah Karyawan Baru
        </p>
      </button>
    </div>
  );
};

export default Employee;
