import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DummyPaafffv3 = () => {
  const [users, setUsers] = useState('');
  const [business, setBusiness] = useState('');

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/user/938209bd-a72f-4cd5-9822-4974a58c39fd'
      );
      setUsers(response.data);

      console.log(users);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  const getBusinessById = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/business/210c2eed-fb0e-48b2-89c0-27b89e412bc9'
      );
      setBusiness(response.data);

      console.log(business);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  useEffect(() => {
    getUsers();
    getBusinessById();
  }, []);

  const handleClick = () => {
    console.log(users);
  };
  return (
    <div>
      <button className="bg-blue-300" onClick={handleClick}>
        getusers
      </button>
      <br />
      DummyPaafffv3
      <br />
      <button className="bg-blue-300" onClick={getBusinessById}>
        getbusiness
      </button>
      <div>image : {business ? business.imageURL[0] : 'null'}</div>
      <div>image : {business ? business.imageURL[2] : 'null'}</div>
    </div>
  );
};

export default DummyPaafffv3;
