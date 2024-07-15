import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconHeader from '../assets/images/icons/gataunamanya.webp';
import dataHairTrends from '../data/hairTrends';

const HairTrend = ({ dataHairTrend, index }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row xl:w-3/4 lg:mx-auto">
      <div className="w-full h-max lg:min-h-screen flex flex-col gap-3 py-7 px-5 md:px-10 xl:px-20 xl:py-14 xl:w-2/3 drop-shadow-md bg-white">
        <Link
          to="/"
          className="text-sm font-semibold hover:underline transition-all w-fit"
          aria-label="beranda"
        >
          Back
        </Link>
        <div className="w-full gap-2 flex flex-col md:flex-row items-center place-content-center my-5">
          <img
            src={dataHairTrend?.image}
            className="rounded-md w-64 h-fit aspect-auto drop-shadow-md"
            alt=""
          />
        </div>
        <p className="text-xs">
          By : <span className="text-rose-400"> Admin</span>, 2023-08-17
          09:30:55{' '}
        </p>
        <p className="text-2xl font-bold">Gaya Rambut {dataHairTrend?.title}</p>
        <p className="text-justify my-1 text-sm">{dataHairTrend?.desc}</p>
        <div className="w-full flex justify-end">
          <p className="text-gray-500">Lihat selengkapnya </p>
        </div>
      </div>
      <div className="w-full h-fit bg-gray-200 lg:w-1/3 flex flex-col lg:items-center py-10 px-5">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <p className="text-2xl font-bold">Trend Lainnya</p>
          <img src={IconHeader} className="" alt="" />
        </div>
        <div className="w-full my-8">
          <Overflow />
        </div>
      </div>
    </div>
  );
};

const Overflow = () => {
  return (
    <div className="w-full lg:h-[800px] flex lg:flex-col lg:justify-center gap-5 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto px-16 lg:px-0 lg:pt-96">
      {dataHairTrends.map((data, index) => (
        <Link
          to={`/hair-trend?index=${index}`}
          className="mx-auto w-52 h-52 flex items-end justify-center p-3 rounded shadow-sm object-fill bg-no-repeat"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-52 lg:h-52 flex justify-center items-end">
            <p className="w-fit h-fit px-2 py-1 bg-white rounded text-sm font-semibold">
              {data.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HairTrend;
