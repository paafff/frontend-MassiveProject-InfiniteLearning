import React from 'react';
import { IoMdInformationCircleOutline, IoMdPin } from 'react-icons/io';
import { FaRegBuilding, FaAngleDown, FaInfoCircle } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMe } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const listUsaha = [
  {
    id: 1,
    name: 'Javanese Barbershop',
  },
  {
    id: 2,
    name: 'Captain Barbershop',
  },
  {
    id: 3,
    name: 'Corrin King Barbershop',
  },
];

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // mengambil nilai userAuthReducer pada store
  const userAuthSelector = (state) => state.userAuthReducer.userAuth;
  const userAuth = useSelector(userAuthSelector) || '';

  useEffect(() => {
    const getMeUser = async () => {
      await dispatch(getMe());
    };

    getMeUser();
    // console.log(userAuth);
    // console.log(listBusiness);
  }, [dispatch, navigate]);

  const [listBusiness, setListBusiness] = useState([]);

  const getMyBusiness = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/my-business`);

      setListBusiness(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getMyBusiness();

    console.log(listBusiness);
  }, [dispatch, navigate]);
  return (
    <div
      className={`min-h-full pb-32 z-10 w-72 transition-all rounded-br-3xl bg-white drop-shadow-md absolute ${
        showSidebar ? 'left-0' : 'left-[-300px]'
      } lg:left-0 lg:static`}
    >
      <Biodata />

      <AjukanUsaha />

      <Usaha listBusiness={listBusiness} />

      <Booking listBusiness={listBusiness} />
    </div>
  );
};

const Biodata = () => {
  return (
    <Link
      to="/dashboard"
      className="w-full h-fit flex items-center justify-start px-20 py-12"
    >
      <p className="text-sm lg:text-base text-black flex items-center gap-4">
        <IoMdInformationCircleOutline className="inline-block scale-150" />
        Biodata
      </p>
    </Link>
  );
};

const AjukanUsaha = () => {
  return (
    <Link className="w-full h-fit hover:bg-gray-200 transition-all white flex items-center justify-start px-20 py-12">
      <p className="text-sm lg:text-base text-black flex items-center gap-4">
        <FaRegBuilding className="inline-block scale-150" />
        Ajukan Usaha
      </p>
    </Link>
  );
};

const Usaha = ({ listBusiness }) => {
  return (
    <Link className="w-full h-fit  transition-all white flex flex-col gap-8 justify-start px-20 py-12">
      <p className="text-sm lg:text-base text-black flex items-center gap-4">
        <IoMdPin className="inline-block scale-150" />
        Usaha <FaAngleDown className="inline-block text-zinc-900" />
      </p>
      <div className="flex flex-col gap-3">
        {listBusiness.map((business) => (
          <Link
            to={`/dashboard-bussiness/${business.uuid}`}
            // to={`/dashboard-business/${business.uuid}`}
            className="py-2 px-4 hover:bg-gray-200 transition-all rounded"
          >
            <p className="text-xs" key={business.id}>
              {business.name}
            </p>
          </Link>
        ))}
      </div>
    </Link>
  );
};

const Booking = ({ listBusiness }) => {
  return (
    <Link className="w-full h-fit  transition-all white flex flex-col gap-8 justify-start px-20 py-12">
      <p className="text-sm lg:text-base text-black flex items-center gap-4">
        <IoMdPin className="inline-block scale-150" />
        Booking <FaAngleDown className="inline-block text-zinc-900" />
      </p>
      <div className="flex flex-col gap-3">
        {listBusiness.map((usaha) => (
          <Link
            to="/dashboard-booking"
            className="py-2 px-4 hover:bg-gray-200 transition-all rounded"
          >
            <p className="text-xs" key={usaha.id}>
              {usaha.name}
            </p>
          </Link>
        ))}
      </div>
    </Link>
  );
};

export default Sidebar;
