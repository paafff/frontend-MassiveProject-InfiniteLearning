import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import Gallery from '../../components/User/Gallery';
import ContentDetail from '../../components/User/ContentDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        // console.log('uuid nya params', uuid);
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

  return (
    <Layout>
      <div class="xl:w-3/4 w-full px-3 md:px-5 min-h-screen my-5 mx-auto">
        <Gallery />

        <ContentDetail businessByUUID={businessByUUID} />
      </div>
    </Layout>
  );
};

export default Detail;
