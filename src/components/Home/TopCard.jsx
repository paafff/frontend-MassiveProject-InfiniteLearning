import React, { useEffect, useState } from 'react';
import Header from '../../assets/images/icons/gataunamanya.webp';
import { FaAngleDown } from 'react-icons/fa';
import { TbMoustache } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TopCard = () => {
  const [dataBusiness, setDataBusiness] = useState([]);

  useEffect(() => {
    const getSubsBusiness = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/subscription`
        );

        setDataBusiness(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSubsBusiness();
  }, []);

  return (
    <div className="w-full flex flex-col my-12 md:px-12">
      <div className="w-full flex flex-col">
        <p className="text-center text-lg md:text-xl xl:text-3xl font-bold">
          Top Rekomendasi
        </p>
        <div className="w-full flex justify-center items-center my-1 xl:my-3">
          <img src={Header} alt="" />
        </div>
      </div>
      <div className="w-full xl:w-3/4 xl:mx-auto flex gap-5 overflow-x-scroll py-3 my-5 px-12">
        {dataBusiness.map((card) => (
          <CardTopRecommend card={card} />
        ))}
      </div>
      <div className="w-full  flex justify-center items-center">
        <div className="bg-rose-400 py-1 px-3 rounded-md hover:bg-rose-500 hover:scale-90 shadow-md transition-all hover:cursor-pointer">
          <Link to={'/business'}>
            <p className="text-white">
              <FaAngleDown className="inline-block text-white me-2" />
              Show more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardTopRecommend = ({ card }) => {
  //scheduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee yak
  const [status, setStatus] = useState('');
  const currentTime = new Date().toLocaleTimeString('id-ID', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  const targetTimeOpen = card.schedule?.[0];
  const targetTimeClose = card.schedule?.[1];

  const currentHours = parseInt(currentTime.split(':')[0]);
  const currentMinutes = parseInt(currentTime.split(':')[1]);

  const targetHoursOpen = parseInt(targetTimeOpen?.split(':')[0]);
  const targetMinutesOpen = parseInt(targetTimeOpen?.split(':')[1]);

  const targetHoursClose = parseInt(targetTimeClose?.split(':')[0]);
  const targetMinutesClose = parseInt(targetTimeClose?.split(':')[1]);
  useEffect(() => {
    if (
      // currentHours > targetHoursOpen ||
      // (currentHours === targetHoursOpen && currentMinutes > targetMinutesOpen)

      (currentHours > targetHoursOpen ||
        (currentHours === targetHoursOpen &&
          currentMinutes > targetMinutesOpen)) &&
      //pemisah
      (currentHours < targetHoursClose ||
        (currentHours === targetHoursClose &&
          currentMinutes < targetMinutesClose))
    ) {
      setStatus(`Buka`);
    } else {
      setStatus(`Tutup`);
    }
  }, [targetTimeClose, targetTimeOpen]);

  return (
    <div
      className="p-3 min-w-[288px] xl:min-w-[350px] h-96 xl:h-[450px] bg-gray-300 flex flex-col justify-between rounded-lg xl:rounded-xl drop-shadow-md"
      style={{
        backgroundImage: `url(${card?.imageURL?.[0]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex justify-end gap-3">
        <div className="px-2 h-8 bg-white rounded-full flex justify-center items-center">
          <p className="text-[10px] md:text-xs text-red-600 font-thin">
            <IoIosCheckmarkCircleOutline className="inline-block scale-150 me-2" />
            Top Recommendation
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center bg-white rounded-md p-3 lg:px-5 hover:cursor-pointer">
        <div className="flex flex-col gap-1">
          {status == 'Tutup' ? (
            <p className="text-red-600 font-semibold text-xs xl:text-sm">
              {status}
            </p>
          ) : (
            <p className="text-blue-600 font-semibold text-xs xl:text-sm">
              {status}
            </p>
          )}
          <p className="text-xs lg:text-base font-semibold line-clamp-1">
            {card.name}
          </p>
          {/* [prov,kab,kec,kel,rtrw] */}
          <p className="text-xs lg:text-base text-gray-500">
            {card.address[1]}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to={`/detail/${card.uuid}`}
            className="w-8 h-8 flex justify-center items-center bg-rose-500 rounded-lg drop-shadow-md hover:scale-90 hover:cursor-pointer transition-all"
            alt="detail"
          >
            <FaArrowRight className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
