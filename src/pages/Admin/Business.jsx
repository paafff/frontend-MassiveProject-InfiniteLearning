import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import Sidebar from '../../components/Sidebar';
import ListBusiness from '../../components/Admin/Dashboard/ListBusiness';
import DetailBusiness from '../../components/Admin/Dashboard/DetailBusiness';
import HamburgerMenu from '../../components/Admin/Dashboard/HamburgerMenu';
import axios from 'axios';
import ReviewUser from '../../components/Admin/Dashboard/ReviewUser';

const dataBusiness = [
  {
    uuid: 0,
    typeBusiness: 'Barber',
    name: 'Javanese Barbershop',
    created_at: '07/07/2023',
  },
  {
    uuid: 1,
    typeBusiness: 'Barber',
    name: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 2,
    typeBusiness: 'Barber',
    name: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 3,
    typeBusiness: 'Salon',
    name: 'ilham',
    created_at: '07/07/2023',
  },
  {
    uuid: 4,
    typeBusiness: 'Salon',
    name: 'ilham',
    created_at: '07/07/2023',
  },
];

const listFeedback = [
  {
    uuid: 0,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores ea enim voluptatibus! Nihil nisi, harum dolores soluta dolore, maiores rem rerum facere aperiam totam molestias consectetur minus tempore modi!',
    rating: 5,
    created_at: '07/07/2023',
  },
  {
    uuid: 1,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores ea enim voluptatibus! Nihil nisi, harum dolores soluta dolore, maiores rem rerum facere aperiam totam molestias consectetur minus tempore modi!',
    rating: 4,
    created_at: '07/07/2023',
  },
  {
    uuid: 2,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores ea enim voluptatibus! Nihil nisi, harum dolores soluta dolore, maiores rem rerum facere aperiam totam molestias consectetur minus tempore modi!',
    rating: 4,
    created_at: '07/07/2023',
  },
  {
    uuid: 3,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores ea enim voluptatibus! Nihil nisi, harum dolores soluta dolore, maiores rem rerum facere aperiam totam molestias consectetur minus tempore modi!',
    rating: 4,
    created_at: '07/07/2023',
  },
  {
    uuid: 4,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores ea enim voluptatibus! Nihil nisi, harum dolores soluta dolore, maiores rem rerum facere aperiam totam molestias consectetur minus tempore modi!',
    rating: 4,
    created_at: '07/07/2023',
  },
];

const Business = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [dataBusiness, setDataBusiness] = useState([]);
  const [selectedBusinessUUID, setSelectedBusinessUUID] = useState('');
  const [selectedBusinessId, setSelectedBusinessId] = useState('');

  useEffect(() => {
    const getAllBusiness = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/business`
        );

        setDataBusiness(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getAllBusiness();
  }, []);

  return (
    <Layout>
      <div className="flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="w-screen min-h-screen">
          <ListBusiness
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            listBusiness={dataBusiness}
            hamburgerMenu={
              <HamburgerMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
            setSelectedBusinessUUID={setSelectedBusinessUUID}
            setSelectedBusinessId={setSelectedBusinessId}
          />

          <DetailBusiness selectedBusinessUUID={selectedBusinessUUID} />

          <ReviewUser
            listFeedback={listFeedback}
            selectedBusinessId={selectedBusinessId}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Business;
