import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const authRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        username: fullName,
        email: email,
        password: password,
        confPassword: confirmPassword,
      });
      alert(response.data.msg);
      // navigate('/');
      window.location.reload();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  return (
    <div>
      <form
        className="bg-white shadow-xl w-full max-w-xs border-4 px-8 pt-6 pb-8 font-poppins"
        onSubmit={authRegister}
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-3"
            htmlFor="username"
          >
            Nama
          </label>
          <input
            type="text"
            className="rounded w-full py-2 px-3 text-gray-700"
            id="username"
            placeholder="Nama Lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            type="text"
            className="rounded w-full py-2 px-3 text-gray-700 "
            id="username"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            type="password"
            className="rounded w-full py-2 px-3 text-gray-700 mb-3 "
            id="password"
            placeholder="Minimal 8 Karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Ulangi Password
          </label>
          <input
            type="password"
            className="rounded w-full py-2 px-3 text-gray-700 mb-3 "
            placeholder="Masukkan Kembali Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <button classNameName="" type="submit">
            Sign In
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Sudah punya akun HairHub?{' '}
          <a href="#" className="text-blue-500">
            Masuk di sini
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
