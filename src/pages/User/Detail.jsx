import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import Gallery from '../../components/User/Gallery';
import ContentDetail from '../../components/User/ContentDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getMe } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Detail = () => {
  const { uuid } = useParams();

  const [businessByUUID, setBusinessByUUID] = useState('');

  useEffect(() => {
    const getBusinessByUUID = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/business/${uuid}`
        );

        setBusinessByUUID(response.data);
        // console.log('detailbusines', businessByUUID);
        console.log('uuid nya params', uuid);
        console.log('detailbusines', businessByUUID);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getBusinessByUUID();
  }, [uuid]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // mengambil nilai userAuthReducer pada store
  const userAuthSelector = (state) => state.userAuthReducer.userAuth;
  const userAuth = useSelector(userAuthSelector);

  useEffect(() => {
    const getMeUser = async () => {
      await dispatch(getMe());
    };

    getMeUser();
    // console.log(userAuth);
  }, [dispatch, navigate]);

  return (
    <Layout>
      <div class="xl:w-3/4 w-full px-3 md:px-5 min-h-screen my-5 mx-auto">
        <Gallery businessByUUID={businessByUUID} />

        <ContentDetail userAuth={userAuth} businessByUUID={businessByUUID} />
      </div>
    </Layout>
  );
};

export default Detail;
