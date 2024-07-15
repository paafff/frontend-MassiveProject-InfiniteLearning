import React from 'react';
import ImageBanner from '../assets/images/dmozeSalon/dmoze4.webp';

const Banner = () => {
  return (
    <div
      className="w-full h-[306px] bg-no-repeat"
      style={{
        backgroundImage: `url(${ImageBanner})`,
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default Banner;
