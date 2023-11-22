import React from 'react';
import { useState, useEffect } from 'react';
import ProfilePhoto from '../../../assets/images/profiles/profile_dummy.jpg';
import { IoMdShare } from 'react-icons/io';
import { FaRegCopy, FaSave, FaUserCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useRef } from 'react';
import HumbergerMenu from './HumbergerMenu';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../../redux/authSlice';

const dataUser = {
  profilePhoto: 'profile_dummy.jpg',
  fullname: 'Ilham Soejud Alkahfiardy',
  gender: 'Pria',
  address: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio exercitationem officia nesciunt quam et tempore, cum ab inventore laudantium, ipsam fugit animi dignissimos, molestias ea distinctio ad ex eaque iste.`,
  email: 'emailku.hairhub@gmail.com',
  password: '123123',
};

const dataGender = {
  man: 'Pria',
  woman: 'Wanita',
};

const Biodata = ({ showSidebar, setShowSidebar }) => {
  const [editBio, setEditBio] = useState(false);
  console.log(editBio);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // mengambil nilai userAuthReducer pada store
  const userAuthSelector = (state) => state.userAuthReducer.userAuth;
  const userAuth = useSelector(userAuthSelector) || '';

  useEffect(() => {
    const getMeUser = async () => {
      await dispatch(getMe());
    };

    getMeUser();
    console.log(userAuth);
  }, [dispatch, navigate]);

  return (
    <div className="w-full flex flex-col py-10 lg:py-16 px-6 md:px-12 xl:px-24 lg:px-10 ">
      <HumbergerMenu
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <p className="text-xl lg:text-2xl font-bold ">
        Hello, {userAuth.username}
      </p>

      <div className="flex flex-col xl:flex-row-reverse xl:gap-32 xl:justify-between">
        <div className="flex justify-center md:justify-end">
          <ProfileCard userAuth={userAuth} />
        </div>

        <Form userAuth={userAuth} editBio={editBio} setEditBio={setEditBio} />
      </div>
    </div>
  );
};

const ProfileCard = ({ userAuth }) => {
  console.log('dalem componen', userAuth);
  const copyURL = () => {
    // Get the current URL
    const currentURL = window.location.href;

    // Create a temporary textarea element to copy the URL
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = currentURL;
    document.body.appendChild(tempTextarea);

    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Alert or perform any other action after copying
    alert('URL copied to clipboard!');
  };

  return (
    <div className="w-72 bg-white drop-shadow justify-center items-center py-10 mt-10 rounded-md flex flex-col gap-8 float-right xl:h-fit">
      <img
        src={userAuth.profileURL}
        alt=""
        className="rounded-full w-20 h-20 object-cover"
      />
      <p className="text-sm">{userAuth.username}</p>

      <div className="flex gap-3">
        <div className="w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full">
          <IoMdShare className=" text-white text-base" />
        </div>
        <div className="w-10 h-10 hover:cursor-pointer bg-zinc-950 flex items-center justify-center rounded-full">
          <FaRegCopy
            onClick={() => copyURL()}
            className=" text-white text-base"
          />
        </div>
        <div className="w-10 h-10 hover:cursor-pointer bg-red-700 flex items-center justify-center rounded-full">
          <FaRegTrashCan className=" text-white text-base" />
        </div>
      </div>
    </div>
  );
};

const Form = ({ editBio, setEditBio, userAuth }) => {
  const inputRef = useRef(null);

  // Set picture change
  const handlePictureClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (editBio == false) {
      setPicture('');
    }
  }, [editBio]);

  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });

  const [picture, setPicture] = useState('');
  const [photoProfile, setphotoProfile] = useState('');

  // Input data to state
  const handleChange = (e) => {
    const name = e.name;
    // const id = e.name;
    const value = e.value;
    setUserDataUpdate((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // setPicture(file);
    setUserDataUpdate({ ...userDataUpdate, photoProfile: file });
  };

  const [userDataUpdate, setUserDataUpdate] = useState({
    prov: '',
    kab: '',
    kec: '',
    kel: '',
    rtrw: '',

    username: '',
    email: '',
    gender: '',
    photoProfile: null,

    password: '',
    confPassword: '',
  });

  const arrayAddressUser = [
    userDataUpdate.prov,
    userDataUpdate.kab,
    userDataUpdate.kec,
    userDataUpdate.kel,
    userDataUpdate.rtrw,
  ];

  //controler rest api
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const formUpdate = new FormData();

      formUpdate.append('username', userDataUpdate.username);
      formUpdate.append('email', userDataUpdate.email);
      formUpdate.append('gender', userDataUpdate.gender);
      formUpdate.append('photoProfile', userDataUpdate.photoProfile);
      //   formUpdate.append('cardId', userDataUpdate.cardId);
      formUpdate.append('address', JSON.stringify(arrayAddressUser));
      // formUpdate.append('address', JSON.stringify(arrayAddressUser));

      await axios.patch(
        `http://localhost:5000/user/${userAuth.uuid}`,
        formUpdate,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log('data user', formUpdate);
      console.log(arrayAddressUser);
      console.log('sukses update data user');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="mt-14 w-full flex flex-col gap-6 xl:w-1/2 xl:justify-start"
      onSubmit={updateUser}
    >
      {editBio && (
        <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center mb-5">
          <p className="text-sm lg:text-base">Foto Profil</p>
          <div className="flex gap-10 items-center justify-start">
            {userDataUpdate.photoProfile ? (
              <img
                src={URL.createObjectURL(userDataUpdate.photoProfile)}
                className="inline-block w-20 h-20 rounded-full"
                alt=""
              />
            ) : (
              <FaUserCircle className="inline-block w-20 h-20 text-white" />
            )}

            <p
              className="text-sm py-1 px-3 bg-white text-gray-400 rounded shadow hover:bg-gray-100 hover:cursor-pointer transition-all"
              onClick={handlePictureClick}
            >
              Change
            </p>
            {userDataUpdate.photoProfile ? (
              <p className="text-sm text-white bg-green-600 py-1 px-3 rounded drop-shadow hover:cursor-pointer hover:bg-green-700 transition-all">
                Save Picture
              </p>
            ) : (
              ''
            )}
          </div>

          <input
            type="file"
            name="profile-picture"
            id="profile-picture"
            className="hidden"
            ref={inputRef}
            onChange={handlePictureChange}
          />
        </div>
      )}

      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-3">
        <label className="text-sm lg:text-base">Nama Lengkap</label>
        <input
          name="username "
          type="text"
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          placeholder="nama lengkap"
          onChange={(e) => handleChange(e.target)}
          defaultValue={userAuth.username}
          disabled={!editBio}
        />
      </div>

      <div
        className={`flex flex-col gap-3 ${
          !editBio
            ? 'items-start md:flex-row md:justify-between md:items-center'
            : 'gap-24 md:gap-60 lg:gap-24 xl:gap-24 md:flex-row md: md:items-center'
        }`}
      >
        <p className="text-sm lg:text-base">Jenis Kelamin</p>

        {!editBio ? (
          <input
            type="text"
            className="w-1/4 md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
            placeholder="jenis kelamin"
            defaultValue={dataUser.gender}
            disabled={!editBio}
          />
        ) : (
          <div className="flex gap-2 ml-5">
            <input
              type="radio"
              name="gender"
              id="gender-man"
              value="man"
              onChange={(e) => handleChange(e.target)}
            />
            <label htmlFor="gender-man" className="text-sm">
              Pria
            </label>

            <input
              type="radio"
              name="gender"
              id="gender-woman"
              value="woman"
              onChange={(e) => handleChange(e.target)}
            />
            <label htmlFor="gender-woman" className="text-sm">
              Wanita
            </label>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-start">
        <label className="text-sm lg:text-base">Alamat</label>
        <textarea
          type="text"
          rows={10}
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          placeholder="alamat"
          defaultValue={userAuth.address}
          disabled={!editBio}
          onChange={(e) => handleChange(e.target)}
          name="address"
        />
      </div>

      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
        <label className="text-sm lg:text-base">Email</label>
        <input
          type="email"
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          placeholder="email"
          disabled={!editBio}
          defaultValue={userAuth.email}
          onChange={(e) => handleChange(e.target)}
          name="email"
        />
      </div>

      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
        <label className="text-sm lg:text-base">Password</label>
        <input
          type="password"
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          disabled={!editBio}
          defaultValue={dataUser.password}
          onChange={(e) => handleChange(e.target)}
          name="password"
        />
      </div>

      <div className="flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center">
        <label className="text-sm lg:text-base">Confirm Password</label>
        <input
          type="password"
          className="w-full md:w-1/2 lg:w-3/4 text-sm focus:ring focus:border-gray-400 focus:ring-gray-400 py-3 px-4 bg-white rounded-md placeholder:text-gray-400 placeholder:text-xs disabled:bg-gray-300"
          disabled={!editBio}
          defaultValue={dataUser.password}
          onChange={(e) => handleChange(e.target)}
          name="confpassword"
        />
      </div>

      <div className="mt-8 flex gap-5 justify-end">
        {editBio ? (
          <>
            <div
              className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
              onClick={() => setEditBio(!editBio)}
            >
              <p className="text-sm text-white flex gap-2 items-center">
                <IoReturnDownBackOutline className="inline-block" />
                Back
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-5 bg-green-600 hover:bg-green-700 hover:cursor-pointer transition-all rounded"
            >
              <p className="text-sm text-white flex gap-2 items-center">
                <FaSave className="inline-block" />
                Simpan Perubahan
              </p>
            </button>
          </>
        ) : (
          <div
            className="hover:bg-zinc-800 hover:cursor-pointer transition-all py-2 px-5 bg-zinc-950 rounded "
            onClick={() => setEditBio(!editBio)}
          >
            <p className="text-sm text-white flex gap-2 items-center">
              <FiEdit className="inline-block" />
              Ubah Akun
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

const Button = ({ editBio, setEditBio }) => {
  return (
    <div className="mt-8 flex gap-5 justify-end">
      <div
        className=" py-2 px-5 bg-zinc-950 rounded "
        onClick={() => setEditBio(!editBio)}
      >
        <p className="text-sm text-white flex gap-2 items-center">
          <FiEdit className="inline-block" />
          Ubah Akun
        </p>
      </div>
      <div className=" py-2 px-5 bg-green-600 rounded">
        <p className="text-sm text-white flex gap-2 items-center">
          <FaSave className="inline-block" />
          Simpan Perubahan
        </p>
      </div>
    </div>
  );
};

export default Biodata;
