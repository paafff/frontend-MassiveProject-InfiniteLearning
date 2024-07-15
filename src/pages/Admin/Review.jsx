import React from 'react';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Layout from '../Layout';
import ListReview from '../../components/Admin/Dashboard/ListReview';
import HamburgerMenu from '../../components/Admin/Dashboard/HamburgerMenu';
import DetailReview from '../../components/User/Dashboard/DetailReview';
import ProfileBarber from '../../assets/images/OIP.webp';
import ProfilReviewer from '../../assets/images/profiles/profile_dummy.webp';

const dataReview = [
  {
    uuid: 0,
    desc: 'Javanese Barbershop',
    created_at: '07/07/2023',
  },
  {
    uuid: 1,
    desc: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 2,
    desc: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 3,
    desc: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 4,
    desc: 'ilham',
    created_at: '07/07/2023',
  },
];

const Review = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout>
      <div className="flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="w-screen min-h-screen">
          <ListReview
            listReview={dataReview}
            hamburgerMenu={
              <HamburgerMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
          <DetailReview
            profileBarber={ProfileBarber}
            profilReviewer={ProfilReviewer}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Review;
