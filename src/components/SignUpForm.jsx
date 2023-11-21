import React, { useState } from 'react';
import { FaAddressBook } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import Logosignup from "../assets/images/logo/signup.png"


const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      // Submit the form
      console.log('Submitted', { fullName, email, password });
    }
  };

  return (
    <div className='bg-white w-full lg:p-8 xl:flex gap-10'>
    <div className='md:w-1/2 md:mx-auto flex items-center xl:w-1/2 '>
    <img src={Logosignup}></img>
    </div>
    <div className="bg-white w-full border-2 border-solid shadow-slate-300 py-5 px-10 xl:w-1/2">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
      <p className="text-base md:text-lg font-bold text-center">Sign Up</p>
      <div className='flex flex-col gap-5 xl:flex-col xl:justify-start'>
        <div className="flex flex-col gap-3 md:items-start md:justify-between">
          <label
            className="text-sm font-semibold"
            htmlFor="username"
          > <FaAddressBook className='inline-block mr-2 scale-125'/>
            Nama
          </label>
          <input
            type="text"
            className="w-full  border border-gray-400 rounded-md h-10 text-sm font-semibold px-2 placeholder:text-xs disabled:bg-gray-200"
            id="username"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 md:items-start md:justify-between">
          <label
            className="text-sm font-semibold"
            for="email"
          > <MdMail className='inline-block mr-2 scale-125'/>
            Email
          </label>
          <input
            type="text"
            className="w-full  border border-gray-400 rounded-md h-10 text-sm font-semibold px-2 placeholder:text-xs disabled:bg-gray-200"
            id="username"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 md:items-start md:justify-between">
          <label
            className="text-sm font-semibold"
            for="password"
          > <FaUnlock className='inline-block mr-2 scale-125'/>
            Password
          </label>
          <input
            type="password"
            className="w-full  border border-gray-400 rounded-md h-10 text-sm font-semibold px-2 placeholder:text-xs disabled:bg-gray-200"
            id="password"
            placeholder="Minimal 8 Karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 md:items-start md:justify-between">
          <label
            className="text-sm font-semibold"
            for="password"
          > <FaKey className='inline-block mr-2 scale-125'/>
            Ulangi Password
          </label>
          <input
            type="password"
            className="w-full  border border-gray-400 rounded-md h-10 text-sm font-semibold px-2 placeholder:text-xs disabled:bg-gray-200"
            placeholder="Masukkan Kembali Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

          <button className='w-full flex py-2 px-5 bg-red-400 hover:bg-red-400 hover:cursor-pointer transition-all rounded' type="submit">
            <p className='text-base md:text-sm font-semibold text-center text-white w-full'>
            Sign Up
            </p>
          </button>

        <p className="mt-2 text-sm font-semibold text-black text-center">
          Sudah punya akun HairHub?{' '}
          <a className="text-red-400">
            Masuk di sini
          </a>
        </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignUpForm;
