import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DummyPaafffv2 = () => {
  const [service, setService] = useState('');
  // const [name, setName] = useState('null');
  // const [price, setPrice] = useState('null');
  const navigate = useNavigate();

  const getServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/services');
      setService(response.data[0]);
      // setName(response.data.name);
      // setPrice(response.data.price);
      // console.log('ini name', name);
      // console.log('ini price', price);
      console.log('ini service', service);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  useEffect(() => {
    getServices();
  }, [navigate]);

  return (
    <div>
      <button onClick={getServices} className="bg-blue-300">
        getservices{' '}
      </button>
      {/* <div>name : {service[0].}</div> */}
      {/* <div>name : {service?.name[0]}</div>
      <div>name : {service?.name[2]}</div> */}
      <div>price : {service ? service.price[2] : 'null'}</div>
      <div>price : {service ? service.price[0] : 'null'}</div>
    </div>
  );

  // return (
  //   <div>
  //     {services.map((service, index) => (
  //       <div key={index}>
  //         <div>Name: {service.name}</div>
  //         <div>Price: {service.price.join(', ')}</div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default DummyPaafffv2;
