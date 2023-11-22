import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logosignin from '../assets/images/logo/loginn.png'
import { MdMail } from "react-icons/md";
import { FaUnlock } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState('');

  const navigate = useNavigate();

  const authLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });

      // setUserData(response.data);
      // navigate('/dashboard');
      console.log(response.data.msg);
      // window.location.reload();
    } catch (error) {
      //dibawah ini opsi tampilkan error
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  return (
    <div className='bg-white w-full lg:p-8 xl:flex gap-10 min-h-screen'>
    <div className='md:w-1/2 md:mx-auto flex items-center xl:w-1/2 '>
    <img src={Logosignin}></img>
    </div>
    <div className="bg-white w-full xl:w-1/2 md:py-20 md:px-10">
    <div className="bg-white w-full border-2 border-solid shadow-slate-300 py-5 px-10">
      <form className="flex flex-col gap-5" onSubmit={authLogin}>
      <p className="text-base md:text-lg font-bold text-center">Login</p>
        <div className="flex flex-col gap-3 md:items-start md:justify-between">
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

        <div className="flex flex-col gap-3 md:items-start md:justify-between">
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className='w-full flex py-2 px-5 bg-red-400 hover:bg-red-400 hover:cursor-pointer transition-all rounded' type="submit">
            <p className='text-base md:text-sm font-semibold text-center text-white w-full'>
            Login
            </p>
          </button>

          <p className="mt-2 text-sm font-semibold text-black text-center">
          Baru Mengenal HairHub?{' '}
          <a className="text-red-400">
          Daftar Segera
          </a>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
