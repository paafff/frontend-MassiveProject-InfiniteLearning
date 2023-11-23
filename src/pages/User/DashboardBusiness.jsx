import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../Layout';
import Sidebar from '../../components/User/Sidebar';
import BasicInformation from '../../components/User/Dashboard/BasicInformation';
import DetailBusiness from '../../components/User/Dashboard/DetailBusiness';
import Services from '../../components/User/Dashboard/Services';
import Employee from '../../components/User/Dashboard/Employee';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const DashboardBussiness = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { uuid } = useParams();

  const [businessByUUID, setBusinessByUUID] = useState('');

  useEffect(() => {
    const getBusinessByUUID = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/business/${uuid}`
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

  return (
    <Layout>
      <div className="flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="w-screen flex flex-col">
          <BasicInformation
            businessByUUID={businessByUUID}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <DetailBusiness businessByUUID={businessByUUID} />
          <Services businessByUUID={businessByUUID} />
          <Employee businessByUUID={businessByUUID} />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardBussiness;
