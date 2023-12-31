import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import Sidebar from '../../components/Sidebar';
import ListUser from '../../components/Admin/Dashboard/ListUser';
import HamburgerMenu from '../../components/Admin/Dashboard/HamburgerMenu';
import DetailUser from '../../components/Admin/Dashboard/DetailUser';
import ReviewUser from '../../components/Admin/Dashboard/ReviewUser';
import axios from 'axios';

// data user dummy
// const dataUserPalsu = [
//   {
//     uuid: 0,
//     name: 'Ilham',
//     created_at: '07/07/2023',
//   },
//   {
//     uuid: 1,
//     name: 'ilham',
//     created_at: '07/07/2023',
//   },
//   {
//     uuid: 2,
//     name: 'ilham',
//     created_at: '07/07/2023',
//   },
//   {
//     uuid: 3,
//     name: 'ilham',
//     created_at: '07/07/2023',
//   },
//   {
//     uuid: 4,
//     name: 'ilham',
//     created_at: '07/07/2023',
//   },
// ];

// data user dummy
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

const User = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [dataUser, setDataUser] = useState([]);
  const [selectedUserUUID, setSelectedUserUUID] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/users`);

        setDataUser(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getUsers();
  }, []);

  return (
    <Layout>
      <div className="flex bg-gray-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="w-screen min-h-screen">
          <ListUser
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            listUser={dataUser}
            hamburgerMenu={
              <HamburgerMenu
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
            setSelectedUserUUID={setSelectedUserUUID}
          />

          <DetailUser selectedUserUUID={selectedUserUUID} />

          {/* <ReviewUser listFeedback={listFeedback} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default User;
