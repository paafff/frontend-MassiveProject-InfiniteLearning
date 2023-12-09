import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import ComponentListAllBusiness from '../components/ListAllBusiness';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

const ListAllBusiness = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchSelector = (state) => state.searchReducer.searchValue;
  const searchValueRedux = useSelector(searchSelector);

  const [dataBusiness, setDataBusiness] = useState([]);

  const [search, setSearch] = useState('');

  // http://localhost:5000/business-search?search=bekasi

  const getSearchBusiness = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/business-search?search=${
          search ? search : searchValueRedux
        }`
      );

      console.log('searchredux', searchValueRedux);
      setDataBusiness(response.data);
      console.log(dataBusiness);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getSearchBusiness();
  }, [search]);

  return (
    <Layout>
      <ComponentListAllBusiness
        listCity={listCity}
        // page={page}
        setSearch={setSearch}
        dataList={dataBusiness}
      />
    </Layout>
  );
};

export default ListAllBusiness;
