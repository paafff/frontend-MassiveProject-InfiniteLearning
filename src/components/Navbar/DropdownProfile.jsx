import React from 'react'
import { Link } from 'react-router-dom'

const DropdownProfile = ({ display, logoutProps }) => {
    return (
        <div className={`z-30 border-2 py-3 px-4 w-fit h-fit ${display} transition-all bg-white rounded-md absolute top-[330px] lg:right-24 lg:top-20  shadow-md`}>
            <ul className='flex flex-col gap-3'>

                <Link
                    to="/user/dashboard"
                    className='transition-all text-sm hover:bg-slate-200 rounded-sm px-2'>
                    Profile
                </Link>
                <hr />
                <Link
                    to="#"
                    onClick={logoutProps}
                    className='transition-all text-sm hover:bg-slate-200 rounded-sm px-2'>
                    Logout
                </Link>

            </ul>
        </div>
    )
}

export default DropdownProfile