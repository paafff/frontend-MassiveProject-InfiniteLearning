import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import ComponentListBusiness from '../components/ListBusiness';
import axios from 'axios';

const listCity = [
  {
    id: 0,
    name: 'Jakarta',
  },
  {
    id: 1,
    name: 'Bogor',
  },
  {
    id: 2,
    name: 'Depok',
  },
  {
    id: 3,
    name: 'Tangerang',
  },
  {
    id: 4,
    name: 'Bekasi',
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
