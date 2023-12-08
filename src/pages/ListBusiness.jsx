import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import ComponentListBusiness from '../components/ListBusiness';
import axios from 'axios';

const listCity = [
  {
    id: 0,
    name: 'Garut',
  },
  {
    id: 1,
    name: 'Bandung',
  },
  {
    id: 2,
    name: 'Bekasi',
  },
  {
    id: 3,
    name: 'Mentawai',
  },
  {
    id: 4,
    name: 'Bogor',
  },
  {
    id: 5,
    name: 'Kediri',
  },
  {
    id: 6,
    name: 'Gresik',
  },
  {
    id: 7,
    name: 'Solo',
  },
];

const ListBusiness = ({ page }) => {
  const [dataBarber, setDataBarber] = useState([]);
  const [dataSalon, setDataSalon] = useState([]);

  const getBarbershopBusiness = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/barbershop`
      );

      setDataBarber(response.data);
      console.log(dataBarber);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const getSalonBusiness = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/salon`);

      setDataSalon(response.data);
      console.log(dataSalon);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getBarbershopBusiness();
    getSalonBusiness();
  }, []);

  return (
    <Layout>

      <ComponentListBusiness
        listCity={listCity}
        page={page}
        dataList={page == 'barbershop' ? dataBarber : dataSalon}
      />

    </Layout>
  );
};

export default ListBusiness;
