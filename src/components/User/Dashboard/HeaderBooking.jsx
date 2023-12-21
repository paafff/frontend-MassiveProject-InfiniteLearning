import React from 'react';
import { PiHandshakeFill } from 'react-icons/pi';
import { FaRegFaceFrown } from 'react-icons/fa6';
import HumbergerMenu from './HumbergerMenu';

const HeaderBooking = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="w-screen lg:w-full pt-10 px-5 md:px-12 xl:px-24 ">
      <HumbergerMenu
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div className="xl:w-3/4 mx-auto">
      <p className="text-center text-xl lg:text-2xl font-semibold">
        Javanese Barbershop
      </p>
      <hr className="my-5 border-t border-black" />

      {/* <div className="flex flex-col gap-3 xl:w-3/4 xl:mx-auto">
        <div className="w-full flex gap-3 items-center justify-center">
          <div className=" w-1/4 md:w-32 aspect-square drop-shadow bg-white rounded-md flex justify-center items-center">
            <p className="text-5xl text-green-600 font-semibold">17</p>
          </div>
          <div className="w-3/4 py-4 px-3 drop-shadow rounded bg-white flex gap-3 justify-center">
            <div className="w-1/4 flex justify-center items-center">
              <PiHandshakeFill className="text-zinc-800 inline-block scale-[2] md:scale-[2.5]" />
            </div>
            <div className="w-3/4 flex justify-center items-center">
              <p className="text-sm md:text-lg xl:text-xl">
                Total pesanan diterima
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3 items-center justify-center">
          <div className=" w-1/4 md:w-32 aspect-square drop-shadow bg-white rounded-md flex justify-center items-center">
            <p className="text-5xl text-red-600 font-semibold">7</p>
          </div>
          <div className="w-3/4 py-4 px-3 drop-shadow rounded bg-white flex gap-3 justify-center">
            <div className="w-1/4 flex justify-center items-center">
              <FaRegFaceFrown className="text-zinc-800 inline-block scale-[2] md:scale-[2.5]" />
            </div>
            <div className="w-3/4 flex justify-center items-center">
              <p className="text-sm md:text-lg xl:text-xl">
                Total pesanan ditolak
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 border-t border-black" /> */}
    </div>
  );
};

export default HeaderBooking;
