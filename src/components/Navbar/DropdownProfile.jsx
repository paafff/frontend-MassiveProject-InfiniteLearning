import React from 'react';
import { Link } from 'react-router-dom';

const DropdownProfile = ({ display, logoutProps, user }) => {
  return (
    <div
      className={`z-30 border-2 py-5 px-4 w-fit h-fit ${display} transition-all bg-white rounded-md absolute top-[330px] lg:right-24 lg:top-20  shadow-md`}
    >
      <ul className="flex flex-col gap-3">
        <p className="transition-all text-sm  rounded-sm px-2">
          {user?.username}
        </p>
        <p className="transition-all text-sm  rounded-sm px-2">{user?.email}</p>
        <hr />
        {user?.role == 'Admin' ? (
          <Link
            to="/admin/account"
            className="transition-all text-sm hover:bg-slate-200 rounded-sm px-2 py-2"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/user/dashboard"
            className="transition-all text-sm hover:bg-slate-200 rounded-sm px-2 py-2"
          >
            Dashboard
          </Link>
        )}

        <Link
          to="#"
          onClick={logoutProps}
          className="transition-all text-sm hover:bg-slate-200 rounded-sm px-2 py-2"
        >
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default DropdownProfile;
