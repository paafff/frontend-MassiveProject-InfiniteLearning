import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaEye } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ListUser = ({
  showSidebar,
  setShowSidebar,
  listUser,
  hamburgerMenu,
  setSelectedUserUUID,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Jumlah item per halaman

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(listUser.length / itemsPerPage);

  const displayedUsers = listUser.slice(offset, offset + itemsPerPage);

  return (
    <div className="w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16">
      {hamburgerMenu}

      <div className="bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md">
        <p className="text-base md:text-lg font-semibold">User</p>
        <hr className="my-5" />

        {displayedUsers.map((user, index) => (
          <User
            setSelectedUserUUID={setSelectedUserUUID}
            index={index}
            id={user.id}
            name={user.username}
            date={user.createdAt}
            uuid={user.uuid}
          />
        ))}

<ReactPaginate className='flex space-x-5 justify-center items-center mt-10'
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

const User = ({ id, name, date, index, uuid, setSelectedUserUUID }) => {
  const [UUID, setUUID] = useState('');

  return (
    <div
      className="w-full py-3 px-2 border-t border-gray-200 flex justify-start items-center gap-5"
      key={id}
    >
      <div className="w-1">
        <p className="text-xs text-gray-500">{index + 1}.</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/4 md:w-1/3">
          <p className="text-sm lg:text-base ">{name}</p>
          {/* <p className="text-sm lg:text-base ">{UUID}</p> */}
        </div>
        <div className="flex gap-2">
          <div className="py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded">
            <button
              onClick={(e) => {
                setUUID(uuid);
                setSelectedUserUUID(uuid);
              }}
            >
              <FaEye className="inline-block text-white scale-125" />
            </button>
          </div>
          <div className="py-1 px-3 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-all rounded">
            <MdOutlineOpenInNew className="inline-block  scale-125" />
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400">
            registered <br /> {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
