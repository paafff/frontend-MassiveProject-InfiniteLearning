import React, { useState } from 'react';
import { FaChevronLeft, FaEye } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ListBusiness = ({
  setSelectedBusinessUUID,
  setSelectedBusinessId,
  showSidebar,
  setShowSidebar,
  listBusiness,
  hamburgerMenu,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Jumlah item per halaman

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(listBusiness.length / itemsPerPage);

  const displayedBusiness = listBusiness.slice(offset, offset + itemsPerPage);

  return (
    <div className="w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16">
      {hamburgerMenu}

      <div className="relative bg-white w-full flex flex-col min-h-[650px] rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">Usaha</p>
        <hr className="my-5" />

        {displayedBusiness.map((business, index) => (
          <Business
            setSelectedBusinessUUID={setSelectedBusinessUUID}
            setSelectedBusinessId={setSelectedBusinessId}
            index={index}
            id={business.id}
            name={business.name}
            type={business.typeBusiness}
            date={business.created_at}
            uuid={business.uuid}
          />
        ))}

        <ReactPaginate
          className="flex space-x-5 justify-center items-center mt-10"
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          //UI
          containerClassName={'pagination'}
          activeClassName={
            'px-2 py-1 rounded text-zinc-800 border border-gray-200 bg-gray-100'
          }
          nextClassName={'px-2 py-1 rounded text-white bg-blue-600'}
          previousClassName={'px-2 py-1 rounded text-white bg-blue-600'}
        />
      </div>
    </div>
  );
};

const Business = ({
  uuid,
  setSelectedBusinessUUID,
  setSelectedBusinessId,
  id,
  name,
  type,
  date,
  index,
}) => {
  return (
    <div
      className="w-full py-3 px-2 border-t border-gray-200 flex justify-start items-center gap-5"
      key={id}
    >
      <div className="w-1">
        <p className="text-xs text-gray-500">{index + 1}.</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/4 md:w-1/3 flex flex-col gap-1 md:gap-2">
          {type == 'Barber' ? (
            <p className="text-[7px] md:text-sm w-fit px-[5px] py-[3px]  rounded-sm bg-zinc-900 text-white">
              {type}
            </p>
          ) : (
            <p className="text-[7px] md:text-sm w-fit px-[5px] py-[3px]  rounded-sm bg-rose-400 text-white">
              {type}
            </p>
          )}

          <p className="text-xs md:text-base ">{name}</p>
        </div>
        <div className="flex gap-2">
          <div className="py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded">
            <button
              onClick={(e) => {
                setSelectedBusinessUUID(uuid);
                setSelectedBusinessId(id);
              }}
            >
              <FaEye className="inline-block text-white scale-125" />
            </button>
          </div>
          <div className="py-1 px-3 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-all rounded">
            <Link to={`/detail/${uuid}`}>
              <MdOutlineOpenInNew className="inline-block  scale-125" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400">
            terdaftar <br /> {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListBusiness;
