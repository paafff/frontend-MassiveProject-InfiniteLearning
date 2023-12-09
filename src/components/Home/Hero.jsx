import React, { useState } from 'react';
import HeroImage from '../../assets/images/barbershop-medan1.jpg';
import Nekuk from '../../assets/images/nekuk.png';
import { IoSearchOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/searchSlice';

const Hero = () => {
  //   const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(''); // State lokal pada komponen

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchValue(localSearch)); // Mengirim nilai pencarian ke Redux store
    navigate('/business');
  };
  return (
    <div className="min-w-screen">
      <div
        className="w-full bg-no-repeat h-96 md:h-[480px] lg:h-[560px] bg-cover flex flex-col justify-between"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="w-full h-4/5 flex justify-center items-center">
          <div className="w-80 md:w-[430px] xl:w-[560px] h-40 xl:h-64 md:h-52 px-4 md:px-10  backdrop-blur-sm bg-white/50  rounded-lg flex flex-col gap-3 justify-center items-center border shadow-md">
            <p
              className="text-sm md:text-base xl:text-xl text-white"
              style={{ fontWeight: 900 }}
            >
              Mau Cari Barbershop atau Salon?
            </p>
            <p className="text-xs md:text-sm xl:text-lg font-normal text-white text-center">
              Dapatkan Informasinya dan langsung Reservasi Tempat di HairHub{' '}
            </p>
            <div className="w-full h-10 xl:h-16 rounded-md bg-white drop-shadow-lg flex justify-between items-center px-3 xl:px-6">
              <IoSearchOutline className="inline-block scale-150" />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex justify-between items-center gap-4 md:gap-4"
              >
                <input
                  type="text"
                  placeholder="Masukkan nama / lokasi"
                  className="text-xs md:text-sm xl:text-base h-7 border-0 w-full md:w-56 xl:w-80 placeholder:text-xs placeholder:xl:text-sm px-2"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-xs md:text-sm xl:text-base hover:cursor-pointer bg-rose-400 hover:bg-rose-500 active:scale-95 transition-all px-3 py-1.5 rounded-sm xl:rounded text-white"
                >
                  Cari
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="w-full h-1/5 bg-cover"
          style={{ backgroundImage: `url(${Nekuk})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
