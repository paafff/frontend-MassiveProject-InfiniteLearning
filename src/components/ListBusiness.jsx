import React, { useEffect, useState } from 'react';
import BannerBarber from '../assets/images/banner/banner-barber.jpg';
import BannerSalon from '../assets/images/banner/banner-salon.jpg';
import ImageBarber from '../assets/images/business/image1.jpg';
import ImageSalon from '../assets/images/business/image8.jpg';

// MUI Select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Icon
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListBusiness = ({ listCity, dataList, page }) => {
  const [city, setCity] = useState('');
  // const [kota, setKota] = useState('mentawai');
  const [kota, setKota] = useState(null);

  const handleCity = (event) => {
    setCity(event);
    setKota(event);
  };

  const [searchBusinessData, setSearchBusinessData] = useState([]);

  useEffect(() => {
    const getBusinessByParams = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL
          }/business-search/${kota}?typeBusiness=${page}`
        );

        setSearchBusinessData(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getBusinessByParams();
  }, [page, city]);

  return (
    <div className=" min-w-full min-h-screen">
      <Banner page={page} />

      <div className="w-full h-full p-4 flex flex-col gap-4 mt-4">
        <div className="w-full flex px-2 justify-between items-center md:px-5 xl:px-72">
          <p className="text-xs md:text-sm xl:text-base">
            {/* 1-12 from 100 results */}
          </p>

          <SelectCity
            // city={city}
            handleCity={handleCity}
            listCity={listCity}
          />
        </div>

        {kota ? (
          <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-72 gap-4 xl:gap-8 md:gap-3 items-center">
            {searchBusinessData.map((data) => (
              // child
              <Card
                id={data.id}
                name={data.name}
                city={data.address[1]}
                page={page}
                uuid={data.uuid}
                data={data}
                schedule={data.schedule}
              />
            ))}
          </div>
        ) : (
          <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-72 gap-4 xl:gap-8 md:gap-3 items-center">
            {dataList.map((data) => (
              // child
              <Card
                id={data.id}
                name={data.name}
                city={data.address[1]}
                page={page}
                uuid={data.uuid}
                schedule={data.schedule}
                data={data}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Banner = ({ page }) => {
  return (
    <div
      className="w-full h-32 md:h-56 lg:h-72 xl:h-96 flex items-end justify-start py-5 px-7 bg-gray-400 bg-cover "
      style={{
        backgroundImage: `url(${page == 'barbershop' ? BannerBarber : BannerSalon
          })`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className="text-white text-lg md:text-2xl lg:text-3xl xl:text-5xl xl:px-64 xl:py-12 font-bold tracking-wider">
        List {page}
      </p>
    </div>
  );
};

const SelectCity = ({ city, handleCity, listCity }) => {
  return (
    <FormControl sx={{ m: 0, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label" className="font-bold">
        Kota
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        // value={()}
        onChange={(e) => handleCity(e.target.value)}
        autoWidth
        label="Age"
      >
        <MenuItem>
          <b className="" disabled>Pilih Kota</b>
        </MenuItem>

        {listCity.map((city) => (
          <MenuItem value={city.name}>
            <p className='font-semibold'>{city.name}</p>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const Card = ({ id, name, city, page, uuid, schedule, data }) => {
  //scheduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee yak
  const [status, setStatus] = useState('');
  const currentTime = new Date().toLocaleTimeString('id-ID', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  const targetTimeOpen = schedule?.[0];
  const targetTimeClose = schedule?.[1];

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
      className="rounded-lg p-4 drop-shadow-2xl flex items-end justify-center  aspect-square bg-gray-300"
      style={{
        backgroundImage: `url(${page == 'barbershop' ? data?.imageURL[0] : data?.imageURL[0]
          })`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}
      key={id}
    >
      <div className="w-full p-4 min-h-[25%] bg-white rounded-md flex justify-between items-center hover:scale-95 transition-all hover:cursor-pointer">
        <div className="w-full h-full flex flex-col justify-between">
          {status == "Tutup" ? (
            <p className="text-red-600 font-semibold text-xs xl:text-sm">
              {status}
            </p>
          ) : (
            <p className="text-blue-600 font-semibold text-xs xl:text-sm">
              {status}
            </p>
          )}
          <p className="text-zinc-800 font-bold text-xs md:text-sm xl:text-base">
            {name}
          </p>
          <p className="text-gray-500 font-thin text-xs xl:text-sm">{city}</p>
        </div>
        <Link to={`/detail/${uuid}`} className="h-full flex items-center">
          <div className="h-8 w-8 bg-rose-500 rounded-lg flex justify-center items-center shadow-md hover:shadow-none hover:scale-90 transition-all">
            <IoIosArrowRoundForward className="text-white scale-150" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListBusiness;
