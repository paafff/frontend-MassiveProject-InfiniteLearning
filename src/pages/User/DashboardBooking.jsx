import React, { useState } from 'react';
import Layout from '../Layout';
import Sidebar from '../../components/Sidebar';
import HeaderBooking from '../../components/User/Dashboard/HeaderBooking';
import CardBooking from '../../components/User/Dashboard/CardBooking';
import { useParams } from 'react-router-dom';
import ReviewUser from '../../components/Admin/Dashboard/ReviewUser';

const DashboardBooking = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { id } = useParams();

  return (
    <Layout>
      <div className="flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="w-screen mx-auto flex flex-col ">
          {/* <HeaderBooking
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          /> */}

          <CardBooking businessId={id} />
          <ReviewUser selectedBusinessId={id} />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardBooking;
