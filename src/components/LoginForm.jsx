import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <form className="" onSubmit={authLogin}>
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

        <div>
          <button classNameName="" type="submit">
            Sign In
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Baru Mengenal HairHub?{' '}
          <a href="#" className="text-blue-500">
            Daftar Segera
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
